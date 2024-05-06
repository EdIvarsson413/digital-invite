import Image from "next/image"

export default function Presentation({ dafoe }: any) {
    return (
        <div onContextMenu={ (e) => e.preventDefault() }>
            <p className={`${dafoe.className} text-8xl text-shadow shadow-black text-center`}>Mis &nbsp;XV &nbsp;Años</p>
            <div className="w-10/12 mx-auto">
                <Image
                    src='/xv/imgs/principal-2.png'
                    alt='Imagen principal 2'
                    width={1000}
                    height={1000}
                    className="-mt-8"
                />
            </div>
            <p className={`${dafoe.className} text-[4rem] text-shadow shadow-black text-center -mt-24 mb-20`}>Diana</p>
        </div>
    )
}