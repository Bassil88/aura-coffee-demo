"use client";
import { useInView } from "../lib/useInView";
import { translations } from "../lib/translations";

export default function Hero({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].hero;
  const { ref, isVisible } = useInView<HTMLDivElement>({
  threshold: 0.2,
});

  return (
    <section className={`relative mt-30 py-18 px-4 overflow-hidden glass-containerro mx-2
    sm:mx-4
    md:mx-8
    lg:mx-16
    xl:mx-38
    2xl:mx-42
    lg:py-24
    xl:py-28
    2xl:py-32 
    reveal
    `}
    style={{
      backgroundImage: "url('/hero-bg7.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "left center",
    }}>
      

  {/* BACKDROP LAYER */}
  <div
    className="absolute inset-1 -z-10 "
    
    />

  {/* GLASS PANEL */}
  {/* <div className="glass-hero liquid-glass-hero mx-auto max-w-8xl text-center"
  >
  <h1 className=" font-bold mb-6 ">
  {t.title}
  </h1>
  
  <p className="text-lg inline-block mt-5 px-3 py-1 rounded-lg bg-white/1 backdrop-blur-xs next-leading-relaxed ">
  {t.description}
  </p>
  
  <p className=" text-lg inline-block mt-8 px-1 py-1 rounded-lg bg-white/1 backdrop-blur-xs">
  {t.cta}
  </p>
  </div> */}
{/* liquid-glass-hero */}
 
    <h1 className="text-center font-bold
      mb-2
      text-shadow-soft drop-shadow-sm
      leading-tight ">
      {t.title}
    </h1>
 <div className=" mx-auto max-w-8xl text-center weight-light" >
  
    <h4 className="text-shadow-soft drop-shadow-sm glass-hero text-sm 
      sm:text-base
      md:text-lg
      lg:text-xl inline-block mt-5 px-1 py-1  next-leading-relaxed ">
      {t.description}
    </h4> <br />

    <h4 className="glass-hero text-sm text-shadow-soft drop-shadow-sm 
      sm:text-base
      md:text-lg
      lg:text-xl inline-block mt-5 px-1 py-1  next-leading-relaxed
      ">
      {t.cta}
    </h4>
  </div>

</section>

  );
}
// import { translations } from "../lib/translations";

// export default function Hero({ locale }: { locale: "de" | "en" }) {
//   const t = translations[locale].hero;

//   return (
//     <section className="mt-40 pt-10 pb-20   text-black text-center  glass-hero mx-2 mb-50" id="hero ">
//       <div className="mx-3">

//       <h2 className=" font-bold mb-4">
//         {t.title}
//       </h2>

//       <p className=" max-w-2xl mx-auto text-center leading-relaxed">
// {t.description}
//       </p>
//         <p className="mt-4">
//           {t.disclaimer}
//         </p>

//         <a href="#contact" className="neu-button mt-8">
//           {t.cta}
//         </a>
//       </div>
//     </section>
//   );
// }
