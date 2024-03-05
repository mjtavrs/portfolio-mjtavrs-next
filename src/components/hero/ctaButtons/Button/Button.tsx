import { ReactNode } from "react";
import Link from "next/link";

type Props = {
    buttonColor: string,
    buttonIcon: ReactNode,
    buttonLink: string,
    buttonTitle: string,
    buttonDesc: string
}

export default function Button({ buttonColor, buttonIcon, buttonLink, buttonTitle, buttonDesc }: Props) {
    return (
        <Link
            href={buttonLink}
            title={buttonDesc}
            className={`bg-${buttonColor} flex items-center gap-2 w-fit px-5 py-1 rounded-md`}
            target="_blank"
        >
            {buttonIcon}
            <h3 className="font-semibold uppercase">{buttonTitle}</h3>
        </Link>
    );
}