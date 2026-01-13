// "use client";

// import { useRouter, usePathname } from "next/navigation";

// export default function LanguageToggle() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const isGerman = pathname.startsWith("/de");

//   const switchLanguage = () => {
//     if (isGerman) {
//       router.push(pathname.replace("/de", "/en"));
//     } else {
//       router.push(pathname.replace("/en", "/de"));
//     }
//   };

//   return (
//     <button
//       onClick={switchLanguage}
//       className="relative flex items-center w-[70px] h-[34px] rounded-full bg-white shadow-inner border border-gray-200 transition"
//       aria-label="Switch language"
//     >
//       {/* Slider */}
//       <span
//         className={`absolute top-[3px] left-[3px] h-[28px] w-[32px] rounded-full bg-gray-900 shadow-md transition-transform duration-300 ${
//           isGerman ? "translate-x-0" : "translate-x-[32px]"
//         }`}
//       />

//       {/* Labels */}
//       <span
//         className={`z-10 w-1/2 text-xs font-semibold transition ${
//           isGerman ? "text-white" : "text-gray-600"
//         }`}
//       >
//         DE
//       </span>
//       <span
//         className={`z-10 w-1/2 text-xs font-semibold transition ${
//           !isGerman ? "text-white" : "text-gray-600"
//         }`}
//       >
//         EN
//       </span>
//     </button>
//   );
// }



"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const isGerman = pathname.startsWith("/de");

  const switchLanguage = () => {
    if (isGerman) {
      router.push(pathname.replace("/de", "/en"));
    } else {
      router.push(pathname.replace("/en", "/de"));
    }
  };

  return (
    <button
      onClick={switchLanguage}
      aria-label="Switch language"
      className="neu-lang-toggle"
    >
      {/* Slider */}
      <span
        className={`neu-lang-thumb ${
          isGerman ? "translate-x-0" : "translate-x-[34px]"
        }`}
      />

      {/* Labels */}
      <span className={`neu-lang-label ${isGerman ? "active" : ""}`}>
        DE
      </span>
      <span className={`neu-lang-label ${!isGerman ? "active" : ""}`}>
        EN
      </span>
    </button>
  );
}
