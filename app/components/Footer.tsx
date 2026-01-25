"use client";
import Link from "next/link";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className={`h-5 flex justify-between`}>
      <Link className="text-xs text-neutral-300 " target="_blank" href="../impressum">
        Impressum
      </Link>
      <Link className="text-xs text-neutral-300" target="_blank" href="../datenschutz">
        Datenschutzerklärung
      </Link>
    </footer>
  );
}
