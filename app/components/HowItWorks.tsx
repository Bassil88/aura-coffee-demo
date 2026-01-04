import Image from "next/image";
import { translations } from "../lib/translations";
export default function HowItWorks({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].howItWorks;
  return (
    <section className="py-24 bg-[#f5f6f8]" id="howItWorks">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Steps */}
        <div>
          <h3 className="font-bold text-gray-900 mb-8">
            {t.title}
          </h3>

          <ul className="space-y-5">
            {t.steps.map((step, i) => (
              <li key={i} className="how-step">
                <span className="step-number">{i + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ul>

          <p className=" text-gray-500 mt-6 max-w-md">
{t.note}
          </p>
        </div>

        {/* RIGHT: Image */}
<div className="relative rounded-3xl overflow-hidden h-[320px]">
  <Image
    src="/how-it-works.png"
    alt="How Ausbildung application works"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
</div>


      </div>
    </section>
  );
}
