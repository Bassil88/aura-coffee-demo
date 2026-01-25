"use client";
import Image from "next/image";
import { translations } from "../lib/translations";
export default function Process({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].howItWorks;

  return (
    <section className={`py-24 mx-3 md:mx-6 mb-10 bg-[#f5f6f8] neu-card `} id="howItWorks">
      <h2
        className="text-center mb-5 text-slate-500 max-w-3xl mx-auto text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
      >
        {t.title}
      </h2>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Steps */}
        <div>
          {/* <h3 className="font-bold text-gray-900 mb-8">
            {t.title}
          </h3> */}

          <ul className="space-y-5">
            {t.steps.map((step, i) => (
              <li
                key={i}
                className="how-step text-sm
              sm:text-base
              md:text-lg
              lg:text-xl "
              >
                <span className="step-number">{i + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ul>

          <p
            className=" text-gray-500 mt-6 max-w-md text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.note}
          </p>
        </div>

        {/* RIGHT: Image */}
        {/* RIGHT: Image */}
        <div className="neu-image-wrapper relative h-[420px] order-first lg:order-last">
          <Image src="/how-it-works.png" alt="How Ausbildung application works" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
