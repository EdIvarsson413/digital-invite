import { Mr_Dafoe } from "next/font/google"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})

interface Props {
    title: string
}

export default function Title({ title }: Props) {
    return (
        <p className={`${dafoe.className} text-6xl text-shadow shadow-black mt-32 text-center`}>{title}</p>
    )
}