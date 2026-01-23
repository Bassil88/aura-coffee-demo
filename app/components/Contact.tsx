"use client";
import { useInView } from "../lib/useInView";
import Image from "next/image";
import { translations } from "../lib/translations";

export default function Contact({ locale }: { locale: "de" | "en" }) {
  const t = translations[locale].contact;
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section ref={ref} id="contact" className={`bg-[#1e293b] py-20 contact-radius mx-2 glass-section fade-up ${isVisible ? "fade-up-visible" : ""} `}>
      <div>
        <div className="max-w-4xl mx-auto text-center px-6  ">
          <h3 className=" font-bold text-white mb-4">{t.title}</h3>

          <p
            className=" text-slate-300 max-w-3xl mx-auto text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.intro}
          </p>

          <br />

          <p
            className="text-slate-400 mb-1 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.cta}
          </p>
          <p
            className="text-slate-400 mb-1 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
          >
            {t.getintouch}
          </p>

          <div className="space-y-3 text-slate-200">
            {/* EMAIL */}

            {/* <div className="flex justify-center items-center gap-3 mb-6">
            <Image src="/handset-icon-size_32.png" alt="WhatsApp" width={45} height={45} />
            <a href="https://wa.me/491631897653?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Ausbildung" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition text-sm
      sm:text-base
      md:text-lg
      lg:text-xl ">
              
            </a>
          </div> */}

            {/* FACEBOOK */}
            <div className="flex justify-center py-8 gap-6">
              <a href="viber://chat?number=%2B491631897653" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
                <Image src="/viber_icon.png" alt="viber" width={48} height={48} />
              </a>

              <a href="https://www.facebook.com/share/17mSYUDRA6/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
                <Image src="/round-blue-facebook-button-icon-size_64.png" alt="Facebook" width={48} height={48} />
              </a>
              {/* <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:opacity-80 transition">
              <Image src="/telegram-94.png" alt="telegram" width={48} height={48} />
            </a> */}

              {/* WHATSAPP */}
              <a href="https://wa.me/491631897653?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Ausbildung" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition ">
                <Image src="/whatsapp-200.png" alt="WhatsApp" width={45} height={45} />
              </a>
            </div>
            <div className="flex justify-center items-center gap-3 mb-3">
              <Image src="/email-100.png" alt="Email" width={35} height={35} />
              <a
                href="mailto:contact@brightway2deutschland.com"
                className="hover:text-blue-400 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl transition"
              >
                contact@brightway2deutschland.com
              </a>
            </div>

            {/* PHONE */}
            <div className="flex justify-center items-center gap-3 mb-6 ">
              <Image src="/office-phone-94.png" alt="Phone" width={29} height={29} />
              <a
                href="tel:+49 4141 428 438"
                className="hover:text-blue-400 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl transition"
              >
                +49 4141 428 438
              </a>
            </div>
            <p
              className="text-slate-400 mb-8 text-sm
      sm:text-base
      md:text-lg
      lg:text-xl "
            >
              Brightway2Deutschland, Kolonnenstr. 8 | 10827 Berlin, Germany
            </p>
            <div className="flex justify-center pt-4"></div>
            <div className="flex justify-center pt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
