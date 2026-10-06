import Logo from "@/public/luas-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between border-b border-zinc-800 bg-black px-5 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Eire Commute logo" width={45} />
        <span className="font-bold text-emerald-500">Eire Commute</span>
      </Link>

      <ul className="flex items-center gap-5 text-sm">
        <li>
          <Link
            href="/"
            className="text-emerald-500 transition-colors hover:text-emerald-400"
          >
            Luas
          </Link>
        </li>

        <li>
          <Link
            href="/bus"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            Bus
          </Link>
        </li>

        <li>
          <Link
            href="/train"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            Train
          </Link>
        </li>
      </ul>
    </nav>
  );
}
