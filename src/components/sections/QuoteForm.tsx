"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { leadFormSchema, type LeadFormData, SERVICE_OPTIONS, validateFile, MAX_FILE_SIZE_MB } from "@/lib/validation";
import { COMPANY } from "@/lib/content";
import { readTrackingParams, readServiceParam, trackPhoneTap, trackWhatsappTap } from "@/lib/gtag";

/* ============================================================
   SECTION 11 — FULL QUOTE FORM
   Concrete (light) band.
   All 9 fields + file upload + consent + hidden UTM/gclid fields.
   On submit: skeleton loading state → /thank-you redirect.
   Also shows contact details (both phones, WhatsApp, email, address).
   ============================================================ */

export default function QuoteForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  // Populate hidden UTM/tracking fields and pre-select service from URL
  useEffect(() => {
    const tracking = readTrackingParams();
    Object.entries(tracking).forEach(([key, val]) => {
      setValue(key as keyof LeadFormData, val);
    });

    // Ad landing: pre-select service from ?service= param
    const service = readServiceParam();
    const variantMap: Record<string, string> = {
      fabrication: "Structural fabrication",
      manpower: "Manpower supply",
      maintenance: "Plant maintenance or shutdown",
    };
    if (variantMap[service]) {
      setValue("service", variantMap[service] as LeadFormData["service"]);
    }
  }, [setValue]);

  const onSubmit = async (data: LeadFormData) => {
    if (data.website) return; // honeypot triggered — silently drop

    setSubmitError("");

    // Build FormData to support file upload
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        formData.append(key, String(val));
      }
    });
    if (selectedFile) {
      formData.append("file", selectedFile, selectedFile.name);
    }

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        reset();
        setSelectedFile(null);
        router.push("/thank-you");
      } else {
        const body = await res.json().catch(() => ({}));
        setSubmitError(
          body.message ?? "Something went wrong. Please call us directly."
        );
      }
    } catch {
      setSubmitError(
        "Could not send your request. Please call us at " + COMPANY.phone1
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setFileError("");
      return;
    }
    const err = validateFile(file);
    if (err) {
      setFileError(err);
      setSelectedFile(null);
      e.target.value = "";
    } else {
      setFileError("");
      setSelectedFile(file);
    }
  };

  const waHref = `https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.whatsappMessage}`;

  return (
    <section
      aria-labelledby="quote-form-heading"
      className="band band--light"
      id="quote-form"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-label">11 / Request a quote</span>
          <hr className="section-rule" />
        </div>

        <div className="quote-form-grid">
          {/* LEFT: The form */}
          <div>
            <h2
              id="quote-form-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 700,
                fontSize: "var(--text-h2)",
                textTransform: "uppercase",
                marginBottom: "2rem",
                maxWidth: "22ch",
              }}
            >
              Tell us what you need.
            </h2>

            {/* Form loading skeleton */}
            {isSubmitting ? (
              <div
                className="skeleton"
                style={{ width: "100%", height: "480px" }}
                aria-label="Sending your request..."
                role="status"
              />
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Quote request form"
              >
                {/* Honeypot — hidden from users, must be empty */}
                <input
                  {...register("website")}
                  type="text"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: "none" }}
                  autoComplete="off"
                />

                {/* Hidden UTM / tracking fields */}
                <input type="hidden" {...register("utm_source")} />
                <input type="hidden" {...register("utm_medium")} />
                <input type="hidden" {...register("utm_campaign")} />
                <input type="hidden" {...register("utm_term")} />
                <input type="hidden" {...register("utm_content")} />
                <input type="hidden" {...register("gclid")} />

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="f-name" className="form-label form-label--required">
                      Name
                    </label>
                    <input
                      id="f-name"
                      type="text"
                      className="form-input"
                      autoComplete="name"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "f-name-err" : undefined}
                    />
                    {errors.name && (
                      <span id="f-name-err" className="form-error" role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="form-group">
                    <label htmlFor="f-company" className="form-label form-label--required">
                      Company
                    </label>
                    <input
                      id="f-company"
                      type="text"
                      className="form-input"
                      autoComplete="organization"
                      {...register("company")}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "f-company-err" : undefined}
                    />
                    {errors.company && (
                      <span id="f-company-err" className="form-error" role="alert">
                        {errors.company.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="f-phone" className="form-label form-label--required">
                      Phone (Indian mobile)
                    </label>
                    <input
                      id="f-phone"
                      type="tel"
                      className="form-input"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={10}
                      {...register("phone")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "f-phone-err" : undefined}
                    />
                    {errors.phone && (
                      <span id="f-phone-err" className="form-error" role="alert">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* Service */}
                  <div className="form-group">
                    <label htmlFor="f-service" className="form-label form-label--required">
                      Service needed
                    </label>
                    <div className="form-select-wrapper">
                      <select
                        id="f-service"
                        className="form-select form-input"
                        {...register("service")}
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? "f-service-err" : undefined}
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s: string) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && (
                      <span id="f-service-err" className="form-error" role="alert">
                        {errors.service.message}
                      </span>
                    )}
                  </div>

                  {/* Plant location */}
                  <div className="form-group">
                    <label htmlFor="f-location" className="form-label form-label--required">
                      Plant location (city, state)
                    </label>
                    <input
                      id="f-location"
                      type="text"
                      className="form-input"
                      autoComplete="address-level2"
                      {...register("location")}
                      aria-invalid={!!errors.location}
                      aria-describedby={errors.location ? "f-location-err" : undefined}
                    />
                    {errors.location && (
                      <span id="f-location-err" className="form-error" role="alert">
                        {errors.location.message}
                      </span>
                    )}
                  </div>

                  {/* Email (optional) */}
                  <div className="form-group">
                    <label htmlFor="f-email" className="form-label">
                      Email (optional)
                    </label>
                    <input
                      id="f-email"
                      type="email"
                      className="form-input"
                      autoComplete="email"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "f-email-err" : undefined}
                    />
                    {errors.email && (
                      <span id="f-email-err" className="form-error" role="alert">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Requirement details (optional) */}
                  <div className="form-group">
                    <label htmlFor="f-requirement" className="form-label">
                      Requirement details (optional)
                    </label>
                    <textarea
                      id="f-requirement"
                      className="form-textarea form-input"
                      placeholder="Equipment, tonnage, dates if known"
                      {...register("requirement")}
                    />
                  </div>

                  {/* File upload (optional) */}
                  <div className="form-group">
                    <label htmlFor="f-file" className="form-label">
                      Upload drawing or BOQ (optional)
                    </label>
                    <p
                      className="text-mono"
                      style={{ fontSize: "0.75rem", color: "var(--color-steel)", marginBottom: "0.375rem" }}
                    >
                      PDF, DWG, JPG, PNG or WEBP. Max {MAX_FILE_SIZE_MB} MB.
                    </p>
                    <input
                      id="f-file"
                      type="file"
                      className="form-input form-file"
                      accept=".pdf,.dwg,.jpg,.jpeg,.png,.webp"
                      onChange={handleFileChange}
                      aria-describedby={fileError ? "f-file-err" : undefined}
                    />
                    {fileError && (
                      <span id="f-file-err" className="form-error" role="alert">
                        {fileError}
                      </span>
                    )}
                    {selectedFile && !fileError && (
                      <span
                        className="text-mono"
                        style={{ fontSize: "0.75rem", color: "var(--color-steel)" }}
                      >
                        Selected: {selectedFile.name} (
                        {(selectedFile.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    )}
                  </div>

                  {/* Consent checkbox */}
                  <div className="form-checkbox-group">
                    <input
                      id="f-consent"
                      type="checkbox"
                      className="form-checkbox"
                      {...register("consent")}
                      aria-describedby={errors.consent ? "f-consent-err" : undefined}
                      aria-invalid={!!errors.consent}
                    />
                    <label htmlFor="f-consent" className="form-checkbox-label">
                      I agree to the{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--color-graphite)" }}
                      >
                        Privacy Policy
                      </Link>
                      . I understand that Abhyanand Engineering will contact me
                      regarding my request.
                    </label>
                  </div>
                  {errors.consent && (
                    <span id="f-consent-err" className="form-error" role="alert">
                      {errors.consent.message}
                    </span>
                  )}

                  {/* Server error */}
                  {submitError && (
                    <div
                      role="alert"
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fca5a5",
                        padding: "1rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body)",
                        color: "#991b1b",
                      }}
                    >
                      {submitError}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn--primary btn--full"
                    disabled={isSubmitting || !!fileError}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Contact details */}
          <div style={{ paddingTop: "1rem" }}>
            <h3
              className="text-mono"
              style={{ color: "var(--color-steel)", marginBottom: "1.5rem" }}
            >
              Or contact us directly
            </h3>

            <div className="contact-block">
              <div className="contact-block__item">
                <span className="contact-block__label">Phone</span>
                <span className="contact-block__value">
                  <a
                    href={`tel:${COMPANY.phone1Raw}`}
                    onClick={() => trackPhoneTap(COMPANY.phone1Raw)}
                  >
                    {COMPANY.phone1}
                  </a>
                </span>
              </div>

              <div className="contact-block__item">
                <span className="contact-block__label">Phone</span>
                <span className="contact-block__value">
                  <a
                    href={`tel:${COMPANY.phone2Raw}`}
                    onClick={() => trackPhoneTap(COMPANY.phone2Raw)}
                  >
                    {COMPANY.phone2}
                  </a>
                </span>
              </div>

              <div className="contact-block__item">
                <span className="contact-block__label">WhatsApp</span>
                <span className="contact-block__value">
                  <a
                    href={waHref}
                    onClick={trackWhatsappTap}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send a message
                  </a>
                </span>
              </div>

              <div className="contact-block__item">
                <span className="contact-block__label">Email</span>
                <span className="contact-block__value">
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: "2rem",
                borderTop: "var(--border-hairline)",
                paddingTop: "1.5rem",
              }}
            >
              <p
                className="text-mono"
                style={{ color: "var(--color-steel)", marginBottom: "0.5rem" }}
              >
                Registered office
              </p>
              <address
                style={{
                  fontStyle: "normal",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--color-graphite)",
                  lineHeight: 1.7,
                }}
              >
                {COMPANY.address.line1}
                <br />
                {COMPANY.address.line2}
              </address>

              <p
                className="text-mono"
                style={{
                  color: "var(--color-steel)",
                  marginTop: "1rem",
                  marginBottom: "0.375rem",
                }}
              >
                Operating sites
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--color-graphite)",
                }}
              >
                {COMPANY.operatingSites.join("  \u00b7  ")}
              </p>
            </div>

            {/* WhatsApp CTA button */}
            <a
              href={waHref}
              onClick={trackWhatsappTap}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              style={{ marginTop: "1.5rem", display: "inline-flex" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
