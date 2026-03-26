export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-neutral-200/60 shadow-sm shadow-neutral-200/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/nb1.svg" alt="Netzbetreiber 24" className="h-6 sm:h-8 w-auto" />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+4945418856891"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 shadow-md shadow-neutral-900/20 transition-all hover:shadow-lg hover:shadow-neutral-900/30"
          >
            Anrufen
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 shadow-md shadow-neutral-900/20 transition-all hover:shadow-lg hover:shadow-neutral-900/30"
          >
            <span className="sm:hidden">Kontakt</span>
            <span className="hidden sm:inline">Kontakt aufnehmen</span>
          </a>
        </div>
      </div>
    </header>
  );
}
