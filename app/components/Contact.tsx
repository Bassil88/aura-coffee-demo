import Image from "next/image";
import { translations } from "../lib/translations";

export default function Contact({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].contact;

  return (
    <section id="contact" className="bg-[#1e293b] py-20 contact-radius mx-2">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h3 className=" font-bold text-white mb-4">{t.title}</h3>

        <p className=" text-slate-300 max-w-3xl mx-auto">{t.intro}</p>

        <br />

        <p className="text-slate-400 mb-8">{t.cta}</p>

        <div className="space-y-3 text-slate-200">
          {/* EMAIL */}
          <div className="flex justify-center items-center gap-3 mb-3">
            <Image src="/gmail-icon-size_32.png" alt="Email" width={20} height={20} />
            <a href="mailto:contact@brightway2deutschland.com" className="hover:text-blue-400 transition">
              contact@brightway2deutschland.com
            </a>
          </div>

          {/* PHONE */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <Image src="/telephone-emoji-clipart-md.png" alt="Phone" width={20} height={20} />
            <a href="tel:+49 4141 428 438" className="hover:text-blue-400 transition">
              +49 4141 428 438
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <Image src="/handset-icon-size_32.png" alt="WhatsApp" width={20} height={20} />
            <a href="https://wa.me/4915776478980?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Ausbildung" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              {t.whatsapp}
            </a>
          </div>

          {/* FACEBOOK */}
          <div className="flex justify-center pt-4 gap-6">
            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
              <Image src="/viber-icons.png" alt="viber" width={48} height={48} />
            </a>

            <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
              <Image src="/round-blue-facebook-button-icon-size_64.png" alt="Facebook" width={48} height={48} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
              <Image src="/telegram-icons.png" alt="telegram" width={48} height={48} />
            </a>
          </div>

          <div className="flex justify-center pt-4"></div>
          <div className="flex justify-center pt-4"></div>
        </div>
      </div>
    </section>
  );
}
