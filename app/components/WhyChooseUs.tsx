"use client";

import { translations } from "../lib/translations";

export default function WhyChooseUs({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].whyChooseUs;

  return (
    <section id="whyChooseUs" className="mx-4 md:mx-8 lg:mx-16 py-24">
      {/* Neumorphic wrapper */}
      <div className="neu-card max-w-5xl mx-auto px-6 py-20">
        {/* Title */}
        <h2 className="font-bold mb-16 text-center">{t.title}</h2>

        {/* Points */}
        <div className="space-y-12">
          {t.points.map((item: { title: string; description: string }, index: number) => (
            <div key={index} className="text-center max-w-2xl mx-auto">
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
