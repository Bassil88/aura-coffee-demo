import Navbar from "../components/Navbar";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale="en" />
      {children}
    </>
  );
}
