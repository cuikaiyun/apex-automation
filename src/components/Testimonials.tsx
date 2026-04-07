import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          What Our Clients Say
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-blue-200" />
              <p className="mt-4 text-sm leading-relaxed text-slate-600 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
