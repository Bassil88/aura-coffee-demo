"use client";

import { useEffect, useRef, useState } from "react";
import { translations } from "../lib/translations";
import gsap from "gsap";

type SectionId = "hero" | "real-challenge" | "services" | "commonChallenges" | "whyChooseUs" | "howItWorks" | "requirements" | "contact" | "ourStory" | "faq";

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
  faq: "text-lime-600",
  ourStory: "text-yellow-600",
};

/* -----------------------------
   Sections (ORDER MATTERS)
------------------------------ */
const sections: { id: SectionId }[] = [{ id: "hero" }, { id: "real-challenge" }, { id: "services" }, { id: "commonChallenges" }, { id: "whyChooseUs" }, { id: "howItWorks" }, { id: "requirements" }, { id: "contact" }, { id: "ourStory" }, { id: "faq" }];

type ClosestSection = {
  id: SectionId;
  top: number;
};

export default function ScrollIndicator({ locale }: { locale: "en" | "de" }) {
  const indicatorRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [label, setLabel] = useState("START");
  const [theme, setTheme] = useState("text-black");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const blurClass = isMobile ? "" : "backdrop-blur-md";
  const labels = translations[locale].scrollIndicator;
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("hero");
  const [isAtTop, setIsAtTop] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  // const desktopClasses = isSafari ? "bg-white/15 backdrop-blur-xs" : "bg-white/10 backdrop-blur-md mix-blend-difference";
  const desktopClasses = isSafari
  ? `
      bg-white/20
      backdrop-blur-xl
      border border-white/20
      shadow-xl
    `
  : `
      bg-white/10
      backdrop-blur-md
      mix-blend-difference
    `;

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
      rotate: isAtTop ? 180 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  }, [isAtTop]);

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
          return { id: s.id, top };
        }

        return closest;
      }, null);

      if (!closestSection) return;

      // if (isNearBottom()) {
      //   setIsAtTop(true);
      //   setLabel(labels.TOP);
      //   setTheme(isMobile ? "text-black" : "text-white");
      // } else {
      //   setIsAtTop(false);
      //   setActiveSectionId(closestSection.id);
      //   setLabel(labels[closestSection.id]);
      //   setTheme(sectionColors[closestSection.id] ?? "text-white");
      // }

      if (isNearBottom()) {
  setIsAtTop(true);
  setLabel(labels.TOP);

  if (isSafari) {
    setTheme("text-black");
  } else {
    setTheme(isMobile ? "text-black" : "text-white");
  }
} else {
  setIsAtTop(false);
  setActiveSectionId(closestSection.id);
  setLabel(labels[closestSection.id]);
  setTheme(sectionColors[closestSection.id] ?? "text-white");
}

      setVisible(true);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, isSafari]);

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

useEffect(() => {
  const ua = navigator.userAgent;

  console.log(ua);

  const safari =
    /^((?!chrome|android).)*safari/i.test(ua);

  console.log("Safari?", safari);

  setIsSafari(safari);
}, []);

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
    if (isAtTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const currentIndex = sections.findIndex((s) => s.id === activeSectionId);

    const nextSection = sections[currentIndex + 1] ?? sections[0];

    const el = document.getElementById(nextSection.id);
    if (!el) return;

    const offset = isMobile ? 100 : 140;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (!visible) return null;
  // const mobileSafe = isMobile ? "bg-white/20" : "bg-white/10 mix-blend-difference isolation-[isolate]";
  const mobileSafe = isMobile ? "bg-white/20" : desktopClasses;

  return (
   <button
  ref={indicatorRef}
  onClick={handleClick}
  aria-label="Scroll navigation"
  className={`
    fixed z-40
    flex flex-col items-center gap-1
    ${isMobile
      ? "bottom-7 right-10 translate-x-1/2 px-3 py-2 scale-90"
      : "top-1/2 right-8 -translate-y-1/2 px-4 py-1"}
    rounded-full
    ${mobileSafe}
    shadow-[0_0_20px_rgba(255,255,255,0.15)]
    cursor-pointer
    ${theme}
    [transform:translateZ(0)]
    will-change-transform
  `}
>
      <span
        ref={textRef}
        className={`
          uppercase font-medium tracking-[0.35em]
          ${isMobile ? "text-[9px]" : "text-[10px]"}
          will-change-transform
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
