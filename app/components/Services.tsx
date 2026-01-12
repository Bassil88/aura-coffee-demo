// import Image from "next/image";
// import { translations } from "../lib/translations";

// export default function Services({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].services;

//   const images = [
//     "/consultation-orientationn.png",
//     "/c.v-document-praparation.png",
//     "/interview-preparationn.png",
//     "/guided-self-Application-support.png",
//     "/intergration-education-guidance.png",
//   ];

//   return (
//     <section id="services" className="py-24 bg-[#f5f6f8]">
//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10 px-3">
//         {t.items.map(
//           (
//             s: { title: string; desc: string },
//             index: number
//           ) => (
//             <div
//               key={s.title}
//               className="neu-card p-6 cursor-pointer flex flex-col tone-${index}"
//             >
//               {/* Image */}
//               <div className="mb-5 relative overflow-hidden rounded-2xl h-60 image-mask">
//                 <Image
//                   src={images[index]}
//                   alt={s.title}
//                   fill
//                   className="object-cover saturate-[0.88] brightness-[0.98]"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </div>

//               {/* Text */}
//               <h4 className="font-semibold mb-3 text-gray-900">
//                 {s.title}
//               </h4>

//               <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                 {s.desc}
//               </p>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import { translations } from "../lib/translations";

export default function Services({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].services;

  const images = [
    "/consultation-orientationn.png",
    "/c.v-document-praparation.png",
    "/interview-preparationn.png",
    "/guided-self-Application-support.png",
    "/intergration-education-guidance.png",
  ];

  return (
    <section id="services" className="py-24 bg-[#f5f6f8]">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10 px-3">
        {t.items.map(
          (
            s: { title: string; desc: string },
            index: number
          ) => (
            <div
              key={s.title}
              className="neu-card p-6 cursor-pointer flex flex-col tone-${index}"
            >
              {/* Image */}
              <div className="mb-5 neu-image-wrapper">
  <div className="relative h-60 image-mask overflow-hidden">
    <Image
      src={images[index]}
      alt={s.title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
</div>


              {/* Text */}
              <h4 className="font-semibold mb-3 text-gray-900">
                {s.title}
              </h4>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {s.desc}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
