export const SITE_NAME = "Apex Automation";
export const SITE_TAGLINE =
  "Streamline Your Business with AI & Custom Software";
export const SITE_DESCRIPTION =
  "We help small businesses save time and money by automating repetitive tasks with AI and custom software solutions.";
export const CONTACT_EMAIL = "apexautomation2026@gmail.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Assistants",
    shortDescription:
      "Customer-facing and internal AI assistants that handle inquiries, qualify leads, and reduce support load.",
    fullDescription:
      "We build custom AI chatbots powered by modern large language models, tailored to your business. Whether you need a customer support bot on your website, an internal knowledge assistant for your team, or a lead qualification chatbot, we design and deploy solutions that work around the clock. Our chatbots integrate with your existing tools and learn from your data to provide accurate, helpful responses.",
    icon: "MessageSquare",
  },
  {
    slug: "document-processing",
    title: "Document Processing & Data Extraction",
    shortDescription:
      "Turn invoices, contracts, and forms into structured data automatically.",
    fullDescription:
      "Stop manually copying data from documents into spreadsheets. Our document processing solutions use AI to extract key information from invoices, receipts, contracts, and forms — then feed it directly into your accounting, CRM, or ERP system. We handle PDFs, scanned documents, emails, and more, with accuracy rates that match or exceed manual data entry.",
    icon: "FileSearch",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    shortDescription:
      "Connect your tools with Zapier, Make, or fully custom integrations to eliminate manual handoffs.",
    fullDescription:
      "We map out your existing workflows and identify bottlenecks where manual steps slow things down. Then we build automations using platforms like Zapier and Make for simpler flows, or fully custom solutions for complex processes. From automatic email follow-ups to multi-step approval workflows, we make sure your business runs smoothly without constant human intervention.",
    icon: "Workflow",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & Internal Tools",
    shortDescription:
      "Purpose-built applications that replace spreadsheets and manual processes.",
    fullDescription:
      "When off-the-shelf software doesn't fit, we build custom web applications tailored to your exact needs. Whether it's an inventory management dashboard, a client portal, a booking system, or an internal operations tool, we design and develop solutions that your team actually wants to use. Built with modern tech stacks for reliability, speed, and easy maintenance.",
    icon: "AppWindow",
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    shortDescription:
      "Connect your CRM, ERP, accounting, and other systems so data flows automatically.",
    fullDescription:
      "Your tools should talk to each other. We build integrations between your CRM, accounting software, e-commerce platform, inventory system, and any other tools with an API. No more exporting CSVs and re-uploading data. We set up reliable, real-time data syncing so your systems stay in sync and your team spends less time on data entry.",
    icon: "Plug",
  },
  {
    slug: "data-entry-automation",
    title: "Data Entry Automation",
    shortDescription:
      "Eliminate repetitive data entry with bots and smart forms that do the work for you.",
    fullDescription:
      "Data entry is one of the biggest time sinks for small businesses. We build solutions that capture data at the source — smart web forms, email parsers, barcode scanners, and automated data pipelines — so information flows directly into your systems without anyone having to type it in manually. Free your team to focus on work that actually requires human judgment.",
    icon: "Database",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Apex Automation cut our invoice processing time by 80%. We used to spend two full days a month on data entry — now it happens automatically.",
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "Greenfield Logistics",
  },
  {
    quote:
      "The custom client portal they built replaced three different spreadsheets and two email chains. Our team actually enjoys using it.",
    name: "Marcus Rivera",
    role: "Owner",
    company: "Rivera Property Management",
  },
  {
    quote:
      "Their chatbot handles 60% of our customer inquiries without any human involvement. It paid for itself in the first month.",
    name: "Emily Nakamura",
    role: "Director of Customer Success",
    company: "BrightPath Education",
  },
];
