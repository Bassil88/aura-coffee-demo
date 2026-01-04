// "use client";

// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";

// export default function ContactForm() {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [sent, setSent] = useState(false);

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         formRef.current!,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(() => setSent(true));
//   };

//   return (
//     <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
//       <input name="name" placeholder="Your Name" className="w-full p-2 border" />
//       <input name="email" placeholder="Your Email" className="w-full p-2 border" />
//       <textarea name="message" placeholder="Your Message" className="w-full p-2 border" />

//       <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded">
//         Send
//       </button>

//       {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
//     </form>
//   );
// }
