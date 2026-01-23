"use client";

export default function ScrollToContact() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;

    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      aria-label="Scroll to contact"
      className="
        fixed
        bottom-8
        right-8
        z-40
        flex
        items-center
        gap-3
        px-3
        py-2
        md:px-4
        md:py-3
        md:text-base
        rounded-full
        bg-white/10
        backdrop-blur-md
        shadow-md
        hover:bg-white/10
        transition
        group
cursor-pointer
      "
    >
      <span className="text-[8px] md:text-xs tracking-widest font-medium text-gray-700">
        scroll
      </span>

      <span className="relative h-6 w-[2px] overflow-hidden bg-gray-400">
        <span className="absolute top-0 left-0 h-full w-full bg-gray-900 animate-scroll-line" />
      </span>
    </button>
  );
}
