import Image from "next/image";
import Link from "next/link";

import logoWhite from "../../assets/svg/logo_white.svg";

export default function Header() {
    return (
        <header className="flex items-center sm:justify-between sm:py-3 sm:px-6 bg-black text-md text-beige">
            <Image
                src={logoWhite}
                alt="Logo oficial do portfólio de Marcos Tavares"
            />
            <nav>
                <ul className="flex gap-8">
                    <li><Link href="#">link</Link></li>
                    <li><Link href="#">link</Link></li>
                    <li><Link href="#">link</Link></li>
                </ul>
            </nav>
            <Link
                href="#"
                className="sm:hidden md:inline py-2 px-4 bg-orange rounded-lg text-black uppercase font-bold"
            >
                Vamos conversar?
            </Link>
        </header>
    );
}