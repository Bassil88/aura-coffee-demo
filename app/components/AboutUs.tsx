import { translations } from "../lib/translations";

export default function About({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].about;

  return (
    <section className="py-20 max-w-4xl mx-auto px-4" id="ourStory">
      <h2 className="font-bold mb-6 text-center">
        {t.title}
      </h2>

      <div className="space-y-4 text-gray-700 leading-7">
        {t.paragraphs.map((text: string, index: number) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
