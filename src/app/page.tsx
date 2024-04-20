import { Mr_Dafoe } from "next/font/google"
import Link from "next/link"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})


export default function Home () {
  return (
    <div>
      <p className={`${dafoe.className} text-8xl text-shadow-lg shadow-[#d29bfd]`}>Nombre</p>
      <Link href={'/inviting'}>Abrir Invitacion</Link>
    </div>
  )
}
