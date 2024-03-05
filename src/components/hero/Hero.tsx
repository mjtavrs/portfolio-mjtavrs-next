import Button from "./ctaButtons/Button/Button";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-5">
            <h1 className="sm:text-xl">
                Olá, <br />meu nome é <em className="font-light">Marcos Tavares</em>, <br />e eu sou <em className="font-light">desenvolvedor web full stack</em>.
            </h1>
            <div className="flex gap-2">
                <div className="text-black">
                    <Button
                        buttonColor="orange"
                        buttonIcon={< FaLinkedin />}
                        buttonLink="https://www.linkedin.com/in/devmarcostavaress/"
                        buttonTitle="Meu Linkedin"
                        buttonDesc="Acesse meu perfil no Linkedin"
                    />
                </div>
                <div className="text-beige">
                    <Button
                        buttonColor="black"
                        buttonIcon={< FaGithub />}
                        buttonLink="https://github.com/mjtavrs"
                        buttonTitle="Meus Repositórios"
                        buttonDesc="Acesse meus repositórios no Github"
                    />
                </div>
            </div>
        </div>
    );
}