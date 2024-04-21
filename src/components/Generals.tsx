import Image from "next/image"

export default function Generals({ dafoe }: any) {
    return (
        <>
            <p className={`${dafoe.className} text-shadow shadow-black text-center text-6xl mt-32`}>Generales del Evento</p>
            <p className="text-center text-2xl mt-2 text-shadow-sm shadow-purple-500">Vestimenta Formal</p>
            <p className="text-center text-2xl text-shadow-sm shadow-purple-500">No Niños</p>

            <p className={`${dafoe.className} text-shadow shadow-black text-center text-5xl mt-16`}>Mesa de Regalos</p>
            <p className="text-center text-2xl mt-2 text-shadow-sm shadow-purple-500 w-[550px] mx-auto">
                Su presencia es el regalo más grande. Si desean regalarme algo, pongo a su disposición mi mesa de regalos:
            </p>

            {/* Logo 1 */}
            <div>
                <Image src="https://brandeps.com/logo-download/E/El-Puerto-de-Liverpool-logo-vector-01.svg" alt="imagen liverpool" width={200} height={200} className="mx-auto"/>
                <p className="text-center text-2xl -mt-16 text-shadow-sm shadow-purple-500">Numero de evento: xxxxx</p>
            </div>

            {/* Logo 2 */}
            <div>
                <Image src="https://brandeps.com/logo-download/E/El-Puerto-de-Liverpool-logo-vector-01.svg" alt="imagen liverpool" width={200} height={200} className="mx-auto"/>
                <p className="text-center text-2xl -mt-16 text-shadow-sm shadow-purple-500">Numero de evento: xxxxx</p>
            </div>
        </>
    )
}