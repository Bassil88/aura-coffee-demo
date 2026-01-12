import { translations } from "../lib/translations";

export default function Hero({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].hero;

  return (
    <section className="pt-50 pb-20 bg-[#f7f8fa]  text-black text-center" id="hero ">
      <div className="mx-3">

      <h2 className=" font-bold mb-4">
        {t.title}
      </h2>

      <p className=" max-w-2xl mx-auto text-center leading-relaxed">
{t.description}
      </p>
        <p className="mt-4">
          {t.disclaimer}
        </p>

        <a href="#contact" className="neu-button mt-8">
          {t.cta}
        </a>
      </div>
    </section>
  );
}
