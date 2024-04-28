import { useState } from "react";
import Eye from "../../ui/Eye"
import type { Guest } from "../Main"
import Xmark from "../../ui/Xmark"
import ClientService from "@/services/ClientService"

interface Props {
    guest: Guest
    setInvitees: Function
} 

export default function Guest( { guest, setInvitees }: Props ) {
    const [ openModal, setOpenModal ] = useState(false);

    const thereMsg = ( message: string | undefined ) => {
        return message?.length !== 0
    }

    // Change the attendance of guest
    const handleEdit = async () => {
        // Change state
        setInvitees((prevInvitees: Array<Guest>) =>
            prevInvitees.map((guestState) => guestState.nanouuid === guest.nanouuid ? { ...guestState, confirmed: !guestState.confirmed } : guestState )
        );

        // Modify in API
        try {
            const response = await ClientService.changeConfimed( guest.nanouuid )

            // Get json
            const data = await response.json();
            alert(data.msg);

        } catch (error) {
            console.log(error)
        }
    }

    // Delete guest
    const handleDelete = async () => {
        // Ask for really want delete
        if( confirm('¿Estás Segura De Eliminar Este Invitado?') ) {
            // Change state
            setInvitees((prevInvitees: Array<Guest>) =>
                prevInvitees.filter((guestState) => guestState.nanouuid !== guest.nanouuid)
            );

            // Modify in API
            try {
                const response = await ClientService.deleteGuest( guest.nanouuid );

                // Get json
                const data = await response.json();
                alert(data.msg);

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <section className="bg-purple-400 space-y-1 rounded-md px-3 py-2 shadow-md shadow-black text-white">
                <div className="flex justify-between">
                    <p className="text-2xl">{guest.name}</p>
                    <button type="button" onClick={ () => setOpenModal( true )}>
                        <Eye/>
                    </button>
                </div>
                <p className="text-lg">Asistencia: {guest.confirmed? 'Asistirá' : 'No Asistirá'}</p>
                <p className="text-lg">Mensaje:&nbsp; 
                    <span 
                        className={`${thereMsg( guest.message ) && 'hover:text-purple-700 transition-all duration-200 underline'}`}
                        onClick={ () => setOpenModal( true ) }
                    >
                        {
                            thereMsg( guest.message )? 'Hay Mensaje' : 'No Hay Mensaje'
                        }
                    </span>
                </p>
                <p className="text-lg text-purple-200">Fecha de confirmación: {guest.confirmedDate}</p>
            </section>

            {
                openModal && (
                    // Modal overlay
                    <div className="fixed top-0 left-0 bg-black bg-opacity-35 w-screen h-screen flex justify-center items-center" onClick={() => setOpenModal(false)}>
                        {/* Window */}
                        <div className="bg-purple-400 text-white rounded shadow-md p-8 w-[500px]">
                            {/* Close modal */}
                            <button type="button" onClick={ () => setOpenModal( false )} className="relative left-[26.5rem] top-[-1.5rem]">
                                <Xmark/>
                            </button>

                            {/* Same info that cards */}
                            <p className="text-2xl text-center mb-1">{guest.name}</p>
                            <p className="text-lg">Asistencia: {guest.confirmed? 'Asistirá' : 'No Asistirá'}</p>
                            {
                                thereMsg( guest.message ) && (
                                    <p className="text-lg">Mensaje
                                        <br />
                                        {guest.message}
                                    </p>
                                )
                            }

                            {/* Modal actions */}
                            <div className="flex justify-between mt-5">
                                <button 
                                    type="button" 
                                    className="bg-yellow-400 rounded-md hover:bg-yellow-500 transition-all duration-200 px-2 py-1"
                                    onClick={handleEdit}
                                >
                                    Cambiar Asistencia
                                </button>
                                <button 
                                    type="button" 
                                    className="bg-red-500 rounded-md hover:bg-red-700 transition-all duration-200 px-2 py-1"
                                    onClick={handleDelete}
                                >
                                    Eliminar Invitado
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}