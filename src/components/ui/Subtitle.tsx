import { Mr_Dafoe } from "next/font/google"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})

interface Props {
    title: string
}

export default function Subitle({ title, ...props }: Props) {
    return (
        <p className={`${dafoe.className} text-5xl text-shadow shadow-black text-center`}>{title}</p>
    )
}