"use client";

import { useEffect, useState } from "react";
import { COMPANY, HERO } from "@/lib/content";
import { readServiceParam, trackPhoneTap, trackWhatsappTap } from "@/lib/gtag";

/* ============================================================
   SECTION 1 — HERO
   Desktop: 2-col (headline+photo left, short form right)
   Mobile: headline → call/WA buttons → photo → form
   Supports ?service= URL param for ad landing variants
   ============================================================ */

export default function Hero() {
  const [headline, setHeadline] = useState(HERO.headline);

  // Ad landing variant — swap headline based on ?service= param
  useEffect(() => {
    const service = readServiceParam();
    const variant = HERO.variants[service as keyof typeof HERO.variants];
    if (variant) {
      setHeadline(variant.headline);
    }
  }, []);

  const waHref = `https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.whatsappMessage}`;

  return (
    <section aria-labelledby="hero-headline" className="page-offset">
      <div className="hero">
        {/* LEFT — headline, subline, mobile CTAs, photo */}
        <div className="hero__left">
          {/* Mobile-only: call + WhatsApp buttons ABOVE the fold */}
          <div className="hero__cta-group" style={{ display: "none" }} aria-hidden="true" id="mobile-cta-group">
            <a
              href={`tel:${COMPANY.phone1Raw}`}
              className="btn btn--secondary"
              onClick={() => trackPhoneTap(COMPANY.phone1Raw)}
            >
              Call {COMPANY.phone1}
            </a>
            <a
              href={waHref}
              className="btn btn--secondary"
              onClick={trackWhatsappTap}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <h1 id="hero-headline" className="hero__headline">
            {headline}
          </h1>

          <p className="hero__subline">{HERO.subline}</p>

          {/* Desktop CTAs */}
          <div className="hero__cta-group">
            <a
              href={`tel:${COMPANY.phone1Raw}`}
              className="btn btn--secondary"
              onClick={() => trackPhoneTap(COMPANY.phone1Raw)}
            >
              Call {COMPANY.phone1}
            </a>
            <a
              href={waHref}
              className="btn btn--secondary"
              onClick={trackWhatsappTap}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          {/* Photo block */}
          <div className="hero__photo-block">
            {/* Skeleton while photo loads */}
            <div
              className="skeleton hero__photo-placeholder"
              style={{ minHeight: "320px" }}
              role="img"
              aria-label="Abhyanand Engineering site work: photo to be supplied"
            >
              <span className="hero__photo-caption">
                Photo: Dalmia Bokaro. 2,000 MT dry flyash silo
              </span>
            </div>
            {/* When real photo is supplied, replace the skeleton with:
                <Image
                  src="/images/hero-silo.webp"
                  alt="Abhyanand Engineering crew erecting the 2,000 MT dry flyash silo at Dalmia Cement, Bokaro"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
            */}
          </div>
        </div>

        {/* RIGHT — short quote form */}
        <div className="hero__right">
          <p
            className="text-mono"
            style={{ color: "var(--color-steel)", marginBottom: "1rem" }}
          >
            Request a quote
          </p>
          <HeroForm />
        </div>
      </div>
    </section>
  );
}

/* ---- Short hero form (4 required fields) ---- */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SERVICE_OPTIONS } from "@/lib/validation";
import { useRouter } from "next/navigation";

const heroSchema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit Indian mobile"),
  service: z.enum(SERVICE_OPTIONS),
  location: z.string().min(2, "Plant location required"),
  // Honeypot — must be empty
  website: z.string().max(0).optional(),
});

type HeroFormData = z.infer<typeof heroSchema>;

function HeroForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroSchema),
  });

  const onSubmit = async (data: HeroFormData) => {
    if (data.website) return; // honeypot triggered
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          // Add UTM params from sessionStorage if set by main form
          company: "(from hero form)",
          source: "hero_form",
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
      }
    } catch {
      // Silent fail — user should try main form or call directly
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Quick quote request form">
      {/* Honeypot */}
      <input
        {...register("website")}
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "none" }}
        autoComplete="off"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="form-group">
          <label htmlFor="hero-name" className="form-label form-label--required">
            Name
          </label>
          <input
            id="hero-name"
            type="text"
            className="form-input"
            autoComplete="name"
            {...register("name")}
            aria-describedby={errors.name ? "hero-name-err" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span id="hero-name-err" className="form-error" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="hero-phone" className="form-label form-label--required">
            Phone
          </label>
          <input
            id="hero-phone"
            type="tel"
            className="form-input"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={10}
            {...register("phone")}
            aria-describedby={errors.phone ? "hero-phone-err" : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <span id="hero-phone-err" className="form-error" role="alert">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="hero-service" className="form-label form-label--required">
            Service needed
          </label>
          <div className="form-select-wrapper">
            <select
              id="hero-service"
              className="form-select form-input"
              {...register("service")}
              aria-describedby={errors.service ? "hero-service-err" : undefined}
              aria-invalid={!!errors.service}
            >
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          {errors.service && (
            <span id="hero-service-err" className="form-error" role="alert">
              {errors.service.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="hero-location" className="form-label form-label--required">
            Plant location (city, state)
          </label>
          <input
            id="hero-location"
            type="text"
            className="form-input"
            autoComplete="address-level2"
            {...register("location")}
            aria-describedby={errors.location ? "hero-location-err" : undefined}
            aria-invalid={!!errors.location}
          />
          {errors.location && (
            <span id="hero-location-err" className="form-error" role="alert">
              {errors.location.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn--primary btn--full"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Request a Quote"}
        </button>

        <p className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-steel)", marginTop: "0.25rem" }}>
          Or call us directly at {COMPANY.phone1}
        </p>
      </div>
    </form>
  );
}
