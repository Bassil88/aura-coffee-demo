// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// /* -----------------------------
//    Magnetic cursor hook (ONLY magnetic)
// ------------------------------ */
// function useMagnetic<T extends HTMLElement>(
//   ref: React.RefObject<T | null>,
//   strength = 0.35
// ) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const move = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect();
//       const x = (e.clientX - rect.left - rect.width / 2) * strength;
//       const y = (e.clientY - rect.top - rect.height / 2) * strength;

//       gsap.to(el, {
//         x,
//         y,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     };

//     const reset = () => {
//       gsap.to(el, {
//         x: 0,
//         y: 0,
//         duration: 0.6,
//         ease: "power3.out",
//       });
//     };

//     el.addEventListener("mousemove", move);
//     el.addEventListener("mouseleave", reset);

//     return () => {
//       el.removeEventListener("mousemove", move);
//       el.removeEventListener("mouseleave", reset);
//     };
//   }, [ref, strength]);
// }
// const sectionColors: Record<string, string> = {
// hero: "text-black",
//   "real-challenge": "text-red-600",
//   services: "text-blue-600",
//   commonChallenges: "text-purple-600",
//   whyChooseUs: "text-emerald-600",
//   howItWorks: "text-amber-500",
//   requirements: "text-cyan-600",
//   contact: "text-black",
//   ourStory: "text-indigo-600",
//   faq: "text-pink-600",

// };

// /* -----------------------------
//    Sections
// ------------------------------ */
// const sections = [
//   { id: "hero", label: "START" },
//   { id: "real-challenge", label: "CHALLENGES" },
//   { id: "services", label: "SERVICES" },
//   { id: "commonChallenges", label: "CHALLENGES" },
//   { id: "whyChooseUs", label: "WHY US" },
//   { id: "howItWorks", label: "PROCESS" },
//   { id: "requirements", label: "REQUIREMENTS" },
//   { id: "contact", label: "CONTACT" },
//   { id: "ourStory", label: "ABOUT" },
//   { id: "faq", label: "FAQ" },
// ];

// export default function ScrollIndicator() {
//   const indicatorRef = useRef<HTMLButtonElement>(null);
//   const arrowRef = useRef<SVGSVGElement>(null);
//   const textRef = useRef<HTMLSpanElement>(null);

//   const [label, setLabel] = useState("SCROLL");
//   const [visible, setVisible] = useState(false);
//   const [theme, setTheme] = useState("text-black");
// const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   /* Magnetic cursor */
//   useMagnetic(indicatorRef);

//   /* Entrance animation */
//   useEffect(() => {
//     if (!indicatorRef.current) return;

//     gsap.fromTo(
//       indicatorRef.current,
//       { opacity: 0, x: 30 },
//       { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
//     );
//   }, []);

//   /* Arrow morph (up/down) */
//   useEffect(() => {
//     if (!arrowRef.current) return;

//     gsap.to(arrowRef.current, {
//       rotate: label === "CONTACT" ? 180 : 0,
//       transformOrigin: "50% 50%",
//       duration: 0.5,
//       ease: "power3.inOut",
//     });
//   }, [label]);

//   /* Text rotation on scroll */
//   useEffect(() => {
//     const onScroll = () => {
//       if (!textRef.current) return;

//       const progress =
//         window.scrollY /
//         (document.documentElement.scrollHeight - window.innerHeight);

//       gsap.to(textRef.current, {
//         rotate: progress * 180,
//         ease: "none",
//         duration: 0.2,
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* Section label logic */
//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     sections.forEach((s) => {
//       const el = document.getElementById(s.id);
//       if (!el) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//   setLabel(s.label);
// setTheme(sectionColors[s.id] ?? "text-black");
//   setVisible(true);
// }

//         },
//         { threshold: 0.4 }
//       );

//       observer.observe(el);
//       observers.push(observer);
//     });

//     return () => observers.forEach((o) => o.disconnect());
//   }, []);

// const handleClick = () => {
//   const currentIndex = sections.findIndex(
//     (s) => s.label === label
//   );

//   const nextSection =
//     sections[currentIndex + 1] ?? sections[0];

//   const el = document.getElementById(nextSection.id);
//   if (!el) return;

//   const y = el.getBoundingClientRect().top + window.scrollY - 100;
//   window.scrollTo({ top: y, behavior: "smooth" });
// };

//   if (!visible) return null;

//   return (
//     <button
//       ref={indicatorRef}
//       onClick={handleClick}
//       aria-label="Scroll navigation"
// //       className={`
// //   fixed
// //   ${isMobile ? "bottom-6 right-1/2 translate-x-1/2" : "top-1/2 right-8 -translate-y-1/2"}
// //   z-40
// //   flex
// //   flex-col
// //   items-center
// //   gap-2
// //   ${isMobile ? "px-3 py-2 scale-75" : "px-4 py-3"}
// //   rounded-full
// //   bg-white/10
// //   backdrop-blur-md
// //   mix-blend-difference
// //   shadow-lg
// //   cursor-pointer
// //   ${theme}
// // `}
// className={`
//   fixed
//   z-40
//   flex
//   items-center
//   justify-center
//   ${isMobile
//     ? "bottom-6 right-1/2 translate-x-1/2 h-14 w-8 rounded-full"
//     : "top-1/2 right-8 -translate-y-1/2 px-4 py-3 rounded-full"}
//  bg-white/10
//     shadow-[0_0_20px_rgba(255,255,255,0.15)]
//     backdrop-blur-md
//     mix-blend-difference
//   cursor-pointer
//   ${theme}
// `}

//     >
// {/* <span
//   ref={textRef}
//   className="text-[10px] tracking-[0.35em] uppercase font-medium"
// >
//   {label}
// </span> */}
// <span
//   ref={textRef}
//   className={`uppercase font-medium tracking-[0.35em]
//     ${isMobile ? "text-[8px] opacity-70" : "text-[10px]"}
//   `}
// >
//   {isMobile ? "" : label}
// </span>

//       {/* <svg
//         ref={arrowRef}
//   width={isMobile ? 14 : 18}
//   height={isMobile ? 14 : 18}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 5v14" />
//         <path d="M5 12l7 7 7-7" />

//       </svg> */}

//       <svg
//   ref={arrowRef}
//   width={isMobile ? 14 : 18}
//   height={isMobile ? 14 : 18}
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="currentColor"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   className={isMobile ? "animate-bounce" : ""}
// >
//   <path d="M12 5v14" />
//   <path d="M5 12l7 7 7-7" />
// </svg>

//     </button>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* -----------------------------
   Section colors
------------------------------ */
const sectionColors: Record<string, string> = {
  hero: "text-black",
  "real-challenge": "text-red-600",
  services: "text-blue-600",
  commonChallenges: "text-purple-600",
  whyChooseUs: "text-emerald-600",
  howItWorks: "text-amber-500",
  requirements: "text-cyan-600",
  contact: "text-green-600",
  ourStory: "text-amber-900",
  faq: "text-indigo-600",
};

/* -----------------------------
   Sections (ORDER MATTERS)
------------------------------ */
const sections = [
  { id: "hero", label: "START" },
  { id: "real-challenge", label: "CHALLENGES" },
  { id: "services", label: "SERVICES" },
  { id: "commonChallenges", label: "CHALLENGES" },
  { id: "whyChooseUs", label: "WHY US" },
  { id: "howItWorks", label: "PROCESS" },
  { id: "requirements", label: "REQUIREMENTS" },
  { id: "contact", label: "CONTACT" },
  { id: "ourStory", label: "ABOUT US" },
  { id: "faq", label: "FAQ" },
];
type ClosestSection = {
  id: string;
  label: string;
  top: number;
};

export default function ScrollIndicator() {
  const indicatorRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [label, setLabel] = useState("START");
  const [theme, setTheme] = useState("text-black");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const blurClass = isMobile ? "" : "backdrop-blur-md";

  /* -----------------------------
     Mobile detection (stable)
  ------------------------------ */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* -----------------------------
     Entrance animation
  ------------------------------ */
  useEffect(() => {
    if (!indicatorRef.current) return;

    gsap.fromTo(indicatorRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" });
  }, []);

  /* -----------------------------
     Arrow rotation
  ------------------------------ */
  useEffect(() => {
    if (!arrowRef.current) return;

    gsap.to(arrowRef.current, {
      rotate: label === "TOP" ? 180 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  }, [label]);

  /* -----------------------------
     Text rotation on scroll
  ------------------------------ */
  useEffect(() => {
    const onScroll = () => {
      if (!textRef.current) return;

      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      gsap.to(textRef.current, {
        rotate: progress * 180,
        duration: 0.2,
        ease: "none",
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -----------------------------
     ACTIVE SECTION DETECTION (FIXED)
  ------------------------------ */
  const isNearBottom = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 120;
    return scrollPosition >= threshold;
  };

  useEffect(() => {
    const onScroll = () => {
      const offset = isMobile ? 120 : 150;

      const closestSection = sections.reduce<ClosestSection | null>((closest, s) => {
        const el = document.getElementById(s.id);
        if (!el) return closest;

        const rect = el.getBoundingClientRect();
        const top = Math.abs(rect.top - offset);

        if (!closest || top < closest.top) {
          return { id: s.id, label: s.label, top };
        }

        return closest;
      }, null);

      if (closestSection) {
        if (isNearBottom()) {
          setLabel("TOP");
          setTheme(isMobile ? "text-black" : "text-white");
        } else {
          setLabel(closestSection.label);
          setTheme(sectionColors[closestSection.id] ?? "text-white");
        }
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);
  // -----------------------------
  useEffect(() => {
    if (!isMobile) return;

    let timeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* -----------------------------
     Click scroll
  ------------------------------ */
  // const handleClick = () => {
  //   const currentIndex = sections.findIndex(
  //     (s) => s.label === label
  //   );

  //   const nextSection =
  //     sections[currentIndex + 1] ?? sections[0];

  //   const el = document.getElementById(nextSection.id);
  //   if (!el) return;

  //   const offset = isMobile ? 100 : 140;
  //   const y = el.getBoundingClientRect().top + window.scrollY - offset;

  //   window.scrollTo({ top: y, behavior: "smooth" });
  // };

  const handleClick = () => {
    // 🔼 Special case: TOP → go to hero
    if (label === "TOP") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const currentIndex = sections.findIndex((s) => s.label === label);

    const nextSection = sections[currentIndex + 1] ?? sections[0];

    const el = document.getElementById(nextSection.id);
    if (!el) return;

    const offset = isMobile ? 100 : 140;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (!visible) return null;
  const mobileSafe = isMobile ? "bg-white/20" : "bg-white/10 backdrop-blur-md mix-blend-difference";
  return (
    <button
      ref={indicatorRef}
      onClick={handleClick}
      aria-label="Scroll navigation"
      className={`
        fixed z-40
        flex flex-col items-center gap-1
        ${isMobile ? "bottom-7 right-10 translate-x-1/2 px-3 py-2 scale-90" : "top-1/2 right-8 -translate-y-1/2 px-4 py-3"}
        rounded-full
        bg-white/10
        backdrop-blur-md
         ${mobileSafe}
        shadow-[0_0_20px_rgba(255,255,255,0.15)]
        cursor-pointer
        ${theme}
      `}
    >
      <span
        ref={textRef}
        className={`
          uppercase font-medium tracking-[0.35em]
          ${isMobile ? "text-[9px]" : "text-[10px]"}
        `}
      >
        {label}
      </span>

      {/* <span
  ref={textRef}
  className={`
    uppercase font-medium tracking-[0.35em]
    ${isMobile ? "gradient-text text-[9px]" : "text-[10px]"}
    ${!isMobile ? theme : ""}
  `}
>
  {label}
</span> */}

      <svg ref={arrowRef} width={isMobile ? 14 : 18} height={isMobile ? 14 : 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" />
        <path d="M5 12l7 7 7-7" />
      </svg>
    </button>
  );
}
