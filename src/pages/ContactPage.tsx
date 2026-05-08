import { company } from "../config/company";
import PageHero from "../components/ui/PageHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function ContactPage() {
  const c = company.contact;
  return (
    <main>
      <PageHero tagline={c.tagline} headline={c.headline} description={c.description} bgImage={company.contactHeroImage} />
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
