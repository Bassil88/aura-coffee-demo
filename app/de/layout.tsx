import Navbar from "../components/Navbar";

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale="de" />
      {children}
    </>
  );
}
