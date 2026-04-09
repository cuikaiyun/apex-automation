import Link from "next/link";
import { SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          We help small businesses in San Jose and the Bay Area eliminate
          repetitive tasks, connect their tools, and build custom solutions — so
          you can focus on what matters most.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-colors hover:bg-slate-100"
          >
            See Our Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book a Free 30-min Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
