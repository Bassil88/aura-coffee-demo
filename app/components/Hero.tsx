"use client";
import { translations } from "../lib/translations";

export default function Hero({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].hero;

  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        rounded-[36px]
        mx-3 sm:mx-6 lg:mx-12
        mt-24
        min-h-[88vh]
        md:min-h-[85vh]
        flex items-center
      "
      style={{
        backgroundImage: "url('/Espresso-machine.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/35 to-transparent" />

      {/* CONTENT */}
      <div className=" mx-4 relative z-10 w-full">
        <div
          className="
            mx-auto max-w-4xl
            text-center
            rounded-[28px]
            px-6 py-19
            sm:px-10 sm:py-14
            backdrop-blur-md
            bg-white/10
            border border-white/10
          "
        >
          {/* TITLE */}
          <h1
            className="
              font-semibold
              tracking-tight
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              leading-tight
            "
          >
            {t.title}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              text-sm
              sm:text-base
              md:text-lg
              text-white/90
              leading-relaxed
            "
          >
            {t.description}
          </p>

          {/* CTA TEXT */}
          <p
            className="
              mt-6
              text-sm
              sm:text-base
              font-medium
              text-white
            "
          >
            {t.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
