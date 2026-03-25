import { Separator } from "@/components/ui/separator";

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function ImpressumPage() {
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
          <a
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Zurück zur Startseite
          </a>
        </div>
      </header>

      <main className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="backdrop-blur-2xl bg-white/65 border border-white/60 rounded-3xl shadow-2xl shadow-indigo-100/40 p-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Impressum</h1>

          <p className="text-sm text-slate-500 mb-6">Angaben gemäß § 5 TMG</p>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <div>
              <p className="font-semibold text-slate-900">Awatt Electronic GmbH</p>
              <p>Weberplatz 6</p>
              <p>23909 Ratzeburg</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-1">Vertreten durch den Geschäftsführer:</p>
              <p>Ahmad Awat Ahmad</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900 mb-1">Kontakt:</p>
              <p>E-Mail: <a href="mailto:a.awat@awatt-electronic.com" className="text-indigo-600 hover:underline">a.awat@awatt-electronic.com</a></p>
              <p>Telefonnummer: <a href="tel:+4917684412063" className="text-indigo-600 hover:underline">+49 176 84412063</a></p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900 mb-1">Handelsregister:</p>
              <p>Eingetragen im Handelsregister des Amtsgericht Lübeck</p>
              <p>Handelsregisternummer: HRB 27167 HL</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <p className="font-semibold text-slate-900 mb-1">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
              <p>DE449951011</p>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 text-slate-400 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <span>© {new Date().getFullYear()} PV Anmeldung 24. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6 text-slate-400">
            <a href="/impressum" className="hover:text-indigo-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
