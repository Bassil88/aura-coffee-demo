"use client";
import { useInView } from "../lib/useInView";
import Image from "next/image";
import { translations } from "../lib/translations";


export default function RealChallenge({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].realChallenge;
  const { ref, isVisible } = useInView<HTMLDivElement>({
  threshold: 0.2,
});

  return (
    <section ref={ref} id="real-challenge" className={`mt-20 py-24 glass-challengeo mx-2
    sm:mx-4
    md:mx-8
    lg:mx-16
    xl:mx-24
    2xl:mx-32
    fade-up ${isVisible ? "fade-up-visible" : ""}
    `}>
      <div className={``}>
        
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h3 className="font-bold text-gray-900 mb-6">
            {t.title}
          </h3>

          <div className="space-y-5 text-gray-700 text-base leading-relaxed max-w-xl">
            {t.paragraphs.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {t.note && (
            <p className="mt-6 text-gray-600 text-sm max-w-md">
              {t.note}
            </p>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative neu-image-wrapper overflow-hidden h-[400px]">
          <Image
            src="/real-challenge.png"
            alt="Challenges in Ausbildung applications"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>

      </div>
            </div>
    </section>
  );
}



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
