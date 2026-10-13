export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 px-4 py-8">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-emerald-400"
          />
          <p className="text-sm font-bold text-white">Eire Commute</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a
            href="https://www.luas.ie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            Official Luas
          </a>

          <a
            href="https://www.luas.ie/legal-notices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            Legal information
          </a>

          <a
            href="https://www.luas.ie/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 underline-offset-4 hover:text-emerald-400 hover:underline focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            Privacy
          </a>
        </div>

        <p className="mt-6 border-t border-slate-800 pt-5 text-xs leading-5 text-slate-500">
          Eire Commute is an independent project and is not affiliated with or
          endorsed by Luas, TFI or the NTA. Departure information is provided by
          an external service and may be delayed or inaccurate. Check official
          Luas updates before travelling.
        </p>

        <p className="mt-3 text-xs text-slate-600">
          Made in Dublin. © {new Date().getFullYear()} Eire Commute.
        </p>
      </div>
    </footer>
  );
}
