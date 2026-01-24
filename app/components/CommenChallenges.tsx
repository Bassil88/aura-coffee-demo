// "use client";
// import Image from "next/image";
// import { translations } from "../lib/translations";

// export default function CommonChallenges({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].commonChallenges;

//   return (
//     <section
//       id="commonChallenges"
//       className="
//         mt-32
//         py-28
//         mx-3 sm:mx-6 lg:mx-12
//         rounded-[40px]
//         bg-[#f7f7f5]
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* IMAGE */}
//         <div className="relative h-[420px] rounded-[28px] overflow-hidden">
//           <Image
//             src="/rejection.png"
//             alt="Common challenges in Ausbildung applications"
//             fill
//             className="object-cover"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//           />
//         </div>

//         {/* CONTENT */}
//         <div>
//           {/* EYEBROW */}
//           <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
//             Häufige Probleme
//           </p>

//           {/* TITLE */}
//           <h3
//             className="
//               font-semibold
//               text-gray-900
//               text-2xl
//               sm:text-3xl
//               leading-snug
//               max-w-xl
//             "
//           >
//             {t.title}
//           </h3>

//           {/* LIST */}
//           <ul className="mt-8 space-y-6 max-w-xl">
//             {t.items.map((item: string, i: number) => (
//               <li key={i} className="flex gap-4">
//                 <span
//                   className="
//                     flex h-7 w-7 shrink-0 items-center justify-center
//                     rounded-full
//                     bg-gray-900
//                     text-white
//                     text-xs font-medium
//                   "
//                 >
//                   {i + 1}
//                 </span>
//                 <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                   {item}
//                 </p>
//               </li>
//             ))}
//           </ul>

//           {/* NOTE */}
//           <p className="mt-8 text-sm text-gray-500 max-w-md">
//             {t.note}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// -------------------------------------------------------------------------------


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
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center neu-card">

    {/* IMAGE */}
    <div className="neu-image-wrapper relative h-[420px] lg:order-first">
      <Image
        src="/rejection.png"
        alt="Common challenges in Ausbildung applications"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>

    {/* TEXT */}
    <div>
               {/* EYEBROW */}
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            {t.eyebrow}
          </p>
      <h3 className="font-bold text-gray-900 mb-8">{t.title}</h3>

      <ul className="space-y-5">
        {[...t.items].reverse().map((item, i) => (
          <li key={i} className="how-step">
            <span className="step-number">{i + 1}</span>
            <span className="step-text">{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-500 mt-6 max-w-md">
        {t.note}
      </p>
    </div>

  </div>
</section>

  );
}

