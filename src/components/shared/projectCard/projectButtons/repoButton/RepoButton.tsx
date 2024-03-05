import Link from "next/link";

import { FaGithub } from "react-icons/fa";

type Props = {
    isPrivate: boolean,
    repoTitle: string
}

export default function RepoButton({ isPrivate, repoTitle }: Props) {
    return (
        <div className="bg-light-gray">
            <Link
                href="#"
                title={isPrivate ? "Repositório privado" : `Repositório do(a) ${repoTitle}`}
                aria-disabled={isPrivate}
                className={isPrivate ? "pointer-events-none" : "bg-black text-beige"}
            >
                < FaGithub />
                Repositório
            </Link>
        </div>
    );
}