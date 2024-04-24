import Title from "../ui/Title";

export default function Presentation({ dafoe }: any) {
    return (
        <div className="">
            <p className={`${dafoe.className} text-8xl text-shadow shadow-black text-center mb-8`}>Mis &nbsp;XV &nbsp;Años</p>
            <div className="w-[500px] h-[500px] bg-purple-400 mx-auto">Photo</div>
            <p className={`${dafoe.className} text-6xl text-shadow shadow-black text-center my-8`}>Nombre</p>
        </div>
    )
}