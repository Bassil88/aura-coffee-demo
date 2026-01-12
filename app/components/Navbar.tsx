"use client";

import Image from "next/image";
import { useState } from "react";
import { translations } from "../lib/translations";
import LanguageToggle from "./LanguageToggle";


export default function Navbar({ locale }: { locale: "en" | "de" }) {
  const [open, setOpen] = useState(false);
  const t = translations[locale].nav;
  

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  

  return (
    <nav className="neu-navbar fixed top-0 w-full z-50 ">

      <div className="max-w-7xl mx-auto flex items-center justify-between mt-1  h-[112px]">

        {/* Logo */}
        <Image
          src="/brightwaytooDeutschland-logo.png"
          alt="Brightway logo"
          width={600}
          height={100}
          priority
          className="h-auto w-[180px] object-contain"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <button onClick={() => scrollTo("services")} className="neu-nav-link">
            {t.services}
          </button>
          <button onClick={() => scrollTo("requirements")} className="neu-nav-link">
            {t.requirements}
          </button>
          <button onClick={() => scrollTo("howItWorks")} className="neu-nav-link">
            {t.howItWorks}
          </button>
          <button onClick={() => scrollTo("contact")} className="neu-nav-link">
            {t.contact}
          </button>
        </div>

          <div className="mr-4 flex justify-center">
  <LanguageToggle />
</div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">

          <div className="flex flex-col gap-3 bg-[#f7f8fa] p-4">
            <button onClick={() => scrollTo("services")} className="neu-nav-link">
              {t.services}
            </button>
            <button onClick={() => scrollTo("requirements")} className="neu-nav-link">
              {t.requirements}
            </button>
            <button onClick={() => scrollTo("howItWorks")} className="neu-nav-link">
              {t.howItWorks}
            </button>
            <button onClick={() => scrollTo("contact")} className="neu-nav-link">
              {t.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
