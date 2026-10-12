"use client";

import Logo from "@/public/luas-logo.svg";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Luas", link: "/" },
  { name: "Train", link: "/train" },
  { name: "Bus", link: "/bus" },
];

export default function Header() {
  return (
    <nav className="mx-4 mt-4 flex items-center justify-between border border-zinc-800 bg-zinc-900/80 px-5 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Eire Commute logo" width={45} />
        <span className="font-semibold text-white">Eire Commute</span>
      </Link>

      <div className="flex gap-5">
        {navigation.map((item) => (
          <Link key={item.name} href={item.link}>
            <span className="text-green-500">/</span>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
