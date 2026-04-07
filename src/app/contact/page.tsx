import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch to discuss how we can help automate your business processes.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Let&apos;s Talk
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tell us about your business and the challenges you&apos;re facing.
            We&apos;ll explore how automation can help.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-5">
          {/* Info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Get in Touch
            </h2>
            <p className="mt-3 text-slate-600">
              Whether you have a specific project in mind or just want to
              explore what&apos;s possible, we&apos;d love to hear from you.
              Typical response time is within one business day.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-slate-600 hover:text-blue-600"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
