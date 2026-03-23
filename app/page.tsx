import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ── Icons (inline SVGs – no extra dependencies) ───────────────────────────────

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

function IconActivity({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconUpload({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
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

function IconBarChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const features = [
  {
    Icon: IconBolt,
    badge: "Solar",
    title: "PV-Netzanmeldung",
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
    title: "Wärmepumpen-Anmeldung",
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
    title: "Wallbox-Anmeldung",
    description:
      "Professionelle Anmeldung Ihrer Ladeinfrastruktur beim zuständigen Netzbetreiber.",
    items: [
      "Anmeldung beim zuständigen Netzbetreiber",
      "Dokumentation und Statusverfolgung",
      "Digitale Abwicklung",
    ],
  },
];

const steps = [
  {
    number: "01",
    Icon: IconUpload,
    title: "Daten hochladen",
    description:
      "Laden Sie alle relevanten Dokumente und Projektdaten einfach in unsere Plattform hoch.",
  },
  {
    number: "02",
    Icon: IconCheckCircle,
    title: "Wir übernehmen die Anmeldung",
    description:
      "Unser Team kommuniziert direkt mit dem Netzbetreiber und erledigt alle Formalitäten für Sie.",
  },
  {
    number: "03",
    Icon: IconBarChart,
    title: "Status in Echtzeit verfolgen",
    description:
      "Behalten Sie jederzeit den Überblick über den aktuellen Stand Ihrer Netzanmeldung.",
  },
];

const benefits = [
  {
    Icon: IconClock,
    title: "Zeitersparnis",
    description:
      "Bis zu 12 Stunden Zeitersparnis pro Projekt. Konzentrieren Sie sich auf Ihr Kerngeschäft.",
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
    Icon: IconActivity,
    title: "Statusverfolgung",
    description:
      "Transparente Echtzeit-Updates über jeden Schritt des Anmeldeprozesses.",
  },
];

const navLinks = ["Produkte", "Lösungen", "Ressourcen", "Über uns"];

// ── Page component ────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
              <IconBolt className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              awatt
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:block text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Login
            </a>
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4"
            >
              Demo buchen
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30">
                Netzanmeldung – neu gedacht
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Netzanmeldung{" "}
                <span className="text-indigo-400">leicht gemacht</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Wir übernehmen die komplette Netzanmeldung für Sie – von der
                Vorprüfung bis zur finalen Anmeldung beim Netzbetreiber.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-indigo-900/40"
                >
                  Demo buchen
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-white/10 hover:border-slate-400 font-semibold px-8 py-3 rounded-xl bg-transparent"
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-indigo-500">
              {[
                { value: "Bis zu 12 Stunden", label: "Zeitersparnis pro Projekt" },
                { value: "100% digital", label: "Vollständig digitale Abwicklung" },
                { value: "Direkter Kontakt", label: "Zum Netzbetreiber" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center text-center py-2 sm:py-0 sm:px-8 first:pl-0 last:pr-0"
                >
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-indigo-200 text-sm mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="produkte" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
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
                <Card
                  key={feature.title}
                  className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden bg-white"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                      <feature.Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <Badge className="w-fit mb-2 bg-indigo-50 text-indigo-600 border-indigo-200 text-xs">
                      {feature.badge}
                    </Badge>
                    <CardTitle className="text-xl text-slate-900">
                      {feature.title}
                    </CardTitle>
                    <p className="text-slate-500 text-sm mt-1">
                      {feature.description}
                    </p>
                  </CardHeader>
                  <Separator className="mx-6 w-auto" />
                  <CardContent className="pt-5">
                    <ul className="space-y-3">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <IconCheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="loesungen" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                So funktioniert&#39;s
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                In drei Schritten zur genehmigten Anlage
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Unser Prozess ist einfach, transparent und vollständig digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                    <step.Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-indigo-400 tracking-widest mb-2 uppercase">
                    Schritt {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-24 bg-gradient-to-br from-indigo-950 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Ihre Vorteile
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Warum awatt?</h2>
              <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
                Mehr Zeit für Ihr Kerngeschäft – weniger Aufwand für Bürokratie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                    <benefit.Icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-indigo-200 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-12 shadow-2xl shadow-indigo-200">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Jetzt starten
              </Badge>
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Bereit loszulegen?
              </h2>
              <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
                Vereinbaren Sie noch heute eine persönliche Demo und erfahren
                Sie, wie awatt Ihre Netzanmeldung revolutioniert.
              </p>
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-10 rounded-xl text-base shadow-lg"
              >
                Demo buchen
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
                  <IconBolt className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">awatt</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Die digitale Plattform für professionelle Netzanmeldungen in
                Deutschland.
              </p>
            </div>

            {/* Product links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Produkte</h4>
              <ul className="space-y-2.5 text-sm">
                {["PV-Netzanmeldung", "Wärmepumpen-Anmeldung", "Wallbox-Anmeldung"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-indigo-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Unternehmen</h4>
              <ul className="space-y-2.5 text-sm">
                {["Über uns", "Karriere", "Blog", "Kontakt"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2.5 text-sm">
                {["Datenschutz", "Impressum", "AGB", "Cookie-Richtlinie"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-indigo-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-800 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>
              &copy; {new Date().getFullYear()} awatt GmbH. Alle Rechte vorbehalten.
            </p>
            <p>Made with &#9825; in Deutschland</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
