'use client'
import { Mr_Dafoe } from "next/font/google"
import Link from "next/link"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})

export default function Home() {
  return (
    <div className="bg-[url(/xv/imgs/principal-1.jpg)] bg-cover">
      <div className="text-white min-h-screen bg-purple-700 bg-opacity-35 place-content-center" onContextMenu={ (e) => e.preventDefault() }>
        {/* Name n' link to invitation center */}
        <div className="text-center">
          <p className={`${dafoe.className} text-8xl text-shadow-lg shadow-[#d29bfd] mb-8`}>Diana</p>
          <Link 
            href={'/inviting'}
            className="border-2 border-white rounded-full text-lg py-2 px-4 hover:border-purple-400 hover:text-purple-400 hover:shadow-[0px_0px_20px_3px_rgba(252,251,252,0.75) transition-all duration-200"
          >
            Abrir Invitacion
          </Link>
        </div>

        {/* Link to dashboard in bottom-left */}
          <Link href={'/dashboard'} className="absolute bottom-4 ml-4 text-lg hover:text-purple-400 transition-all duration-200">
            ¿Eres Diana? Da Click Aquí
          </Link>
      </div>
    </div>
  )
}
