export interface Product {
  id: string;
  price: number;
  category: 'Consultation' | 'Preparation' | 'Support' | 'Integration';
  image: string;
  name: { en: string; de: string };
  description: { en: string; de: string };
}

export const products: Product[] = [
  {
    id: '1',
    price: 49.00,
    category: 'Consultation',
    image: '/consultation-orientationn.png',
    name: { 
      en: 'Initial Consultation', 
      de: 'Erstberatung' 
    },
    description: { 
      en: 'A 45-minute deep dive into your goals and the German Ausbildung system.', 
      de: 'Ein 45-minütiges Gespräch über Ihre Ziele und das deutsche Ausbildungssystem.' 
    }
  },
  {
    id: '2',
    price: 89.00,
    category: 'Preparation',
    image: '/c.v-document-praparation.png',
    name: { 
      en: 'CV & Cover Letter Review', 
      de: 'Lebenslauf & Anschreiben Check' 
    },
    description: { 
      en: 'Professional review and optimization of your application documents according to German standards.', 
      de: 'Professionelle Prüfung und Optimierung Ihrer Bewerbungsunterlagen nach deutschen Standards.' 
    }
  },
  {
    id: '3',
    price: 129.00,
    category: 'Preparation',
    image: '/interview-preparationn.png',
    name: { 
      en: 'Interview Coaching', 
      de: 'Interview-Coaching' 
    },
    description: { 
      en: 'One-on-one session to prepare you for interviews with German employers.', 
      de: 'Einzelcoaching zur Vorbereitung auf Vorstellungsgespräche bei deutschen Arbeitgebern.' 
    }
  },
  {
    id: '4',
    price: 199.00,
    category: 'Support',
    image: '/guided-self-Application-support.png',
    name: { 
      en: 'Full Application Support', 
      de: 'Komplette Bewerbungsbegleitung' 
    },
    description: { 
      en: 'Step-by-step guidance through the entire application process for 3 months.', 
      de: 'Schritt-für-Schritt-Begleitung durch den gesamten Bewerbungsprozess für 3 Monate.' 
    }
  },
  {
    id: '5',
    price: 75.00,
    category: 'Integration',
    image: '/intergration-education-guidance.png',
    name: { 
      en: 'Integration Workshop', 
      de: 'Integrations-Workshop' 
    },
    description: { 
      en: 'Learn about life in Germany, administrative steps, and cultural nuances.', 
      de: 'Erfahren Sie mehr über das Leben in Deutschland, Behördengänge und kulturelle Unterschiede.' 
    }
  },
  {
    id: '6',
    price: 59.00,
    category: 'Consultation',
    image: '/hero-bg7.jpg',
    name: { 
      en: 'Visa Process Guidance', 
      de: 'Visum-Prozess Beratung' 
    },
    description: { 
      en: 'Personalized advice on the requirements and steps for your visa application.', 
      de: 'Individuelle Beratung zu den Voraussetzungen und Schritten für Ihren Visumantrag.' 
    }
  },
  {
    id: '7',
    price: 150.00,
    category: 'Support',
    image: '/requirements.png',
    name: { 
      en: 'Priority Support Package', 
      de: 'Priority Support Paket' 
    },
    description: { 
      en: 'Get faster responses and dedicated assistance for your urgent questions.', 
      de: 'Erhalten Sie schnellere Antworten und engagierte Unterstützung für Ihre dringenden Fragen.' 
    }
  },
  {
    id: '8',
    price: 99.00,
    category: 'Preparation',
    image: '/real-challenge.png',
    name: { 
      en: 'Self-Application Kit', 
      de: 'Selbstbewerber-Kit' 
    },
    description: { 
      en: 'Templates and guides to help you manage your applications effectively.', 
      de: 'Vorlagen und Leitfäden, die Ihnen helfen, Ihre Bewerbungen effektiv zu verwalten.' 
    }
  }
];
