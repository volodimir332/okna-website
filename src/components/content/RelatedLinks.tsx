import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  href: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
}

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <div className="my-12">
      <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">
        Související stránky
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="flex items-center justify-between p-4 bg-white border border-[var(--border)] rounded-xl hover:border-[#C7D2FE] hover:shadow-md transition-all group"
          >
            <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[#6B7AE8] transition-colors">
              {link.title}
            </span>
            <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[#6B7AE8] transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
