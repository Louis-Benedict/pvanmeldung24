import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconThermometer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function IconCar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconMessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconWrench({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconMeter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 6a6 6 0 0 1 6 6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v2M2 12h2M12 22v-2M22 12h-2" />
      <path d="M4.93 4.93l1.41 1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconAward({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// ── Energy Flow Diagram ────────────────────────────────────────────────────────

function EnergyFlowDiagram() {
  return (
    <>
      <style>{`
        @keyframes ef-appear {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ef-draw {
          from { stroke-dashoffset: 32; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ef-ring {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.6;  transform: scale(1.6); }
        }
        @keyframes ef-done {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ef-n1 { opacity:0; animation: ef-appear .5s ease forwards .2s; }
        .ef-n2 { opacity:0; animation: ef-appear .5s ease forwards .9s; }
        .ef-n3 { opacity:0; animation: ef-appear .5s ease forwards 1.6s; }
        .ef-n4 { opacity:0; animation: ef-appear .5s ease forwards 2.3s; }
        .ef-l1 { stroke-dasharray:32; stroke-dashoffset:32; animation: ef-draw .35s ease forwards .72s; }
        .ef-l2 { stroke-dasharray:32; stroke-dashoffset:32; animation: ef-draw .35s ease forwards 1.42s; }
        .ef-l3 { stroke-dasharray:32; stroke-dashoffset:32; animation: ef-draw .35s ease forwards 2.12s; }
        .ef-badge { opacity:0; animation: ef-done .6s ease forwards 2.8s; }
        .ef-r1 { animation: ef-ring 2.6s ease-in-out infinite  .2s; transform-origin: 208px 37px; }
        .ef-r2 { animation: ef-ring 2.6s ease-in-out infinite  .9s; transform-origin: 208px 125px; }
        .ef-r3 { animation: ef-ring 2.6s ease-in-out infinite 1.6s; transform-origin: 208px 213px; }
        .ef-r4 { animation: ef-ring 2.6s ease-in-out infinite 2.3s; transform-origin: 208px 301px; }
      `}</style>

      <div className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-3xl p-5 w-full max-w-xs mx-auto lg:mx-0">
        <svg viewBox="0 0 220 375" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ef-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── Node 1 – PV-Anlage ── */}
          <g className="ef-n1">
            <rect x="4" y="8" width="212" height="58" rx="12" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" />
            <circle cx="34" cy="37" r="17" fill="#2BB33A" fillOpacity="0.18" />
            {/* sun */}
            <circle cx="34" cy="37" r="5.5" stroke="#2BB33A" strokeWidth="1.6" />
            <line x1="34" y1="24" x2="34" y2="22" stroke="#2BB33A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="34" y1="50" x2="34" y2="52" stroke="#2BB33A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="21" y1="37" x2="19" y2="37" stroke="#2BB33A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="47" y1="37" x2="49" y2="37" stroke="#2BB33A" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="25.5" y1="28.5" x2="24.1" y2="27.1" stroke="#2BB33A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="42.5" y1="45.5" x2="43.9" y2="46.9" stroke="#2BB33A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="42.5" y1="28.5" x2="43.9" y2="27.1" stroke="#2BB33A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="25.5" y1="45.5" x2="24.1" y2="46.9" stroke="#2BB33A" strokeWidth="1.4" strokeLinecap="round" />
            <text x="62" y="31" fill="white" fontSize="10.5" fontWeight="600">PV-Anlage</text>
            <text x="62" y="47" fill="white" fillOpacity="0.4" fontSize="9">Photovoltaik-System</text>
            <circle cx="208" cy="37" r="6" fill="#2BB33A" fillOpacity="0.2" className="ef-r1" />
            <circle cx="208" cy="37" r="3" fill="#2BB33A" />
          </g>

          {/* ── Line 1 ── */}
          <line className="ef-l1" x1="110" y1="66" x2="110" y2="96" stroke="#2BB33A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#2BB33A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="0.72s" path="M 110 66 L 110 96" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="0.72s" />
          </circle>

          {/* ── Node 2 – Wärmepumpe ── */}
          <g className="ef-n2">
            <rect x="4" y="96" width="212" height="58" rx="12" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" />
            <circle cx="34" cy="125" r="17" fill="#2BB33A" fillOpacity="0.18" />
            {/* thermometer */}
            <rect x="31.5" y="113" width="5" height="13" rx="2.5" fill="none" stroke="#2BB33A" strokeWidth="1.5" />
            <rect x="32.5" y="120" width="3" height="6" rx="1.5" fill="#2BB33A" fillOpacity="0.6" />
            <circle cx="34" cy="130" r="5" fill="#2BB33A" fillOpacity="0.3" stroke="#2BB33A" strokeWidth="1.5" />
            <circle cx="34" cy="130" r="2" fill="#2BB33A" />
            <text x="62" y="119" fill="white" fontSize="10.5" fontWeight="600">Wärmepumpe</text>
            <text x="62" y="135" fill="white" fillOpacity="0.4" fontSize="9">Heizung &amp; Warmwasser</text>
            <circle cx="208" cy="125" r="6" fill="#2BB33A" fillOpacity="0.2" className="ef-r2" />
            <circle cx="208" cy="125" r="3" fill="#2BB33A" />
          </g>

          {/* ── Line 2 ── */}
          <line className="ef-l2" x1="110" y1="154" x2="110" y2="184" stroke="#2BB33A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#2BB33A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="1.42s" path="M 110 154 L 110 184" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="1.42s" />
          </circle>

          {/* ── Node 3 – Wallbox ── */}
          <g className="ef-n3">
            <rect x="4" y="184" width="212" height="58" rx="12" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" />
            <circle cx="34" cy="213" r="17" fill="#2BB33A" fillOpacity="0.18" />
            {/* EV charging station */}
            <rect x="26" y="201" width="16" height="21" rx="2" fill="none" stroke="#2BB33A" strokeWidth="1.5" />
            <path d="M35 205 L31 212 L33.5 212 L33 218 L37.5 210 L35 210 Z" stroke="#2BB33A" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <line x1="26" y1="222" x2="42" y2="222" stroke="#2BB33A" strokeWidth="1.5" strokeLinecap="round" />
            <text x="62" y="207" fill="white" fontSize="10.5" fontWeight="600">Wallbox</text>
            <text x="62" y="223" fill="white" fillOpacity="0.4" fontSize="9">E-Mobilität &amp; Laden</text>
            <circle cx="208" cy="213" r="6" fill="#2BB33A" fillOpacity="0.2" className="ef-r3" />
            <circle cx="208" cy="213" r="3" fill="#2BB33A" />
          </g>

          {/* ── Line 3 ── */}
          <line className="ef-l3" x1="110" y1="242" x2="110" y2="272" stroke="#2BB33A" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          <circle r="3.5" fill="#2BB33A" filter="url(#ef-glow)">
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="2.12s" path="M 110 242 L 110 272" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="1.1s" repeatCount="indefinite" begin="2.12s" />
          </circle>

          {/* ── Node 4 – Zählerwechsel ── */}
          <g className="ef-n4">
            <rect x="4" y="272" width="212" height="58" rx="12" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" />
            <circle cx="34" cy="301" r="17" fill="#2BB33A" fillOpacity="0.18" />
            {/* meter with swap arrows */}
            <path d="M22 306 a12 12 0 0 1 24 0" stroke="#2BB33A" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="34" cy="306" r="2.5" fill="#2BB33A" />
            <line x1="34" y1="303.5" x2="28" y2="297" stroke="#2BB33A" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M23 294 L26 290 L26 292.5" stroke="#2BB33A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M45 294 L42 290 L42 292.5" stroke="#2BB33A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="62" y="295" fill="white" fontSize="10.5" fontWeight="600">Zählerwechsel</text>
            <text x="62" y="311" fill="white" fillOpacity="0.4" fontSize="9">Zählerinstallation</text>
            <circle cx="208" cy="301" r="6" fill="#2BB33A" fillOpacity="0.2" className="ef-r4" />
            <circle cx="208" cy="301" r="3" fill="#2BB33A" />
          </g>

          {/* ── Status badge ── */}
          <g className="ef-badge">
            <rect x="14" y="346" width="192" height="24" rx="12" fill="#2BB33A" fillOpacity="0.18" stroke="#2BB33A" strokeOpacity="0.45" strokeWidth="1" />
            <polyline points="36,358 43,365 56,350" stroke="#2BB33A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="64" y="362" fill="#2BB33A" fontSize="10" fontWeight="600">Wir melden alles an</text>
          </g>
        </svg>
      </div>
    </>
  );
}

// ── Static data ────────────────────────────────────────────────────────────────

const features = [
  {
    Icon: IconBolt,
    badge: "Solar",
    serviceKey: "pv",
    title: "PV-Netzanmeldung",
    price: "349 €",
    description:
      "Vollständige Abwicklung Ihrer Photovoltaik-Anmeldung beim Netzbetreiber.",
    items: [
      "Netzverträglichkeitsprüfung",
      "Anmeldung der Erzeugungsanlage",
      "Anmeldung der Speichereinheit (falls vorhanden)",
      "Anmeldung der Gesamtanlage beim Netzbetreiber",
      "Anmeldung nach §14a EnWG (steuerbare Verbraucher, falls relevant)",
      "Registrierung im Marktstammdatenregister",
      "Marktstammdatenregister-Anmeldung",
    ],
  },
  {
    Icon: IconThermometer,
    badge: "Heizung",
    serviceKey: "wp",
    title: "Wärmepumpen-Anmeldung",
    price: "349 €",
    description:
      "Reibungslose Registrierung Ihrer Wärmepumpe – schnell und rechtssicher.",
    items: [
      "Formularvervollständigung beim Netzbetreiber",
      "Dokumentation Zählermontage/-demontage",
    ],
  },
  {
    Icon: IconCar,
    badge: "E-Mobilität",
    serviceKey: "wallbox",
    title: "Wallbox-Anmeldung",
    price: "249 €",
    description:
      "Professionelle Anmeldung Ihrer Ladeinfrastruktur beim zuständigen Netzbetreiber.",
    items: [
      "Anmeldung beim zuständigen Netzbetreiber",
      "Vollständige Dokumentation & Kommunikation",
      "Persönliche Begleitung bis zum Abschluss",
    ],
  },
  {
    Icon: IconMeter,
    badge: "Zähler",
    serviceKey: "zaehler",
    title: "Zählertausch",
    price: "249 €",
    hideUnit: true,
    description:
      "",
    items: [
      "Zählertausch & iMSys-Zähler",
      "Vollständige Abwicklung mit dem Netzbetreiber",
    ],
  },
  {
    Icon: IconHandshake,
    badge: "Partner",
    serviceKey: "partner",
    title: "Partner Werden",
    price: "",
    hideUnit: true,
    description:
      "Werde Partner und sichere dir einen Preisvorteil.",
    items: [
      "Exklusive Partnerkonditionen",
      "Kundenkonto für Partnerportal",
      "Persönlicher Ansprechpartner",
    ],
  },
  {
    Icon: IconWrench,
    badge: "Sonstiges",
    serviceKey: "sonstige",
    title: "Sonstige Anlagen",
    price: "Preis auf Anfrage",
    hideUnit: true,
    description:
      "Netzanmeldung für weitere Anlagentypen – sprechen Sie uns einfach an.",
    items: [
      "Individuelle Beratung & Bearbeitung",
      "Vollständige Dokumentation",
      "Persönliche Begleitung bis zum Abschluss",
    ],
  },
];

const steps = [
  {
    number: "01",
    Icon: IconMail,
    title: "Kontakt aufnehmen",
    description:
      "Schildern Sie uns Ihr Projekt per Telefon, E-Mail oder über unser Kontaktformular – unkompliziert und ohne Verpflichtung.",
  },
  {
    number: "02",
    Icon: IconCheckCircle,
    title: "Wir übernehmen alles",
    description:
      "Unser erfahrenes Team erledigt alle Formulare, Nachweise und kommuniziert direkt mit dem Netzbetreiber.",
  },
  {
    number: "03",
    Icon: IconAward,
    title: "Genehmigung & Abschluss",
    description:
      "Sie erhalten die vollständige Dokumentation und Bestätigung Ihrer genehmigten Netzanmeldung.",
  },
];

const benefits = [
  {
    Icon: IconClock,
    title: "Zeitersparnis",
    description:
      "Bis zu 3 Stunden Zeitersparnis pro Projekt. Konzentrieren Sie sich auf Ihr Kerngeschäft.",
  },
  {
    Icon: IconShield,
    title: "Fehlervermeidung",
    description:
      "Unsere Experten kennen alle Anforderungen der Netzbetreiber und vermeiden teure Fehler.",
  },
  {
    Icon: IconMessageCircle,
    title: "Direktkommunikation",
    description:
      "Direkter Kontakt zum Netzbetreiber – keine Missverständnisse, kürzere Bearbeitungszeiten.",
  },
  {
    Icon: IconStar,
    title: "Persönlicher Service",
    description:
      "Ein fester Ansprechpartner begleitet Sie vom ersten Kontakt bis zur abgeschlossenen Anmeldung.",
  },
];

// ── Page component ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100/40 to-neutral-50 text-neutral-900">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-neutral-200/60 shadow-sm shadow-neutral-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2BB33A] flex items-center justify-center shadow-md shadow-[#2BB33A]/30">
              <IconBolt className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-neutral-900">
              PV Anmeldung 24
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href="tel:+4945418856891"
              className="text-sm font-semibold text-neutral-700 underline underline-offset-2 hover:text-[#2BB33A] transition-colors"
            >
              +49 4541 8856891
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#2BB33A] hover:bg-[#249930] text-white text-sm font-semibold px-4 py-2 shadow-md shadow-[#2BB33A]/30 transition-all hover:shadow-lg hover:shadow-[#2BB33A]/40"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2BB33A]/12 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2BB33A]/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neutral-700/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-white/10 text-neutral-300 border-white/20 backdrop-blur-sm">
                  Professionelle Netzanmeldung
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                  Netzanmeldung{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BB33A] to-[#6ddc79]">
                    leicht gemacht
                  </span>
                </h1>
                <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
                  Wir übernehmen die komplette Netzanmeldung für Sie – von der
                  Vorprüfung bis zur finalen Genehmigung. Persönlich, zuverlässig,
                  ohne Aufwand für Sie.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#2BB33A] hover:bg-[#249930] text-white font-semibold px-8 py-3 text-base shadow-lg shadow-black/30 transition-all hover:shadow-xl hover:shadow-black/40"
                  >
                    Kontakt aufnehmen
                  </a>
                  <a
                    href="#leistungen"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-8 py-3 text-base backdrop-blur-sm transition-all"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <EnergyFlowDiagram />
              </div>
            </div>
          </div>

          {/* Glass card floating at hero bottom */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {[
                { value: "Bis zu 3 Std.", label: "Zeitersparnis pro Projekt" },
                { value: "Persönliche Betreuung", label: "Für jeden Kunden" },
                { value: "Direkter Kontakt", label: "Zu Ihren Projekten" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center text-center py-2 sm:py-0 sm:px-8 first:pl-0 last:pr-0"
                >
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-neutral-400 text-sm mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features / Services ── */}
        <section id="leistungen" className="py-24 relative overflow-hidden">
          {/* Background blobs for glass effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-neutral-300/30 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-neutral-200/40 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#2BB33A]/6 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#2BB33A]/10 text-[#1e7a27] border-[#2BB33A]/30 backdrop-blur-sm">
                Unsere Leistungen
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Alles aus einer Hand
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Von der PV-Anlage über die Wärmepumpe bis zur Wallbox – wir
                kümmern uns um jede Art der Netzanmeldung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-neutral-300/30 p-8 flex flex-col hover:bg-white/80 hover:shadow-neutral-300/50 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2BB33A]/12 border border-[#2BB33A]/25 flex items-center justify-center mb-4">
                      <feature.Icon className="w-6 h-6 text-[#2BB33A]" />
                    </div>
                    <Badge className="mb-3 bg-neutral-100/80 text-neutral-600 border-neutral-200/60 text-xs">
                      {feature.badge}
                    </Badge>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-5">
                      {feature.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <IconCheckCircle className="w-4 h-4 text-[#2BB33A] mt-0.5 shrink-0" />
                          <span className="text-sm text-neutral-600 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA pushed to bottom */}
                  <div className="mt-auto pt-5 border-t border-neutral-100/80">
                    <p className="text-3xl font-extrabold text-neutral-900 mb-4">
                      {feature.price}
                      {!feature.hideUnit && (
                        <span className="text-sm font-normal text-neutral-400 ml-1">/ Anmeldung</span>
                      )}
                    </p>
                    <a
                      href={`/contact?service=${feature.serviceKey}`}
                      className="flex items-center justify-center w-full rounded-xl bg-[#2BB33A] hover:bg-[#249930] text-white font-semibold py-3 text-sm shadow-md shadow-[#2BB33A]/20 transition-all hover:shadow-lg hover:shadow-[#2BB33A]/30"
                    >
                      Kontakt aufnehmen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="funktionsweise" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2BB33A]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#2BB33A]/7 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-neutral-300 border-white/20 backdrop-blur-sm">
                So geht&#39;s
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                In drei Schritten zur genehmigten Anlage
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Unser Prozess ist einfach, transparent und vollständig von uns betreut.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-3xl p-8 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#2BB33A] flex items-center justify-center mb-6 mx-auto shadow-lg shadow-black/40">
                    <step.Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#2BB33A] tracking-widest mb-3 uppercase block">
                    Schritt {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-16 w-72 h-72 bg-neutral-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-16 w-80 h-80 bg-neutral-300/30 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#2BB33A]/10 text-[#1e7a27] border-[#2BB33A]/30 backdrop-blur-sm">
                Ihre Vorteile
              </Badge>
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">Warum PV Anmeldung 24?</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Mehr Zeit für Ihr Kerngeschäft – weniger Aufwand für Bürokratie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="backdrop-blur-2xl bg-white/60 border border-white/55 rounded-3xl p-6 shadow-xl shadow-neutral-200/40 hover:bg-white/75 hover:shadow-neutral-300/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2BB33A]/12 border border-[#2BB33A]/25 flex items-center justify-center mb-4">
                    <benefit.Icon className="w-5 h-5 text-[#2BB33A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e7a27] via-[#2BB33A] to-[#1e7a27]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-white/15 text-white border-white/25 backdrop-blur-sm">
              Jetzt starten
            </Badge>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Bereit loszulegen?
            </h2>
            <p className="text-neutral-100 text-lg mb-10 leading-relaxed">
              Nehmen Sie noch heute Kontakt auf – unser Team meldet sich innerhalb
              von 24 Stunden bei Ihnen und bespricht alle Details persönlich mit Ihnen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-[#1e7a27] hover:bg-neutral-50 font-bold px-10 py-4 text-base shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-black/30"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-neutral-950 text-neutral-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#2BB33A] flex items-center justify-center">
                  <IconBolt className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold text-white">PV Anmeldung 24</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-500">
                Ihr professioneller Partner für alle Arten der Netzanmeldung in
                Deutschland.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Leistungen</h4>
              <ul className="space-y-2.5 text-sm">
                {["PV-Netzanmeldung", "Wärmepumpen-Anmeldung", "Wallbox-Anmeldung"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#leistungen" className="hover:text-[#2BB33A] transition-colors">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Kontakt</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Anfrage stellen", href: "/contact" },
                  { label: "So geht's", href: "#funktionsweise" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#2BB33A] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Datenschutz", href: "#" },
                  { label: "Impressum", href: "/impressum" },
                  { label: "AGB", href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#2BB33A] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-neutral-800 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
            <p>
              &copy; {new Date().getFullYear()} PV Anmeldung 24. Alle Rechte vorbehalten.
            </p>
            <p>Made with &#9825; in Deutschland</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
