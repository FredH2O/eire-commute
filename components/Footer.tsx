const footerLinks = [
  { name: "Official Luas", href: "https://www.luas.ie/" },
  {
    name: "Legal information",
    href: "https://www.luas.ie/legal-notices",
  },
  {
    name: "Privacy",
    href: "https://www.luas.ie/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-control-border px-4 py-8">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-brand/80"
          />
          <p className="text-sm font-bold text-foreground">Eire Commute</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted underline-offset-4 hover:text-brand hover:underline focus-visible:outline-2 focus-visible:outline-focus"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="mt-6 border-t border-control-border pt-5 text-xs leading-5 text-text-muted">
          Eire Commute is an independent project and is not affiliated with or
          endorsed by Luas, TFI or the NTA. Departure information is provided by
          an external service and may be delayed or inaccurate. Check official
          Luas updates before travelling.
        </p>

        <p className="mt-3 text-xs text-text-muted">
          Personal Project by{" "}
          <a
            className="hover:text-brand transition-colors underline duration-150"
            href="https://github.com/FredH2O"
          >
            Fred
          </a>{" "}
          <span className="text-brand">/</span> © {new Date().getFullYear()}{" "}
          Eire Commute.
        </p>
      </div>
    </footer>
  );
}
