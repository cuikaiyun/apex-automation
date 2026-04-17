import Link from "next/link";

export default function BlogCTA() {
  return (
    <div className="mt-12 rounded-xl bg-slate-900 px-6 py-10 text-center sm:px-10">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Want Results Like These?
      </h2>
      <p className="mt-3 text-slate-300">
        Book a free 30-minute consultation and we&apos;ll show you exactly how
        automation can save your business time and money.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-600"
      >
        Book a Free Consultation
      </Link>
    </div>
  );
}
