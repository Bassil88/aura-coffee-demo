"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "../lib/translations";

export default function Footer() {
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] || "de") as "en" | "de";
  const t = translations[locale].footer;

  return (
    // <footer className="flex justify-between px-6 py-4 border-t border-gray-200 text-xs text-neutral-700">
    // <footer className={`bg-[#1e293b] py-4 glass-section-footer flex justify-between px-6 border-t border-gray-200 text-xs text-neutral-700 `}>
    // <footer className="bg-[#1e293b] glass-section-footer flex items-center justify-between px-8 py-4 text-xs border-t border-white/10">
    <footer className="mt-auto bg-[#1e293b] glass-section-footer flex justify-between px-6 py-4 text-xs">

      <Link
        className="text-xs text-neutral-100"
        href={`/${locale}/impressum`}
      >
        {t.impressum}
      </Link>

      <Link
        className="text-xs text-neutral-100"
        href={`/${locale}/datenschutz`}
      >
        {t.privacy}
      </Link>
    </footer>
  );
}
