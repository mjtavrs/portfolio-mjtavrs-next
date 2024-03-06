import Link from "next/link";

import { FaGithub } from "react-icons/fa";

type Props = {
    isPrivate: boolean,
    repoTitle: string
}

export default function RepoButton({ isPrivate, repoTitle }: Props) {
    return (
        <div className="bg-light-gray max-w-[48%] rounded-md">
            <Link
                href="#"
                title={isPrivate ? "Repositório privado" : `Repositório do(a) ${repoTitle}`}
                aria-disabled={isPrivate}
                className={isPrivate ?
                    "p-2 w-fit flex gap-2 items-center font-medium text-beige pointer-events-none" :
                    "p-2 w-fit flex gap-2 items-center font-medium text-beige"
                }
            >
                < FaGithub />
                Repositório
            </Link>
        </div>
    );
}