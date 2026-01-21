"use client";

import { translations } from "../lib/translations";

export default function FAQ({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].faq;


  return (
    <section  id="faq" className={`py-20 bg-gray-100" `}>
     

      <div className="mx-3">
        <h3 className=" font-bold text-center mb-10">
          {t.title}
        </h3>

        <div className="max-w-4xl mx-auto space-y-6">
          {t.items.map(
            (
              item: { question: string; answer: string },
              index: number
            ) => (
              <div key={index}>
                <h4 className="font-semibold">
                  {item.question}
                </h4>
                <p className="text-gray-700 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl ">
                  {item.answer}
                </p>
              </div>
            )
          )}
        </div>
      </div>

    </section>
  );
}
