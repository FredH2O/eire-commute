import Logo from "@/public/luas-logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex justify-between p-5">
      <div className="flex gap-1 items-center">
        <Image src={Logo} alt="logo" width={60} />
        <p className="text-emerald-500 font-bold">Eire Commute</p>
      </div>

      <div className="">
        <ul className="flex gap-1 items-center">
          <li>
            <a href="">Luás</a>
          </li>
          <li>Bus</li>
          <li>Train</li>
        </ul>
      </div>
    </nav>
  );
}
