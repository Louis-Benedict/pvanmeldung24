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
      "Vorbereitung & Anmeldung: Formulare, Einpolige Schaltpläne, Komponentennachweise",
      "Fertigmeldung: E8-Protokolle, Inbetriebnahmedokumentation, Zählerumbauverlangen",
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
      "Marktstammdatenregister-Anmeldung",
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
    Icon: IconWrench,
    badge: "Sonstiges",
    serviceKey: "sonstige",
    title: "Sonstige Anlagen",
    price: "Auf Anfrage",
    hideUnit: true,
    description:
      "Netzanmeldung für weitere Anlagentypen – sprechen Sie uns einfach an.",
    items: [
      "Individuelle Beratung & Bearbeitung",
      "Vollständige Dokumentation",
      "Persönliche Begleitung bis zum Abschluss",
    ],
  },
  {
    Icon: IconHandshake,
    badge: "Partner",
    serviceKey: "partner",
    title: "Partner Werden",
    price: "Kostenlos",
    hideUnit: true,
    description:
      "Werde Partner und sichere dir einen Preisvorteil.",
    items: [
      "Exklusive Partnerkonditionen",
      "Bevorzugte Bearbeitung",
      "Persönlicher Ansprechpartner",
    ],
  },
  {
    Icon: IconMeter,
    badge: "Zähler",
    serviceKey: "zaehler",
    title: "Zählerantrag",
    price: "Auf Anfrage",
    hideUnit: true,
    description:
      "Ob Zählertausch, iMSys-Zähler oder Hausanschlusskasten, wir kümmern uns um alles.",
    items: [
      "Zählertausch & iMSys-Zähler",
      "Hausanschlusskasten",
      "Vollständige Abwicklung mit dem Netzbetreiber",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 text-slate-900">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-white/50 shadow-sm shadow-indigo-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-md shadow-indigo-300/40">
              <IconBolt className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              PV Anmeldung 24
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href="tel:+4945418856891"
              className="text-sm font-semibold text-slate-700 underline underline-offset-2 hover:text-indigo-600 transition-colors"
            >
              +49 4541 8856891
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 shadow-md shadow-indigo-300/40 transition-all hover:shadow-lg hover:shadow-indigo-300/50"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-500/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-white/10 text-indigo-200 border-white/20 backdrop-blur-sm">
                Professionelle Netzanmeldung
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Netzanmeldung{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                  leicht gemacht
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Wir übernehmen die komplette Netzanmeldung für Sie – von der
                Vorprüfung bis zur finalen Genehmigung. Persönlich, zuverlässig,
                ohne Aufwand für Sie.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 text-base shadow-lg shadow-indigo-900/50 transition-all hover:shadow-xl hover:shadow-indigo-900/60"
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
          </div>

          {/* Glass card floating at hero bottom */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {[
                { value: "Bis zu 3 Std.", label: "Zeitersparnis pro Projekt" },
                { value: "Persönliche Betreuung", label: "Für jeden Kunden" },
                { value: "Direkter Kontakt", label: "Zum Netzbetreiber" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center text-center py-2 sm:py-0 sm:px-8 first:pl-0 last:pr-0"
                >
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-indigo-300 text-sm mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features / Services ── */}
        <section id="leistungen" className="py-24 relative overflow-hidden">
          {/* Background blobs for glass effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-8 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-8 w-96 h-96 bg-blue-200/35 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-200/25 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-100/80 text-indigo-700 border-indigo-200/60 backdrop-blur-sm">
                Unsere Leistungen
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Alles aus einer Hand
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Von der PV-Anlage über die Wärmepumpe bis zur Wallbox – wir
                kümmern uns um jede Art der Netzanmeldung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-indigo-100/40 p-8 flex flex-col hover:bg-white/80 hover:shadow-indigo-200/50 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-200/50 flex items-center justify-center mb-4 backdrop-blur-sm">
                      <feature.Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <Badge className="mb-3 bg-indigo-50/80 text-indigo-600 border-indigo-200/60 text-xs">
                      {feature.badge}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-5">
                      {feature.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <IconCheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA pushed to bottom */}
                  <div className="mt-auto pt-5 border-t border-white/50">
                    <p className="text-3xl font-extrabold text-slate-900 mb-4">
                      {feature.price}
                      {!feature.hideUnit && (
                        <span className="text-sm font-normal text-slate-400 ml-1">/ Anmeldung</span>
                      )}
                    </p>
                    <a
                      href={`/contact?service=${feature.serviceKey}`}
                      className="flex items-center justify-center w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 text-sm shadow-md shadow-indigo-300/30 transition-all hover:shadow-lg hover:shadow-indigo-300/40"
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-indigo-300 border-white/20 backdrop-blur-sm">
                So geht&#39;s
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                In drei Schritten zur genehmigten Anlage
              </h2>
              <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
                Unser Prozess ist einfach, transparent und vollständig von uns betreut.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-3xl p-8 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-indigo-900/50">
                    <step.Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-indigo-400 tracking-widest mb-3 uppercase block">
                    Schritt {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-indigo-200 text-sm leading-relaxed">
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
            <div className="absolute top-10 right-16 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-16 w-80 h-80 bg-indigo-200/35 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-100/80 text-indigo-700 border-indigo-200/60 backdrop-blur-sm">
                Ihre Vorteile
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Warum PV Anmeldung 24?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Mehr Zeit für Ihr Kerngeschäft – weniger Aufwand für Bürokratie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="backdrop-blur-2xl bg-white/60 border border-white/55 rounded-3xl p-6 shadow-xl shadow-indigo-100/30 hover:bg-white/75 hover:shadow-indigo-200/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/15 to-blue-500/15 border border-indigo-200/40 flex items-center justify-center mb-4">
                    <benefit.Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
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
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700" />
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
            <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
              Nehmen Sie noch heute Kontakt auf – unser Team meldet sich innerhalb
              von 24 Stunden bei Ihnen und bespricht alle Details persönlich mit Ihnen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-10 py-4 text-base shadow-xl shadow-indigo-900/30 transition-all hover:shadow-2xl hover:shadow-indigo-900/40"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                  <IconBolt className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold text-white">PV Anmeldung 24</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
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
                      <a href="#leistungen" className="hover:text-indigo-400 transition-colors">
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
                    <a href={item.href} className="hover:text-indigo-400 transition-colors">
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
                    <a href={item.href} className="hover:text-indigo-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-800 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
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
