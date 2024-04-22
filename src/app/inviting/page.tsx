import { Mr_Dafoe } from "next/font/google"
import Presentation from "@/components/Presentation"
import Names from "@/components/Names"
import Date from "@/components/XvDate"
import Maps from "@/components/Maps"
import Generals from "@/components/Generals"
import Memories from "@/components/Memories"
import AttendanceForm from "@/components/AttendanceForm"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})

export default function Page() {
    return (
        <>
            <div className="bg-[url(/textura_1.jpg)] bg-cover">
                <main className="mx-auto relative">
                    {/* Spacer** */}
                    <p className="block mb-8 text-transparent">.</p>

                    {/* All title components needs an <p> with a different font*/}
                    <Presentation dafoe={dafoe}/>
                    <Names dafoe={dafoe}/>
                    <Date dafoe={dafoe}/>
                    <Maps dafoe={dafoe}/>
                    <Generals dafoe={dafoe}/>
                    <Memories/>
                    <AttendanceForm dafoe={dafoe}/>

                    {/* Spacer*: this auxiliar spacer is a last moment help for avoid move the image */}
                    {/* <p className="block mt-8 text-transparent">.</p> */}
                </main>
            </div>
        </>
    )
}
