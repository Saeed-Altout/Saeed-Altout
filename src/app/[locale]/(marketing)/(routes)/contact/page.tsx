import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  );
}
