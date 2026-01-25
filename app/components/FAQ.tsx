// "use client";

// import { translations } from "../lib/translations";

// export default function FAQ({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].faq;

//   // ✅ FAQ SCHEMA (matches visible FAQ content exactly)
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: t.items.map((item: { question: string; answer: string }) => ({
//       "@type": "Question",
//       name: item.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: item.answer,
//       },
//     })),
//   };

//   return (
//     <>
//       {/* ✅ FAQ STRUCTURED DATA */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(faqSchema),
//         }}
//       />

//       <section id="faq" className={`py-20 bg-gray-100 `}>
//         <div className="mx-3">
//           <h3 className=" font-bold text-center mb-10">{t.title}</h3>

//           <div className="max-w-4xl mx-auto space-y-6">
//             {t.items.map((item: { question: string; answer: string }, index: number) => (
//               <div key={index}>
//                 <h4 className="font-semibold">{item.question}</h4>
//                 <p
//                   className="text-gray-700 text-sm
//                 sm:text-base
//                 md:text-lg
//                 lg:text-xl "
//                 >
//                   {item.answer}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { translations } from "../lib/translations";

/* ---------- Types ---------- */
type FAQItem = {
  question: string;
  answer: string;
};

type FAQTranslations = {
  title: string;
  readMore: string;
  showLess: string;
  items: readonly FAQItem[];
};

export default function FAQ({ locale }: { locale: "de" | "en" }) {
  const t: FAQTranslations = translations[locale].faq;

  const [expanded, setExpanded] = useState(false);
  const VISIBLE_COUNT = 3;

  /* ---------- FAQ Schema (SEO) ---------- */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section id="faq" className="py-20 bg-gray-100">
        <div className="mx-3">
          <h3 className="font-bold text-center mb-10">{t.title}</h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Always visible FAQs */}
            {t.items.slice(0, VISIBLE_COUNT).map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold">{item.question}</h4>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">{item.answer}</p>
              </div>
            ))}

            {/* Collapsible FAQs */}
            <div className={`faq-collapse ${expanded ? "is-open" : ""}`}>
              <div className="faq-collapse-inner space-y-6 pt-4">
                {t.items.slice(VISIBLE_COUNT).map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{item.question}</h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Read more / Show less */}
            {t.items.length > VISIBLE_COUNT && (
              <div className="flex justify-center pt-6">
                <button onClick={() => setExpanded((prev) => !prev)} className="neu-btn-link" aria-expanded={expanded}>
                  {expanded ? t.showLess : t.readMore}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
