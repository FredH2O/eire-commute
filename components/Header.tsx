"use client";

import Logo from "@/public/luas-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Navigation = {
  title: string;
  link: string;
};

const navigation: Navigation[] = [
  {
    title: "Luas",
    link: "/",
  },
  {
    title: "Bus",
    link: "/bus",
  },
  {
    title: "Train",
    link: "/train",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="mx-4 mt-4 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Eire Commute logo" width={45} />
        <span className="font-semibold text-white">Eire Commute</span>
      </Link>

      <ul className="flex items-center gap-5 text-sm">
        {navigation.map(({ title, link }) => {
          const isActive = pathname === link;

          return (
            <li key={title}>
              <Link
                href={link}
                className={`transition-colors ${
                  isActive
                    ? "text-emerald-500 transition-colors"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
