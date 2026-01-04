import Image from "next/image";
import { translations } from "../lib/translations";

export default function WhyChooseUs({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].whyChooseUs;

  return (
    <section id="whyChooseUs" className="py-20 bg-[#f7f8fa]">
      <div className="mx-3">
        <h3 className="font-bold text-center mb-10">
          {t.title}
        </h3>

        <div className="max-w-3xl mx-auto space-y-4 ">
          {t.points.map((text: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              
              {/* Diamond icon */}
              <Image
                src="/diamond.png"
                alt="Diamond bullet"
                width={18}
                height={18}
                className="mt-1"
              />

              {/* Text */}
              <p className="text-gray-800">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
