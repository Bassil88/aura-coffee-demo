import Image from "next/image";
import { translations } from "../lib/translations";

export default function Requirements({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].requirements;

  const icons = ["/language-icon-size_24.png", "/hat-icon-size_24.png", "/self-confidence_3495048.png", "/internet-icon-size_24.png", "/and-icon-size_24.png", "/guide-icon-size_24.png", "/germany-flag-waving-icon-icon-size_24.png"];

  return (
    <section id="requirements" className="py-24 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <h3 className="font-bold text-gray-900 mb-8">{t.title}</h3>

          <div className="space-y-4 ">
            {t.items.map((text: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <Image src={icons[index]} alt="" width={30} height={30} className="mt-1 flex-shrink-0" />
                <p className="text-gray-800 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <h4 className="text-center text-gray-600 mt-8 text-base max-w-md">{t.note}</h4>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative rounded-3xl overflow-hidden h-[260px]">
          <Image src="/requirements.png" alt="Requirements for Ausbildung applicants" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
