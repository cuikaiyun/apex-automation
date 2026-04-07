import type { Metadata } from "next";
import {
  MessageSquare,
  FileSearch,
  Workflow,
  AppWindow,
  Plug,
  Database,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI chatbots, document processing, workflow automation, custom web apps, API integrations, and data entry automation for small businesses.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  FileSearch,
  Workflow,
  AppWindow,
  Plug,
  Database,
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We offer a full range of automation and custom software services
              designed to help small businesses work smarter, not harder.
            </p>
          </div>

          <div className="mt-16 space-y-20">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`flex flex-col items-center gap-8 md:flex-row ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex shrink-0 items-center justify-center rounded-2xl bg-blue-50 p-8 md:h-48 md:w-48">
                    {Icon && (
                      <Icon className="h-16 w-16 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
