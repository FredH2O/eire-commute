"use client";

import { useState } from "react";
import Logo from "@/public/luas-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { name: "Luas", link: "/" },
  { name: "Train", link: "/train" },
  { name: "Bus", link: "/bus" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative mx-4 mt-4 border border-control-border bg-control-bg px-5 py-4">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image src={Logo} alt="Eire Commute logo" width={45} />
          <span className="text-foreground">Eire Commute</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden gap-5 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.link}>
              <span className="text-brand">/</span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded p-2 text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mt-4 flex flex-col gap-4 border-t border-control-border pt-4 md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-brand">/</span>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
