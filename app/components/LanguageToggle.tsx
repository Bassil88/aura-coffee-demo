"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const isGerman = pathname.startsWith("/de");

  const switchLanguage = () => {
    if (isGerman) {
      router.push(pathname.replace("/de", "/en"));
    } else {
      router.push(pathname.replace("/en", "/de"));
    }
  };

  return (
    <button onClick={switchLanguage} aria-label="Switch language" className="neu-lang-toggle">
      {/* Slider */}
      <span className={`neu-lang-thumb ${isGerman ? "translate-x-0" : "translate-x-[34px]"}`} />

      {/* Labels */}
      <span className={`neu-lang-label ${isGerman ? "active" : ""}`}>DE</span>
      <span className={`neu-lang-label ${!isGerman ? "active" : ""}`}>EN</span>
    </button>
  );
}
