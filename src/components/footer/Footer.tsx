import Image from "next/image";
import Link from "next/link";

import { FaMedium, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiGitlabLogoLight } from "react-icons/pi";

export default function Footer() {
    return (
        <div className="flex flex-col items-center p-5 bg-black">
            <Image
                src="/assets/svg/logo_white.svg"
                alt="Logo oficial do portfólio de Marcos Tavares"
                width="180"
                height="0"
            />
            <div className="flex flex-col gap-4 items-center">
                <nav className="flex gap-4 text-beige mt-[-20px]">
                    <Link
                        href="https://www.linkedin.com/in/devmarcostavaress/"
                        title="Visite meu perfil no Linkedin"
                        target="_blank"
                        className="text-2xl"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://github.com/mjtavrs"
                        title="Visite meu repositório no Github"
                        target="_blank"
                        className="text-2xl"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="#"
                        title="Visite meu repositório no Gitlab"
                        target="_blank"
                        className="text-2xl"
                    >
                        <PiGitlabLogoLight />
                    </Link>
                    <Link
                        href="https://medium.com/@dev.marcostavares"
                        title="Visite perfil no Medium"
                        target="_blank"
                        className="text-2xl"
                    >
                        <FaMedium />
                    </Link>
                </nav>
                <p className="text-sm font-light text-beige text-center">
                    Todos os direitos reservados a Marcos Tavares &#169; 2024
                </p>
            </div>
        </div>
    );
}