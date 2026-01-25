import { translations } from "../lib/translations";
export default function About({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].about;

  return (
    <section id="ourStory" className="neu-card my-16 py-5 md:py-15 lg:py-20 xl:py-24 max-w-5xl mx-4 lg:mx-auto md:px-8 px-5">
      {/* Section label */}
      <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-3 ">{t.label}</p>

      <h2 className="font-bold text-center mb-10 text-2xl md:text-3xl">{t.title}</h2>
      {/* fade-up, duration-500
       */}
      <div className="space-y-8 text-gray-700 leading-relaxed">
        {t.paragraphs.slice(0, -1).map((text: string, index: number) => (
          <p key={index} className="text-sm sm:text-base md:text-lg">
            {text}
          </p>
        ))}

        {/* Highlighted core value */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center font-medium text-gray-900 text-sm sm:text-base md:text-lg">{t.paragraphs[t.paragraphs.length - 1]}</p>
        </div>
      </div>
    </section>
  );
}
