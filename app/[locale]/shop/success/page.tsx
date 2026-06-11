import { translations } from "../../../lib/translations";
import Link from "next/link";
import { use } from "react";

export default function SuccessPage({
  params,
}: {
  params: Promise<{ locale: "en" | "de" }>;
}) {
  const { locale } = use(params);
  const t = translations[locale].shop;

  return (
    <div className="pt-32 pb-24 bg-[#f5f6f8] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        <div className="neu-card p-12 flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-4xl shadow-inner">
            ✓
          </div>
          <h1 className="font-bold text-gray-900">{t.successTitle}</h1>
          <p className="text-gray-600 leading-relaxed">
            {t.successMessage}
          </p>
          <Link
            href={`/${locale}/shop`}
            className="neu-btn-link py-3 px-8 font-bold mt-4"
          >
            {t.continueShopping}
          </Link>
        </div>
      </div>
    </div>
  );
}
