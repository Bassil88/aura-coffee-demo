// "use client";
// import { useInView } from "../lib/useInView";
// import Image from "next/image";
// import { translations } from "../lib/translations";


// export default function RealChallenge({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].realChallenge;
//   const { ref, isVisible } = useInView<HTMLDivElement>({
//   threshold: 0.2,
// });

//   return (
//     <section ref={ref} id="real-challenge" className={`mt-20 py-24 glass-challengeo mx-2
//     sm:mx-4
//     md:mx-8
//     lg:mx-16
//     xl:mx-24
//     2xl:mx-32
//     fade-up ${isVisible ? "fade-up-visible" : ""}
//     `}>
//       <div className={``}>
        
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>
//           <h3 className="font-bold text-gray-900 mb-6">
//             {t.title}
//           </h3>

//           <div className="space-y-5 text-gray-700 text-base leading-relaxed max-w-xl">
//             {t.paragraphs.map((text: string, index: number) => (
//               <p key={index}>{text}</p>
//             ))}
//           </div>

//           {t.note && (
//             <p className="mt-6 text-gray-600 text-sm max-w-md">
//               {t.note}
//             </p>
//           )}
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative neu-image-wrapper overflow-hidden h-[400px]">
//           <Image
//             src="/real-challenge.png"
//             alt="Challenges in Ausbildung applications"
//             fill
//             className="object-cover"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             />
//         </div>

//       </div>
//             </div>
//     </section>
//   );
// }

// -------------------------------------------------------------------------------


// import { translations } from "../lib/translations";

// export default function RealChallenge({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].realChallenge;

//   return (
//     <section
//       id="real-challenge"
//       className="
//         relative
//         py-24
//         mx-2
//         sm:mx-4
//         md:mx-8
//         lg:mx-16
//         xl:mx-24
//         2xl:mx-32
//         glass-challengeo
//         overflow-hidden
//       "
//       style={{
//         backgroundImage: "url('/real-challenge.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-white/80 backdrop-blur-sm -z-10 " />

//       <div className="max-w-7xl mx-auto px-6 rounded-lg bg-white/1 backdrop-blur-xs">
//         <h3 className="font-bold text-gray-900 mb-6">
//           {t.title}
//         </h3>

//         <div className="space-y-5 text-gray-700 text-base leading-relaxed max-w-2xl">
//           {t.paragraphs.map((text: string, index: number) => (
//             <p key={index}>{text}</p>
//           ))}
//         </div>

//         {t.note && (
//           <p className="mt-6 text-gray-600 text-sm max-w-xl">
//             {t.note}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// -------------------------------------------------------------------------------








// -------------------------------------------------------------------------------
// "use client";
// import Image from "next/image";
// import { useInView } from "../lib/useInView";
// import { translations } from "../lib/translations";

// export default function RealChallenge({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].realChallenge;
//   const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.2 });

//   return (
//     <section
//   ref={ref}
//   id="real-challenge"
//   className={`
//     relative
//     mt-32
//     py-28
//     mx-3 sm:mx-6 lg:mx-12
//     rounded-[32px]
//     bg-[#f7f7f5]
//     transition-all duration-700
//     fade-up
//     ${isVisible ? "fade-up-visible" : ""}
//   `}
// >

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* LEFT — TEXT */}
//         <div>
//           {/* Eyebrow */}
//           <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
//             Herausforderung
//           </p>

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

//           <div className="mt-8 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl">
//             {t.paragraphs.map((text: string, index: number) => (
//               <p key={index}>{text}</p>
//             ))}
//           </div>

//           {t.note && (
//             <p className="mt-8 text-sm text-gray-500 max-w-md">
//               {t.note}
//             </p>
//           )}
//         </div>

//         {/* RIGHT — IMAGE */}
//         <div className="relative h-[420px] rounded-[28px] overflow-hidden">
//           <Image
//             src="/real-challenge.png"
//             alt="Challenges in Ausbildung applications"
//             fill
//             className="object-cover scale-[1.03]"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
// -------------------------------------------------------------------------------


"use client";
import { translations } from "../lib/translations";
import { useInView } from "../lib/useInView";

export default function RealChallenge({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].realChallenge;
const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
  ref={ref}
  id="real-challenge"
  className={`
    relative
    mt-32
    py-28
    mx-3 sm:mx-6 lg:mx-12
    rounded-[40px]
    overflow-hidden
    fade-up
    mb-25
    ${isVisible ? "fade-up-visible" : ""}
  `}
  style={{
    backgroundImage: "url('/real-challenge.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      {/* GRADIENT OVERLAY (NOT HEAVY BLUR) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/10 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            max-w-2xl
            rounded-[28px]
            px-8 py-12
            bg-white/20
            backdrop-blur-sm
            border border-white/10
          "
        >
          {/* EYEBROW */}
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            {t.subtle}
          </p>

          {/* TITLE */}
          <h3
            className="
              font-semibold
              text-gray-900
              text-2xl
              sm:text-3xl
              leading-snug
            "
          >
            {t.title}
          </h3>

          {/* BODY */}
          <div className="mt-6 space-y-1 text-gray-700 text-sm sm:text-base leading-relaxed">
            {t.paragraphs.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {/* NOTE */}
          {t.note && (
            <p className="mt-6 text-sm text-gray-500">
              {t.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
