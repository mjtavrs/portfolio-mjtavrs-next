type Props = {
    id: string
}

export default function ScrollHelper({ id }: Props) {
    return (
        <div
            className="bg-beige border-0 h-[1px] m-0 overflow-hidden p-0 absolute top-[-192px] whitespace-nowrap w-0" id={id}
        />
    );
}