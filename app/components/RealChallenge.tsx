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
      <div className="relative z-10 max-w-7xl mx-auto px-1">
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
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">{t.subtle}</p>

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
          {t.note && <p className="mt-6 text-sm text-gray-500">{t.note}</p>}
        </div>
      </div>
    </section>
  );
}
