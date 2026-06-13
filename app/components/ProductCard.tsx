import Image from "next/image";
import { Product } from "../lib/mockData";
import { translations } from "../lib/translations";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
  locale: 'en' | 'de';
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  const t = translations[locale].shop;

  return (
    <div className="neu-card p-6 flex flex-col h-full cursor-pointer group transition-all ">
      {/* Product Image */}
      <div className="mb-5 neu-image-wrapper ">
        <div className="relative h-56 image-mask overflow-hidden bg-gray-100 ">
          <Image
            src={product.image}
            alt={product.name[locale]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-xl text-gray-900 mb-2 leading-tight">
          {product.name[locale]}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
          {product.description[locale]}
        </p>
      </div>

      {/* Action Row */}
      <div className="mt-auto pt-4 border-t border-gray-100/50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase font-bold">{t.price}</span>
          <span className="text-xl font-bold text-blue-600">
            €{product.price.toFixed(2)}
          </span>
        </div>
        
        <AddToCartButton productId={product.id} label={t.addToCart} />
      </div>
    </div>
  );
}
