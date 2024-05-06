'use client'
import { useEffect, useState } from "react"
import { Mr_Dafoe } from "next/font/google"
import InputPassword from "@/components/dashboard/InputPassword"
import Main from "@/components/dashboard/Main"

const dafoe = Mr_Dafoe({ weight: '400', style: 'normal', subsets: ['latin']})

export default function Dashboard() {
    const [ authenticated, setAuthenticated ] = useState(false);

    // Load mark of login
    useEffect(() => {
        const ls = localStorage.getItem( "loged" )
        
        if( ls !== null ) setAuthenticated( Boolean(ls) );
    }, [])

    return (
        <div className="bg-[url(/textura_1.jpg)] bg-cover" onContextMenu={ (e) => e.preventDefault() }>
            <div className="bg-white bg-opacity-40">
                {/* Show the correspont component */}
                {
                    !authenticated? (
                        <InputPassword
                            setAuthenticated={setAuthenticated}
                        />
                    ) : (
                        <Main dafoe={dafoe}/>
                    )
                }
            </div>
        </div>
    )
}