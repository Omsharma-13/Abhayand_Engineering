import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import NumbersStrip from "@/components/sections/NumbersStrip";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ProjectRegister from "@/components/sections/ProjectRegister";
import Workforce from "@/components/sections/Workforce";
import Clients from "@/components/sections/Clients";
import HowItWorks from "@/components/sections/HowItWorks";
import Credentials from "@/components/sections/Credentials";
import Leadership from "@/components/sections/Leadership";
import FAQSection from "@/components/sections/FAQSection";
import QuoteForm from "@/components/sections/QuoteForm";

/* ============================================================
   MAIN PAGE — One long scrolling page
   Sections in the exact order from the design brief.
   Light and dark bands alternate for rhythm.
   ============================================================
   00 TopBar    — sticky graphite (always visible)
   01 Hero      — concrete / light (headline + short form)
   02 Numbers   — graphite / dark
   03 WhatWeDo  — concrete / light
   04 Projects  — mixed (dark header, light table)
   05 Workforce — concrete / light
   06 Clients   — graphite / dark
   07 HowItWorks — concrete / light
   08 Credentials — graphite / dark
   09 Leadership — concrete / light
   10 FAQ       — graphite / dark
   11 QuoteForm — concrete / light
   12 Footer    — graphite / dark
   ============================================================ */

export default function Home() {
  return (
    <>
      <TopBar />
      <main id="main-content">
        <Hero />
        <NumbersStrip />
        <WhatWeDo />
        <ProjectRegister />
        <Workforce />
        <Clients />
        <HowItWorks />
        <Credentials />
        <Leadership />
        <FAQSection />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
