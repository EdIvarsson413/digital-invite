import Link from "next/link"

export default function Generals({ dafoe }: any) {
    return (
        <div onContextMenu={ (e) => e.preventDefault() }>
            <p className={`${dafoe.className} text-shadow shadow-black text-center text-6xl mt-32`}>Generales del Evento</p>
            <p className="text-center text-2xl mt-3 text-shadow-sm shadow-purple-500">
                Vestimenta Formal 
                <br />
                <span className="uppercase text-3xl">(Evitar Color Lila)</span>
            </p>

            <p className={`${dafoe.className} text-shadow shadow-black text-center text-5xl mt-16`}>Regalos</p>
            <p className="text-center text-2xl mt-2 text-shadow-sm shadow-purple-500 w-[550px] mx-auto">
                Gracias por multiplicar la alegría de mi corazón con tu amor, tus amables regalos y tu presencia en mi vida.
            </p>
            
            <p className={`text-center text-4xl mt-8 text-shadow-sm shadow-purple-500 uppercase underline`}>Cuota</p>

            {/* Link to instagram */}
            <div className="bg-gradient-to-bl from-pink-400 via-red-400 to-yellow-400 py-10 text-center text-white mt-8">
                <p className="text-3xl mb-3">#MisXVDiana</p>
                <Link
                    href={"https://www.instagram.com/explore/tags/misxvdiana/"}
                    className="border-2 border-white text-xl px-3 py-1 rounded-full hover:text-shadow hover:shadow-lg shadow-black transition-all duration-200"
                >
                    Abrir en Instagram
                </Link>
            </div>
        </div>
    )
}