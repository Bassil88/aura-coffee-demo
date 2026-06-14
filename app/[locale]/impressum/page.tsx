
export const metadata = {
  title: "Legal Notice | Aura Organic Coffee",
};

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
//       {/* <Navbar locale="en" /> */}

    <section className="min-h-screen py-14 bg-[#f7f8fa]">
      <main
        style={{
          padding: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          paddingTop: "80px",
        }}
      >
        <h1 className="text-5xl mb-6">Legal Notice</h1>

        <p>
          This is a temporary legal notice provided during the development phase
          of the Aura Organic Coffee website.
        </p>

        <p className="mt-4">
          A complete legal notice will be published before the official launch
          of the website.
        </p>

        <p className="mt-4">Last updated: 2026</p>
      </main>
    </section>
  );
}