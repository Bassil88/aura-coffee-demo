import Navbar from "@/app/components/Navbar";
import { products } from "../../lib/mockData";
import { translations } from "../../lib/translations";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";

export default async function ShopPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: "en" | "de" }>;
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { locale } = await params;
  const { category, q } = await searchParams;
  const t = translations[locale].shop;

  const filteredProducts = products.filter((p) => {
    const matchesCategory = !category || p.category === category;
    const matchesSearch =
      !q ||
      p.name[locale].toLowerCase().includes(q.toLowerCase()) ||
      p.description[locale].toLowerCase().includes(q.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <Navbar locale={locale} />
    <div className="pt-32 pb-24 bg-[#f5f6f8] min-h-screen">
      <div className="max-w-[1700px] mx-auto px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-bold text-gray-900 mb-4">{t.title}</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-20"></div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={`/${locale}/shop`}
              className={`req-pill ${!category ? "bg-blue-600 text-white shadow-none" : ""}`}
            >
              {t.filterAll}
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/${locale}/shop?category=${cat}${q ? `&q=${q}` : ""}`}
                className={`req-pill ${category === cat ? "bg-blue-600 text-white shadow-none" : ""}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <form action={`/${locale}/shop`} className="w-full md:w-72">
            <div className="neu-container-wrapper-search !rounded-full p-1">
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder={t.search}
                className="w-full bg-transparent px-6 py-2 outline-none text-gray-700"
              />
              {category && <input type="hidden" name="category" value={category} />}
            </div>
          </form>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/${locale}/shop/${product.id}`}>
                <ProductCard product={product} locale={locale} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">{t.noProducts}</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
