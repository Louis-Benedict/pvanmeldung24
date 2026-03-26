import { Separator } from "@/components/ui/separator";

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function DatenschutzPage() {
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
          <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. Allgemeine Hinweise</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO).
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">2. Verantwortlicher</h2>
              <p className="mb-3">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="space-y-1">
                <p className="font-semibold text-slate-900">Awatt Electronic GmbH</p>
                <p>Weberplatz 6</p>
                <p>23909 Ratzeburg</p>
                <p>Deutschland</p>
                <p className="mt-2">Vertreten durch den Geschäftsführer: Ahmad Awat Ahmad</p>
              </div>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-slate-900">Kontakt:</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:info@pv-anmeldung24.com" className="text-indigo-600 hover:underline">
                    info@pv-anmeldung24.com
                  </a>
                </p>
                <p>
                  Telefonnummer:{" "}
                  <a href="tel:+4945418856891" className="text-indigo-600 hover:underline">
                    +49 4541 8856891
                  </a>
                </p>
              </div>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-slate-900">Handelsregister:</p>
                <p>Eingetragen im Handelsregister des Amtsgericht Lübeck</p>
                <p>Handelsregisternummer: HRB 27167 HL</p>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-slate-900">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
                <p>DE449951011</p>
              </div>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="mb-2">
                Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen einer Anfrage oder Beauftragung mitteilen.
              </p>
              <p className="mb-2">Dies betrifft insbesondere:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Name</li>
                <li>Adresse</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Angaben zur Anlage (z. B. PV-Anlage, Wärmepumpe, Wallbox)</li>
              </ul>
              <p className="mb-2">Diese Daten werden verwendet zur:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Bearbeitung Ihrer Anfrage</li>
                <li>Durchführung der Anmeldung beim Netzbetreiber</li>
                <li>Kommunikation mit Behörden und Energieversorgern</li>
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">4. Zweck der Verarbeitung</h2>
              <p className="mb-2">Die Verarbeitung Ihrer Daten erfolgt zur:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Vertragsdurchführung</li>
                <li>Erfüllung gesetzlicher Pflichten</li>
                <li>Kommunikation mit Netzbetreibern und dem Marktstammdatenregister</li>
                <li>Angebotserstellung</li>
              </ul>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">5. Weitergabe von Daten</h2>
              <p className="mb-2">
                Ihre Daten werden nur weitergegeben, wenn dies zur Erfüllung des Auftrags erforderlich ist.
              </p>
              <p className="mb-2">Dies kann insbesondere erfolgen an:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Netzbetreiber</li>
                <li>Energieversorger</li>
                <li>Behörden</li>
                <li>Marktstammdatenregister</li>
              </ul>
              <p>Eine darüber hinausgehende Weitergabe erfolgt nicht.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">6. Speicherdauer</h2>
              <p>
                Ihre Daten werden nur so lange gespeichert, wie dies zur Erfüllung des Vertrags oder gesetzlicher Pflichten erforderlich ist.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">7. Ihre Rechte</h2>
              <p className="mb-2">Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p>Außerdem haben Sie das Recht, sich bei einer Datenschutzbehörde zu beschweren.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">8. Kontaktformular</h2>
              <p className="mb-2">
                Wenn Sie uns über ein Formular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
              </p>
              <p>
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter, sofern dies nicht zur Vertragserfüllung erforderlich ist.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">9. Server-Log-Dateien</h2>
              <p className="mb-2">
                Der Provider der Seiten erhebt automatisch Informationen in sogenannten Server-Log-Dateien.
              </p>
              <p className="mb-2">Dies sind:</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>IP-Adresse</li>
                <li>Browsertyp</li>
                <li>Betriebssystem</li>
                <li>Uhrzeit der Anfrage</li>
              </ul>
              <p>Diese Daten sind nicht bestimmten Personen zuordenbar.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">10. Hosting</h2>
              <p className="mb-2">Diese Website wird bei einem externen Dienstleister gehostet.</p>
              <p className="mb-2">Dabei werden personenbezogene Daten auf den Servern des Hosters verarbeitet.</p>
              <p>Ein Vertrag zur Auftragsverarbeitung wurde abgeschlossen.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">11. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="mb-2">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
              </p>
              <p>Dadurch werden übertragene Daten geschützt.</p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">12. E-Mail-Kommunikation</h2>
              <p className="mb-2">
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Daten zur Bearbeitung gespeichert.
              </p>
              <p>
                Bitte beachten Sie, dass die Datenübertragung per E-Mail Sicherheitslücken aufweisen kann.
              </p>
            </div>

            <Separator className="bg-slate-100" />

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-2">13. Widerspruch gegen Werbe-Mails</h2>
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von Werbung wird hiermit widersprochen.
              </p>
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
            <a href="/datenschutz" className="hover:text-indigo-400 transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-indigo-400 transition-colors">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
