import Link from "next/link";
import { ReactNode } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
    certificationLogo: ReactNode,
    certificationName: string,
    certificationDesc: string,
    certificationLink: string,
    certificationCode: string
}

export default function CertificationCard({ certificationLogo, certificationName, certificationDesc, certificationLink, certificationCode }: Props) {
    return (
        <div className="flex flex-col gap-4 items-center p-5 bg-light-beige border-2 border-black text-black rounded-md">
            <div className="flex flex-col items-center text-8xl text-center">
                {certificationLogo}
                <h3 className="font-semibold text-lg">{certificationName}</h3>
            </div>
            <div className="flex flex-col items-center gap-5">
                <p className="text-center">
                    {certificationDesc}
                </p>
                <div>
                    <div className="flex gap-2 font-semibold text-sm">
                        <p>Código da certificação:</p>
                        <Link
                            href={certificationLink}
                            title="Veja a credencial"
                            target="_blank"
                            className="flex gap-1 items-center"
                        >
                            {certificationCode}
                            <span className="text-xs">
                                <FaExternalLinkAlt />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}