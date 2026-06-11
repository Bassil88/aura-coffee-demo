import { subtle } from "crypto";
import { sub } from "three/tsl";

export const translations = {
  en: {
    nav: {
      services: "Our Services",
      requirements: "Requirements",
      howItWorks: "How It Works",
      contact: "Contact us",
    },

    hero: {
      title: "Start Your Ausbildung Journey in Germany",
      description: `Many international applicants struggle not because they lack motivation but because their applications are unclear, unsuitable, or poorly prepared.`,
      disclaimer:
        "No job or visa guarantees — just honest, transparent, preparation-focused consulting.",
      cta: "We provide structured consultation, document preparation support, and guided self-application assistance to help applicants apply independently with confidence.",
    },

    realChallenge: {
      subtle: "CHALLENGING PART",
      title: "The Real Challenge of Applying for Ausbildung",
      paragraphs: [
        "Before starting the Ausbildung application process, it is important to understand that success depends heavily on preparation and strategy.",

        "A professional CV and motivation letter in German are essential first steps. These documents reflect not only qualifications and experience, but also readiness, motivation, and suitability for Ausbildung positions in Germany.",

        "Equally important is understanding which Ausbildung fits your profile and how to apply correctly and independently."
      ],
      note: "Lack of preparation is one of the most common reasons for rejection."
    },


    services: {
      intro:
        "Our services include",

      items: [
        {
          title: "Consultation & Orientation",
          desc: `Individual consultation to understand Ausbildung
options, requirements, and realistic pathways.`,
        },
        {
          title: "CV & Document Preparation",
          desc: `Preparation and review of CV (Lebenslauf) and
motivation letters according to German standards.`,
        },
        {
          title: "Interview Preparation",
          desc: `Interview coaching, common questions, and
communication guidance to prepare applicants effectively.`,
        },
        {
          title: "Guided Self-Application Support",
          desc: `Step-by-step guidance during the application process.
Applicants submit applications independently.`,
        },
        {
          title: "Integration & Education Guidance",
          desc: "General orientation about life, training, and education in Germany.",
        },
      ],
    },


    commonChallenges: {
      eyebrow: "Typical Problems",
      title: "Common Challenges Applicants Face",
      items: [
        "Unclear or weak application documents",
        "Applying for unsuitable Ausbildung positions",
        "Lack of understanding of employer expectations",
        "Applications being overlooked or ignored"
      ],
      note: "These challenges are common and do not reflect a lack of ability, but they can significantly reduce the chances of receiving interview invitations."
    },



    whyChooseUs: {
      title: "Why Applicants Choose Our Guidance",
      points: [
        {
          title: "Germany-Based Expertise",
          description:
            "We operate within the German Ausbildung system and understand real employer expectations."
        },
        {
          title: "Employer-Focused Applications",
          description:
            "We guide applicants to prepare documents and interviews aligned with what German companies value."
        },
        {
          title: "Structured & Transparent Process",
          description:
            "Clear steps, realistic expectations, and full transparency throughout the entire process."
        },
        {
          title: "Independent & Responsible Applicants",
          description:
            "Applicants remain responsible for their applications and decisions, supported through structured guidance."
        }
      ]
    },

    howItWorks: {
      title: "Process",
      steps: [
        "Initial consultation and eligibility assessment",
        "CV, cover letter and document preparation",
        "Guided self-application support via video call",
        "Interview preparation and coaching",
        "Applicant attends interviews independently",
        "Final decision made by the German company",
        "Visa application submitted personally by the applicant",
      ],
      note:
        "We guide and support applicants throughout the process. Applications and decisions remain the responsibility of applicants and employers.",
    },



    requirements: {
      title: "Requirements for International Applicants",
      items: [
        "German language level B1 (recommended), B2 is a strong advantage",
        "Completed high school (10th or 12th grade)",
        "Motivation to work and learn in Germany",
        "Willingness to prepare documents and attend interviews",
        "A professional CV and cover letter",
        "Ability to apply independently with guidance",
        "Visa application submitted personally by the applicant",
      ],
      note:
        "We help you prepare everything needed for applications — but hiring decisions are made by German companies.",
    },

    contact: {
      title: "Contact Us",
      intro:
        "Thinking about an Ausbildung in Germany? Let’s take the first step together with clear and realistic guidance.",
      cta: "Get in Touch",
      getintouch: "Book your first consultation to discuss your plans and next steps.",
    },

    about: {
      label: "Who We Are",
      title: "About Us",
      paragraphs: [
        "Brightway2Deutschland was founded to support international applicants who want to understand and prepare for vocational training (Ausbildung) in Germany.",
        "Many applicants face challenges not because opportunities do not exist, but because the process is complex and unfamiliar. Our goal is to provide clear information, realistic guidance, and structured preparation so applicants can navigate the process confidently and independently.",
        "We believe long-term success comes from preparation, transparency, and personal responsibility.",
      ],
    },

    faq: {
      title: "FAQ",
      showLess: "Show less",
      readMore: "Read more",
      items: [
        {
          question: "Do you guarantee jobs or visas?",
          answer:
            "No. We provide preparation and consultation. Hiring decisions are made by German companies, and visas are applied for directly by applicants at their embassy.",
        },
        {
          question: "Can applicants from abroad apply?",
          answer:
            "Yes. Many German companies consider motivated international applicants who meet the requirements.",
        },
        {
          question: "Do you apply to companies on behalf of applicants?",
          answer:
            "No. Applicants apply independently with guided support.",
        },
        {
          question: "Do you charge placement or recruitment fees?",
          answer:
            "No. We do not offer recruitment or placement services. Our fees are for consultation, preparation, and coaching only.",
        },

        /* --- NEW QUESTIONS --- */

        {
          question: "What level of German language is required for Ausbildung?",
          answer:
            "Most Ausbildung positions require at least B1 German. A B2 level significantly improves application success and interview performance.",
        },
        {
          question: "Can I apply if I do not have work experience?",
          answer:
            "Yes. Many Ausbildung programs are designed for beginners. Motivation, language skills, and a well-prepared application are often more important than prior experience.",
        },
        {
          question: "Do you help choose the right Ausbildung?",
          answer:
            "Yes. We help applicants understand which Ausbildung professions fit their background, education, and language level.",
        },
        {
          question: "How long does the Ausbildung application process take?",
          answer:
            "The process can take several months. Preparation, applications, interviews, and visa procedures all require sufficient time and planning.",
        },
        {
          question: "Do you help with CVs and motivation letters?",
          answer:
            "Yes. We support applicants in preparing CVs and motivation letters according to German standards and employer expectations.",
        },
        {
          question: "Is your service suitable for all nationalities?",
          answer:
            "Yes. Our guidance is open to applicants of all nationalities, provided they meet the basic requirements for Ausbildung and visa eligibility.",
        },
        {
          question: "Can you help with interview preparation?",
          answer:
            "Yes. We provide interview coaching, typical questions, and communication guidance to help applicants prepare confidently.",
        },
        {
          question: "Do you assist with the visa application?",
          answer:
            "We provide general guidance and preparation tips. However, the visa application must always be submitted personally by the applicant at the responsible embassy.",
        },
      ],
    },
    scrollIndicator: {
      TOP: "TOP",
      hero: "START",
      "real-challenge": "CHALLENGES",
      services: "SERVICES",
      commonChallenges: "CHALLENGES",
      whyChooseUs: "WHY US",
      howItWorks: "PROCESS",
      requirements: "REQUIREMENTS",
      contact: "CONTACT",
      ourStory: "ABOUT US",
      faq: "FAQ",
    },
    shop: {
      title: "Our Packages",
      search: "Search services...",
      filterAll: "All Categories",
      addToCart: "Add to Cart",
      viewDetails: "Details",
      price: "Price",
      cart: "Cart",
      noProducts: "No services found.",
      emptyCart: "Your cart is empty.",
      total: "Total",
      checkout: "Checkout",
      remove: "Remove",
      items: "items",
      item: "item",
      checkoutSuccess: "Thank you! This is a dummy checkout."
    }
  },

  de: {
    nav: {
      services: "Dienstleistungen",
      requirements: "Voraussetzungen",
      howItWorks: "Prozess",
      contact: "Kontakt",
    },

    hero: {
      title: "Starte deine Ausbildung in Deutschland",
      description: `Viele internationale Bewerber scheitern nicht an mangelnder Motivation,
sondern an unklaren, unpassenden oder schlecht vorbereiteten Bewerbungen.`,
      disclaimer:
        "Keine Job- oder Visagarantien – sondern ehrliche, transparente und ",
      cta: "Wir bieten strukturierte Beratung, Unterstützung bei Bewerbungsunterlagen und begleitete Selbstbewerbung, damit Bewerber den Prozess verstehen und sich gezielt vorbereiten können.",
    },

    realChallenge: {
      subtle: "Herausforderung",
      title: "Die eigentliche Herausforderung bei der Ausbildungssuche",
      paragraphs: [
        "Bevor man mit dem Bewerbungsprozess für eine Ausbildung beginnt, ist es wichtig zu verstehen, dass der Erfolg maßgeblich von guter Vorbereitung und einer klaren Strategie abhängt.",

        "Ein professioneller Lebenslauf und ein überzeugendes Bewerbungsschreiben auf Deutsch sind grundlegende Voraussetzungen. Diese Unterlagen zeigen nicht nur Qualifikationen und Erfahrungen, sondern auch Motivation, Einsatzbereitschaft und Eignung für eine Ausbildung in Deutschland.",

        "Ebenso entscheidend ist es, die passende Ausbildung für das eigene Profil zu finden und den Bewerbungsprozess korrekt und eigenständig durchzuführen."
      ],
      note: "Unzureichende Vorbereitung ist eine der häufigsten Ursachen für Absagen."
    },

    services: {
      intro:
        "Dienstleistungsangebot",

      items: [
        {
          title: "Beratung & Orientierung",
          desc: `Individuelle Beratung zur Einordnung geeigneter Ausbildungsberufe,
Anforderungen und realistischer Karrierewege.`,
        },
        {
          title: "Lebenslauf & Dokumentenvorbereitung",
          desc: `Erstellung und Prüfung von Lebenslauf und Bewerbungsschreiben
nach deutschen Standards.`,
        },
        {
          title: "Interviewvorbereitung",
          desc: `Training zu typischen Fragen, Kommunikation und Auftreten
zur sicheren Vorbereitung auf Gespräche.`,
        },
        {
          title: "Begleitete Eigenbewerbung",
          desc: `Schritt-für-Schritt-Begleitung während des Bewerbungsprozesses.
Die Bewerbungen werden eigenständig eingereicht.`,
        },
        {
          title: "Integrations & Bildungsberatung",
          desc: "Allgemeine Orientierung zum Leben, zur Ausbildung und Bildung in Deutschland.",
        },
      ],
    },

    commonChallenges: {
      eyebrow: "Häufige Probleme",
      title: "Typische Herausforderungen im Bewerbungsprozess",
      items: [
        "Unklare oder schwache Bewerbungsunterlagen",
        "Bewerbung auf ungeeignete Ausbildungsberufe",
        "Unzureichendes Verständnis der Erwartungen deutscher Arbeitgeber",
        "Bewerbungen werden übersehen oder spät berücksichtigt"
      ],
      note: "Diese Herausforderungen sind weit verbreitet und kein Zeichen mangelnder Fähigkeiten, sie können jedoch die Chancen auf Einladung zu Vorstellungsgesprächen deutlich verringern."
    },

    whyChooseUs: {
      title: "Warum sich Bewerber für unsere Beratung entscheiden",
      points: [
        {
          title: "Praxisnahe Expertise in Deutschland",
          description:
            "Als in Deutschland ansässiger Beratungsdienst kennen wir den Ausbildungsprozess aus der Praxis und verstehen die Erwartungen der Arbeitgeber."
        },
        {
          title: "Arbeitgeberorientierte Bewerbungen",
          description:
            "Wir unterstützen Bewerber dabei, Unterlagen und Vorstellungsgespräche an den tatsächlichen Anforderungen deutscher Unternehmen auszurichten."
        },
        {
          title: "Strukturierter und transparenter Ablauf",
          description:
            "Klare Schritte, realistische Erwartungen und volle Transparenz während des gesamten Prozesses."
        },
        {
          title: "Eigenverantwortliche Bewerber",
          description:
            "Die Verantwortung für Bewerbungen und Entscheidungen bleibt beim Bewerber – wir begleiten strukturiert und unterstützend."
        }
      ]
    },



    howItWorks: {
      title: "So funktioniert es",
      steps: [
        "Erstberatung und Prüfung der Voraussetzungen",
        "Vorbereitung von Lebenslauf, Bewerbungsschreiben und Unterlagen",
        "Begleitete Eigenbewerbung per Video-Beratung",
        "Interview-Vorbereitung und Coaching",
        "Teilnahme an Vorstellungsgesprächen durch den Bewerber",
        "Endgültige Entscheidung durch das deutsche Unternehmen",
        "Visumantrag wird persönlich vom Bewerber gestellt",
      ],
      note:
        "Wir begleiten Bewerber während des gesamten Prozesses. Bewerbungen und Entscheidungen liegen in der Verantwortung der Bewerber und Arbeitgeber.",
    },

    requirements: {
      title: "Voraussetzungen für internationale Bewerber",
      items: [
        "Deutschkenntnisse auf Niveau B1 (empfohlen), B2 ist ein großer Vorteil",
        "Abgeschlossene Schulausbildung (10. oder 12. Klasse)",
        "Motivation, in Deutschland zu arbeiten und zu lernen",
        "Bereitschaft zur Vorbereitung von Unterlagen und Teilnahme an Interviews",
        "Ein professioneller Lebenslauf und ein Bewerbungsschreiben",
        "Fähigkeit zur selbstständigen Bewerbung mit Begleitung",
        "Visumantrag wird persönlich vom Bewerber gestellt",
      ],
      note:
        "Wir helfen bei der Vorbereitung aller notwendigen Unterlagen — die Einstellungsentscheidung trifft jedoch das deutsche Unternehmen.",
    },




    contact: {
      title: "Kontakt",
      intro:
        "Denken Sie über eine Ausbildung in Deutschland nach? Lassen Sie uns den ersten Schritt gemeinsam gehen mit klarer und realistischer Beratung.",
      cta: "Kontakt aufnehmen",
      getintouch: "Vereinbaren Sie ein erstes Beratungsgespräch, um Ihre Pläne und nächsten Schritte zu besprechen.",
    },




    about: {
      label: "Wer wir sind",
      title: "Über uns",
      paragraphs: [
        "Brightway2Deutschland wurde gegründet, um internationale Bewerber dabei zu unterstützen, die berufliche Ausbildung (Ausbildung) in Deutschland zu verstehen und sich darauf vorzubereiten.",
        "Viele Bewerber stehen vor Herausforderungen – nicht weil es keine Chancen gibt, sondern weil der Prozess komplex und ungewohnt ist. Unser Ziel ist es, klare Informationen, realistische Orientierung und strukturierte Vorbereitung zu bieten, damit Bewerber den Prozess selbstständig und sicher meistern können.",
        "Wir sind überzeugt, dass langfristiger Erfolg durch Vorbereitung, Transparenz und persönliche Verantwortung entsteht.",
      ],
    },

    faq: {
      title: "Häufige Fragen",
      showLess: "Weniger anzeigen",
      readMore: "Mehr anzeigen",
      items: [
        {
          question: "Garantiert ihr Jobs oder Visa?",
          answer:
            "Nein. Wir bieten Vorbereitung und Beratung an. Einstellungsentscheidungen treffen deutsche Unternehmen, und der Visumantrag wird vom Bewerber direkt bei der Botschaft gestellt.",
        },
        {
          question: "Können sich Bewerber aus dem Ausland bewerben?",
          answer:
            "Ja. Viele deutsche Unternehmen berücksichtigen motivierte internationale Bewerber, die die Voraussetzungen erfüllen.",
        },
        {
          question: "Bewerbt ihr euch im Namen der Bewerber bei Unternehmen?",
          answer:
            "Nein. Bewerber bewerben sich eigenständig mit begleitender Unterstützung.",
        },
        {
          question: "Erhebt ihr Vermittlungs- oder Platzierungsgebühren?",
          answer:
            "Nein. Wir bieten keine Vermittlungs- oder Rekrutierungsdienste an. Unsere Gebühren beziehen sich ausschließlich auf Beratung, Vorbereitung und Coaching.",
        },

        /* --- NEUE FRAGEN --- */

        {
          question: "Welches Sprachniveau wird für eine Ausbildung benötigt?",
          answer:
            "Für die meisten Ausbildungsberufe wird mindestens Deutsch auf Niveau B1 erwartet. Ein B2-Niveau erhöht die Chancen deutlich.",
        },
        {
          question: "Kann ich mich ohne Berufserfahrung bewerben?",
          answer:
            "Ja. Viele Ausbildungsberufe sind für Berufseinsteiger gedacht. Motivation, Sprachkenntnisse und gute Bewerbungsunterlagen sind entscheidend.",
        },
        {
          question: "Unterstützt ihr bei der Auswahl der passenden Ausbildung?",
          answer:
            "Ja. Wir helfen Bewerbern dabei, geeignete Ausbildungsberufe passend zum Profil, Bildungsstand und Sprachniveau zu finden.",
        },
        {
          question: "Wie lange dauert der Bewerbungsprozess?",
          answer:
            "Der Bewerbungsprozess kann mehrere Monate dauern. Vorbereitung, Bewerbungen, Vorstellungsgespräche und Visumverfahren benötigen ausreichend Zeit.",
        },
        {
          question: "Helft ihr bei Lebenslauf und Bewerbungsschreiben?",
          answer:
            "Ja. Wir unterstützen bei der Erstellung und Überarbeitung von Lebenslauf und Bewerbungsschreiben nach deutschen Standards.",
        },
        {
          question: "Ist eure Beratung für alle Nationalitäten geeignet?",
          answer:
            "Ja. Unsere Beratung richtet sich an Bewerber aller Nationalitäten, sofern die grundlegenden Voraussetzungen für Ausbildung und Visum erfüllt sind.",
        },
        {
          question: "Bereitet ihr auf Vorstellungsgespräche vor?",
          answer:
            "Ja. Wir bieten gezielte Interviewvorbereitung, typische Fragen und Kommunikationshinweise.",
        },
        {
          question: "Unterstützt ihr beim Visumantrag?",
          answer:
            "Wir geben allgemeine Orientierung und Vorbereitungshinweise. Der Visumantrag muss jedoch immer persönlich vom Bewerber gestellt werden.",
        },
      ],
    },
    scrollIndicator: {
      TOP: "NACH OBEN",
      hero: "START",
      "real-challenge": "HERAUSFORDERUNGEN",
      services: "DIENSTLEISTUNGEN",
      commonChallenges: "HERAUSFORDERUNGEN",
      whyChooseUs: "WARUM WIR",
      howItWorks: "PROZESS",
      requirements: "VORAUSSETZUNGEN",
      contact: "KONTAKT",
      ourStory: "ÜBER UNS",
      faq: "FAQ",
    },
    shop: {
      title: "Unsere Pakete",
      search: "Services suchen...",
      filterAll: "Alle Kategorien",
      addToCart: "In den Warenkorb",
      viewDetails: "Details",
      price: "Preis",
      cart: "Warenkorb",
      noProducts: "Keine Services gefunden.",
      emptyCart: "Ihr Warenkorb ist leer.",
      total: "Gesamt",
      checkout: "Zur Kasse",
      remove: "Entfernen",
      items: "Artikel",
      item: "Artikel",
      checkoutSuccess: "Vielen Dank! Dies ist eine Demo-Kasse."
    }
  },
} as const;
