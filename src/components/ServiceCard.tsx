import Link from "next/link";
import {
  MessageSquare,
  FileSearch,
  Workflow,
  AppWindow,
  Plug,
  Database,
} from "lucide-react";
import type { Service } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  FileSearch,
  Workflow,
  AppWindow,
  Plug,
  Database,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-200 hover:shadow-md"
    >
      {Icon && (
        <Icon className="h-10 w-10 text-blue-600 transition-colors group-hover:text-blue-700" />
      )}
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:text-blue-700">
        Learn more &rarr;
      </span>
    </Link>
  );
}
