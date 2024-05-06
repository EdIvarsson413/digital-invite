'use client'
import Image from "next/image"
import Link from "next/link"

export default function Maps( { dafoe }: any ) {
    return (
        <div className={`${dafoe.className}`} onContextMenu={ (e) => e.preventDefault() }>
            {/* First map */}
            <p className="text-shadow shadow-black text-center text-6xl mt-[6rem]">Ceremonia</p>
            <p className="text-center text-3xl mt-2 text-shadow-sm shadow-purple-500">6:00 pm</p>
            <p className="text-center text-3xl mt-2 text-shadow-sm shadow-purple-500">Iglesia Sagrado Corazón de Jésus</p>
            <p className="text-center text-3xl mt-2 text-shadow-sm shadow-purple-500">Entre calles Madero y Matamoros #400</p>
            <div className="w-10/12 mx-auto mt-8 shadow-md shadow-black hover:shadow-purple-900 hover:shadow-lg hover:scale-110 transition-all duration-200">
                <Link href="https://www.google.com/maps/place/Parroquia+del+Sagrado+Coraz%C3%B3n/@25.5753882,-103.5021557,17.33z/data=!4m6!3m5!1s0x868fd83b995d8295:0xd9a4bf3f72cfe5a7!8m2!3d25.5763156!4d-103.5006744!16s%2Fg%2F1wz5345d?entry=ttu">
                    <Image
                            src="/xv/imgs/maps/iglesia.png"
                            alt="Ubicacion Iglesia"
                            width={1000}
                            height={1000}
                            className="rounded-md w-full"
                        />
                </Link>
            </div>

            {/* Second map */}
            <p className="text-shadow shadow-black text-center text-6xl mt-16">Recepción</p>
            <p className="text-center text-3xl mt-3 text-shadow-sm shadow-purple-500">9:00 pm</p>
            <p className="text-center text-3xl mt-3 text-shadow-sm shadow-purple-500">Salon OneDay</p>
            <p className="text-center text-3xl mt-3 text-shadow-sm shadow-purple-500">Av. Mina 1113, Zona Centro, 35000 Gómez Palacio, Dgo</p>
            <div className="w-10/12 mx-auto mt-8 shadow-md shadow-black hover:shadow-purple-900 hover:shadow-lg hover:scale-110 transition-all duration-200">
                <Link href="https://www.google.com/maps/place/OneDay+Sal%C3%B3n+de+Eventos/@25.5742302,-103.5069134,17z/data=!3m1!4b1!4m6!3m5!1s0x868fd849bf9e00ef:0x4c6ed7f9eed66fba!8m2!3d25.5742264!4d-103.5048697!16s%2Fg%2F11g00cn2k2?entry=ttu">
                    <Image
                            src="/xv/imgs/maps/salon.jpg"
                            alt="Ubicacion Iglesia"
                            width={1000}
                            height={1000}
                            className="rounded-md w-full"
                        />
                </Link>
            </div>
        </div>
    )
}