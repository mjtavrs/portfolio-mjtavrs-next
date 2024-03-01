import Image from "next/image";
import Link from "next/link";

import Menu from "./menuHamburguer/menuHamburguer";

export default function Header() {
    return (
        <header className="flex items-center sm:justify-between sm:py-3 sm:px-6 bg-black text-md text-beige">
            <Image
                src={"/assets/svg/logo_white.svg"}
                alt="Logo oficial do portfólio de Marcos Tavares"
                width="120"
                height="0"
            />
            <nav className="sm:hidden">
                <ul className="flex gap-8">
                    <li><Link href="#">Habilidades</Link></li>
                    <li><Link href="#">Projetos</Link></li>
                    <li><Link href="#">Currículo</Link></li>
                </ul>
            </nav>
            <Menu />
            <Link
                href="#"
                className="sm:hidden md:inline py-2 px-4 bg-orange rounded-lg text-black uppercase font-bold"
            >
                Vamos conversar?
            </Link>
        </header>
    );
}