// // import Image from "next/image";
// // import { translations } from "../lib/translations";

// // export default function WhyChooseUs({ locale }: { locale: "de" | "en" }) {
// //   const t = translations[locale].whyChooseUs;

// //   return (
// //     <section id="whyChooseUs" className="glass-why mx-6 py-20 bg-[#f7f8fa]">
// //       <div className="mx-3">
// //         <h3 className="font-bold text-center mb-10">
// //           {t.title}
// //         </h3>

// //         <div className="max-w-7xl space-y-4 mx-auto ">
// //           <div className="mx-10
// //     sm:mx-4
// //     md:mx-8

// // ">

// //           {t.points.map((text: string, index: number) => (
// //             <div key={index} className="flex items-start gap-4">
// //                 {/* Neumorphic dot */}
// //   <span className="why-dot mt-2" />

// //               <p className="text-gray-800 leading-relaxed text-sm
// //       sm:text-base
// //       md:text-lg
// //       lg:text-xl ">
// //                 {text}
// //               </p>
// //             </div>
// //           ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import Image from "next/image";
// import { translations } from "../lib/translations";
// export default function WhyChooseUs({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].whyChooseUs;

//   return (
//     <section
//       id="whyChooseUs"
//       className="glass-why mx-6 py-20 bg-[#f7f8fa]"
//     >
      
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="font-bold mb-14 text-2xl md:text-3xl center">
//           {t.title}
//         </h1>

//         <div className="space-y-10">
//           {t.points.map(
//             (
//               item: { title: string; description: string },
//               index: number
//             ) => (
//               <div
//                 key={index}
//                 className="text-center max-2-3xl mx-auto"
//               >
//                 {/* Dot / Icon */}
//                 {/* <span className="why-dot mt-2 shrink-0" /> */}

//                 {/* Text */}
//                 <div>
//                   <h4 className="font-semibold text-lg md:text-xl mb-1">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }




import { translations } from "../lib/translations";

export default function WhyChooseUs({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].whyChooseUs;

  return (
    <section
      id="whyChooseUs"
      className="mx-4 md:mx-8 lg:mx-16 py-24"
    >
      {/* Neumorphic wrapper */}
      <div className="neu-card max-w-5xl mx-auto px-6 py-20">
        
        {/* Title */}
        <h2 className="font-bold mb-16 text-center">
          {t.title}
        </h2>

        {/* Points */}
        <div className="space-y-12">
          {t.points.map(
            (
              item: { title: string; description: string },
              index: number
            ) => (
              <div
                key={index}
                className="text-center max-w-2xl mx-auto"
              >
                <h4 className="font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
