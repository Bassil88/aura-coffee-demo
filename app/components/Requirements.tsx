"use client";
import Image from "next/image";
import { translations } from "../lib/translations";

export default function Requirements({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].requirements;

  return (
    <section id="requirements" className={`py-24 bg-[#f7f8fa] mx-4`}>
      <h2
        className="text-center mb-5 text-slate-500 max-w-3xl mx-auto text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
      >
        {t.title}
      </h2>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center neu-card py-24">
        {/* LEFT */}
        <div>
          {/* <h3 className="font-bold text-gray-900 mb-8">{t.title}</h3> */}

          <div
            className="flex flex-wrap gap-3 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.items.map((text: string, index: number) => (
              <span key={index} className="req-pill">
                {text}
              </span>
            ))}
          </div>

          <h4
            className="text-center text-gray-600 mt-8 max-w-md text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.note}
          </h4>
        </div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
        {/* IMAGE */}
        <div className="relative neu-image-wrapper overflow-hidden h-[400px] order-first lg:order-last">
          <Image src="/organic-green-coffee.jpg" alt="Organic Green Coffee Beans" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
