
export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      {/* <Navbar locale="en" /> */}
      <section className="min-h-screen py-14 bg-[#f7f8fa]">

      <main
        style={{
          padding: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          paddingTop: "120px",
        }}
      >
        <h1>Datenschutzerklärung</h1>

        <p>
          Dies ist eine vorläufige Datenschutzerklärung für die
          Entwicklungsphase der Website Aura Organic Coffee.
        </p>

        <p>
          Eine vollständige Datenschutzerklärung wird vor dem offiziellen Start
          der Website bereitgestellt.
        </p>

        <h2>Kontakt</h2>

        <p>
          Bei Fragen zum Datenschutz kontaktieren Sie uns bitte über die auf der
          Website angegebenen Kontaktmöglichkeiten.
        </p>

        <p>Stand: 2026</p>
      </main>
      </section>
    </>
  );
}