"use client";

import { useCart } from "../../providers/CartProvider";
import { translations } from "../../lib/translations";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function CartPage({
  params,
}: {
  params: Promise<{ locale: "en" | "de" }>;
}) {
  const { locale } = use(params);
  const { resolvedItems, removeItem, totalPrice, clearCart } = useCart();
  const t = translations[locale].shop;

  const handleCheckout = () => {
    alert(t.checkoutSuccess);
    clearCart();
  };

  return (
    <div className="pt-32 pb-24 bg-[#f5f6f8] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-bold text-gray-900 mb-12 text-center">{t.cart}</h1>

        {resolvedItems.length > 0 ? (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {resolvedItems.map((item) => (
                <div key={item.product.id} className="neu-card p-4 flex items-center gap-6">
                  <div className="neu-image-wrapper !w-24 !h-24 flex-shrink-0">
                    <div className="relative w-full h-full image-mask overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name[locale]}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900">
                      {item.product.name[locale]}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x €{item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="font-bold text-gray-900">
                      €{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs text-red-500 hover:underline font-medium"
                    >
                      {t.remove}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-shell p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-sm text-gray-400 uppercase font-bold tracking-wider">
                  {t.total}
                </span>
                <p className="text-4xl font-bold text-gray-900">
                  €{totalPrice.toFixed(2)}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                className="neu-btn-link py-4 px-12 text-xl font-bold w-full md:w-auto"
              >
                {t.checkout}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center gap-6">
            <span className="text-6xl">🛒</span>
            <p className="text-gray-500 text-xl">{t.emptyCart}</p>
            <Link href={`/${locale}/shop`} className="neu-btn-link py-3 px-8 font-bold">
              {locale === "en" ? "Back to Shop" : "Zurück zum Shop"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
