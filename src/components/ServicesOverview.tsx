import { SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function ServicesOverview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            From AI-powered assistants to custom software, we build solutions
            that save you time and eliminate manual work.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
