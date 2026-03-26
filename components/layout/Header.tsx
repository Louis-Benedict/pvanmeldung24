function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-neutral-200/60 shadow-sm shadow-neutral-200/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1.5">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#2BB33A] flex items-center justify-center shadow-md shadow-[#2BB33A]/30">
            <IconBolt className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <span className="text-sm sm:text-lg font-bold tracking-tight text-neutral-900">
            Netzbetreiber 24
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+4945418856891"
            className="text-sm font-semibold text-neutral-700 underline underline-offset-2 hover:text-[#2BB33A] transition-colors"
          >
            +49 4541 8856891
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
