"use client";

import Logo from "@/public/luas-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="mx-4 mt-4 flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Eire Commute logo" width={45} />
        <span className="font-semibold text-white">Eire Commute</span>
      </Link>
    </nav>
  );
}
