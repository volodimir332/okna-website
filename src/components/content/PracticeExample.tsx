import { Lightbulb } from "lucide-react";

interface PracticeExampleProps {
  text: string;
}

export function PracticeExample({ text }: PracticeExampleProps) {
  return (
    <div className="my-8 p-5 sm:p-6 bg-[#FEF3C7] border border-[#FCD34D]/40 rounded-xl">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-[#92400E] mb-1">Z naší praxe</h4>
          <p className="text-sm text-[#78350F] leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
