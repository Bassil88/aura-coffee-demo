"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { translations } from "../lib/translations";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ locale }: { locale: "en" | "de" }) {
  const [open, setOpen] = useState(false);
  const t = translations[locale].nav;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="neu-navbar fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between mt-0  h-[92px]">
        {/* Logo */}
        <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Scroll to top"
  className="cursor-pointer"
>
  <Image
    src="/logo.png"
    alt="Brightway to deutschland logo"
    width={600}
    height={100}
    priority
    className="h-auto w-[130px] object-contain"
  />
</button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 font-medium text-gray-700">
          <button
            onClick={() => scrollTo("services")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.services}
          </button>
          <button
            onClick={() => scrollTo("requirements")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.requirements}
          </button>
          <button
            onClick={() => scrollTo("howItWorks")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.howItWorks}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="neu-nav-link text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.contact}
          </button>
        </div>

        <div className="mr-4 flex justify-center">
          <LanguageToggle />
        </div>
        {/* Mobile Toggle */}
        {/* <button
          className="md:hidden text-gray-700 text-3xl mr-4"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button> */}

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="md:hidden mr-4 flex h-8 w-8 flex-col justify-center items-center gap-1.5">
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}>
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
      </div>
      {/* {open && (
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
      )} */}
    </nav>
  );
}
