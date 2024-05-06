import Title from "../ui/Title"

export default function Names({ dafoe }: any) {
    return (
        <div onContextMenu={ (e) => e.preventDefault() }>
            <Title title="Mis  &nbsp;XV  &nbsp;Años"/>
            <p className="text-center text-2xl mt-2 text-shadow-sm shadow-purple-500 w-[550px] mx-auto">
                Hoy queda en el recuerdo mi niñez, pero hoy renazco para vivir el momento más feliz de mi vida: mi adolecencia.
                Quisiera que estés junto a mi para que compartamos mis 15 años.
            </p>
            <br />
            <p className={`${dafoe.className} text-5xl text-shadow shadow-black text-center mt-4`}>Mis Papás</p>
            <p className="text-center text-2xl mt-2 text-shadow-sm shadow-purple-500">Hilda Graciela</p>
            <p className="text-center text-2xl text-shadow-sm shadow-purple-500 mb-24">Blas Eduardo</p>
        </div>
    )
}