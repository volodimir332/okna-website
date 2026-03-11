import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
}

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <div className="my-12 p-6 sm:p-8 bg-[#C7D2FE]/10 rounded-2xl border-2 border-[#C7D2FE]/30">
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] mb-5 text-base leading-relaxed">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+420737540605"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C7D2FE] text-gray-900 font-semibold rounded-full hover:bg-[#B4C6FC] transition-colors shadow-md"
        >
          <Phone className="w-4 h-4" />
          +420 737 540 605
        </a>
        <Link
          href="/#kontakt"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#C7D2FE] text-gray-900 font-semibold rounded-full hover:bg-[#C7D2FE]/10 transition-colors"
        >
          Napsat zprávu
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
