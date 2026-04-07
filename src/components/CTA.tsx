import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-900 px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Automate?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Tell us about your business and the tasks you want to streamline.
          We&apos;ll show you what&apos;s possible.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-600"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
