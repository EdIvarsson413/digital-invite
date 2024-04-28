import { useEffect, useState } from "react"
import Guest from "./main/Guest"
import Filter from "./main/Filter"
import Header from "./main/Header"
import ClientService from "@/services/ClientService"

interface Props {
    dafoe: any
}

export interface Guest {
    nanouuid: string
    name: string
    confirmed: boolean
    message?: string
    confirmedDate: string
    originalDate: string
}

export default function Main( { dafoe }: Props ) {
    const [ invitees, setInvitees ] = useState([]);
    const [ filter, setFilter ] = useState('date-des');

    // Get Guest from API
    useEffect(() => {
        const getGuest = async () => {
            try {
                const response =  await ClientService.fetchInvitees()
    
                const data = await response.json();
                
                // Sort by date (oldest to newest)
                for (let i = 0; i < data.length - 1; i++) {
                    for (let j = 0; j < data.length - i - 1; j++) {
                        if (new Date(data[j].originalDate).getTime() > new Date(data[j + 1].originalDate).getTime()) {
                            // Swap the elements
                            [data[j], data[j + 1]] = [data[j + 1], data[j]];
                        }
                    }
                }

                setInvitees( data )
            } catch (error) {
                console.log(error)
            }
        }

        getGuest();
    }, [])

    const dateFilter = () => {
        switch ( filter ) {
            case 'attendence': return invitees.filter( (guest: Guest) => guest.confirmed )
            case 'not-attendence': return invitees.filter( (guest: Guest) => !guest.confirmed )
            case 'date-des': return invitees.toSorted( (a: Guest, b:Guest) => new Date(b.originalDate).getTime() - new Date(a.originalDate).getTime() )
            case 'date-asc': return invitees.toSorted( (a: Guest, b:Guest) => new Date(a.originalDate).getTime() - new Date(b.originalDate).getTime() )
            default: return invitees
        }
    }

    return (
        <>
            <Header/>

            <main className="min-h-screen">
                {
                    invitees.length > 0 ? (
                        <>
                            <p className={`${dafoe.className} text-6xl text-shadow shadow-black mt-16 text-center`}>Personas Confirmadas</p>
                            
                            {/* Filter */}
                            <Filter setFilter={setFilter}/>
                            
                            <article className={`${invitees.length > 4 && 'h-[680px] overflow-y-scroll'} mx-auto w-10/12 grid grid-cols-1 mt-8 gap-4`}>
                                {
                                    dateFilter().map( ( guest: Guest) => (
                                        <Guest 
                                            key={guest.nanouuid} 
                                            guest={guest}
                                            setInvitees={setInvitees}
                                        />
                                    ))
                                }
                            </article>
                        </>
                    ) : (
                        <p className={`${dafoe.className} text-6xl text-shadow shadow-black mt-16 text-center animate-pulse`}>Cargando...</p>
                    )
                }
            </main>
        </>
    )
}