"use client";
import Image from "next/image";
import { translations } from "../lib/translations";

export default function CommonChallenges({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].commonChallenges;

  return (
    <section
      className={`py-24 bg-[#f5f6f8] mx-3
    sm:mx-4
    md:mx-8
    lg:mx-16
    xl:mx-24
    2xl:mx-32
    reveal`}
      id="commonChallenges"
    >
      <h2
        className="text-center mb-5 text-slate-500 max-w-3xl mx-auto text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
      >
        {t.title}
      </h2>
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center neu-card">
        {/* IMAGE */}
        <div className="neu-image-wrapper relative h-[420px] lg:order-first">
          <Image src="/rejection.png" alt="Common challenges in Ausbildung applications" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        {/* TEXT */}
        <div>
          {/* EYEBROW */}
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">{t.eyebrow}</p>
          {/* <h3 className="font-bold text-gray-900 mb-8">{t.title}</h3> */}

          <ul className="space-y-5">
            {[...t.items].reverse().map((item, i) => (
              <li key={i} className="how-step">
                <span className="step-number">{i + 1}</span>
                <span className="step-text">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-500 mt-6 max-w-md">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
