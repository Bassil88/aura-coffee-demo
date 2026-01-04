// export default function Footer() {
//   return (
// <footer className="bg-[#1e293b]  text-slate-200 footer-radius">
//       <div className="max-w-6xl mx-auto px-6 py-1 text-center space-y-1">
// <p>We guide and support applicants throughout the process.
// Applications and decisions remain the responsibility of applicants and employers.
// </p>
//         <h4 className="font-semibold text-white text-xs">
//           Brightway2Deutschland – Ausbildung Consulting & Support
//         </h4>

//         <p className="text-sm text-slate-400 text-xs">
//           Consultation, preparation, and coaching services for international applicants.
//         </p>

//         <div className="flex justify-center gap-6 text-sm">
//           <a href="#services" className="hover:text-blue-400 transition text-xs">
//             Services
//           </a>
//           <a href="#requirements" className="hover:text-blue-400 transition text-xs">
//             Requirements
//           </a>
//           <a href="#contact" className="hover:text-blue-400 transition text-xs">
//             Contact
//           </a>
//         </div>
//         <p className="text-xs text-slate-500 pt-1">
//           © 2025 Brightway2Deutschland Ausbildung Consulting. All rights reserved.
//         </p>
//       </div>
//       <a href="../impressum/Impressum.tsx">Impressum </a>
//       <a href="../datenschutz/Datenschutzerklärung.tsx"> Datenschutzerklärung</a>
//     </footer>
//   );
// } 

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#1e293b] text-slate-200 footer-radius" id="footer">
//       <div className="max-w-6xl mx-auto px-6 py-6 text-center space-y-3">

//         <p className="text-xs text-slate-300 max-w-3xl mx-auto">
//           We guide and support applicants throughout the process.
//           Applications and final decisions remain the responsibility of
//           applicants and employers.
//         </p>

//         <h4 className="font-semibold text-white text-sm">
//           Brightway2Deutschland – Ausbildung Consulting &amp; Support
//         </h4>

//         <p className="text-xs text-slate-400">
//           Consultation, preparation, and coaching services for international applicants.
//         </p>

//         <div className="flex justify-center gap-6 text-xs pt-2">
//           <a href="#services">Services</a>
//           <a href="#requirements">Requirements</a>
//           <a href="#contact">Contact</a>
//         </div>

// <div className="flex justify-center gap-6 text-xs pt-2">
//   <Link href="/impressum" className="hover:text-blue-400 transition">
//     Impressum
//   </Link>
//   <Link href="/datenschutz" className="hover:text-blue-400 transition">
//     Datenschutzerklärung
//   </Link>
// </div>

//         <p className="text-xs text-slate-500 pt-2">
//           © 2025 Brightway2Deutschland. All rights reserved.
//         </p>

//       </div>
//     </footer>
//   );
// }


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
    <footer className="h-5 flex justify-between">
      <Link className="text-xs text-neutral-300 " target="_blank" href="../impressum">Impressum</Link>
      <Link  className="text-xs text-neutral-300" target="_blank" href="../datenschutz">Datenschutzerklärung</Link>
    </footer>
  );
}
