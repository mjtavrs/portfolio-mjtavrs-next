import { ReactNode } from "react"
import ScrollHelper from "./ScrollHelper/ScrollHelper"

type Props = {
    sectionId: string,
    sectionTitle: string,
    children: ReactNode
}

export default function Section({ sectionId, sectionTitle, children }: Props) {
    return (
        <section id={sectionId}>
            <ScrollHelper id={sectionId} />
            <h2>{sectionTitle}</h2>
            {children}
        </section>
    );
}