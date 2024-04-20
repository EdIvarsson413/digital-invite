'use client'

import { Mr_Dafoe } from "next/font/google"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})


export default function Home () {
  return (
    <div>
      <p className="text-shadow-lg shadow-stone-500 text-2xl">Font</p>
      <p className={`${dafoe.className} text-4xl`}>Dafoe</p>
    </div>
  )
}
