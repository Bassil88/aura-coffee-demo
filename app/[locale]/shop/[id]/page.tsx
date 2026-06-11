import { getProductById } from "../../../lib/mockData";
import { translations } from "../../../lib/translations";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCartButton from "../../../components/AddToCartButton";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: "en" | "de"; id: string }>;
}) {
  const { locale, id } = await params;
  const product = getProductById(id);
  const t = translations[locale].shop;

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#f5f6f8] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href={`/${locale}/shop`}
          className="inline-flex items-center text-sm font-medium text-blue-600 mb-8 hover:underline"
        >
          ← {locale === "en" ? "Back to Shop" : "Zurück zum Shop"}
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <div className="neu-image-wrapper">
            <div className="relative h-[400px] md:h-[500px] image-mask overflow-hidden">
              <Image
                src={product.image}
                alt={product.name[locale]}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
              {product.category}
            </span>
            <h1 className="font-bold text-gray-900 mb-6 leading-tight">
              {product.name[locale]}
            </h1>
            
            <div className="neu-card p-8 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {product.description[locale]}
              </p>
            </div>

            <div className="glass-shell p-8 rounded-3xl flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">{t.price}</span>
                <span className="text-3xl font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </span>
              </div>
              
              <AddToCartButton 
                productId={product.id} 
                label={t.addToCart} 
                className="neu-btn-link py-4 px-10 text-lg font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
