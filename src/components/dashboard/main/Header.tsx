import Link from "next/link"
import { useState } from 'react'
import Xmark from "@/components/ui/Xmark"
import ClientService from "@/services/ClientService"

export default function Header() {
    const [ oldPassword, setOldPassword ] = useState('')
    const [ newPassword, setNewPassword ] = useState('')
    const [ openModal, setOpenModal ] = useState(false);
    const [ waiting, setWaiting ] = useState(false);
    const [ errorOldPassword, setErrorOldPassword ] = useState(false);
    const [ errorNewPassword, setErrorNewPassword ] = useState(false);

    const handleSubmit = async ( e: React.ChangeEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setWaiting( true )

        // Validate fields
        if( oldPassword === '' ) setErrorOldPassword( true );
        
        if( newPassword === '' ) setErrorNewPassword( true );

        if( ![oldPassword, newPassword].includes('') ) {
            try {
                // Query API
                const response = await ClientService.changePassword({
                    password: oldPassword,
                    newPassword: newPassword
                })

                // Get json
                const { error, msg } = await response.json()
                
                // Make changes
                if( error ) {
                    setErrorOldPassword( true );
                    alert( msg )
                } else {
                    alert( msg );
                    setOpenModal( false );
                    setNewPassword('');
                    setOldPassword('');

                    // Restart mark of login
                    localStorage.removeItem( 'loged' );
                }

            } catch (error) {
                console.log(error);
            }
        }

        setWaiting( false )
    }

    return (
        <>  
            <header className="flex justify-between bg-purple-400 py-3 px-5">
                <button className=" border-2 border-white p-2 text-white text-lg rounded-md" onClick={ () => setOpenModal( true ) }>Cambiar Contraseña</button>
                <Link
                    href={'/'}
                    className="border-2 border-white p-2 text-white text-lg rounded-md w-[185px] text-center"
                >
                    Salir
                </Link>
            </header>

            {/* Modal */}
            {
                openModal && (
                    <div className="fixed top-0 left-0 bg-black bg-opacity-35 w-screen h-screen flex justify-center items-center">
                        <div className="bg-purple-400 text-white rounded shadow-md p-8 w-[500px]">
                            {/* Close modal */}
                            <button type="button" onClick={ () => setOpenModal( false )} className="relative left-[26.5rem] top-[-1.5rem]">
                                <Xmark/>
                            </button>

                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text"
                                    placeholder="Contraseña Anterior"
                                    className={`py-3 px-4 text-xl w-full bg-black bg-opacity-30 text-white placeholder:text-white 
                                                rounded-full focus:ring-4 focus:ring-purple-700 focus:outline-none
                                                ${ waiting && 'disabled:animate-pulse' }
                                                ${ errorOldPassword && 'ring-4 ring-red-600 bg-red-600 animate-bounce' }`}
                                    disabled={waiting}
                                    value={oldPassword}
                                    onChange={ (e) => setOldPassword( e.target.value )}
                                    onClick={ () => setErrorOldPassword( false ) }
                                />
                                <input 
                                    type="text"
                                    placeholder="Contraseña Nueva"
                                    className={`py-3 px-4 mt-3 text-xl w-full bg-black bg-opacity-30 text-white placeholder:text-white 
                                                rounded-full focus:ring-4 focus:ring-purple-700 focus:outline-none
                                                ${ waiting && 'disabled:animate-pulse' }
                                                ${ errorNewPassword && 'ring-4 ring-red-600 bg-red-600 animate-bounce' }`}
                                    disabled={waiting}
                                    value={newPassword}
                                    onChange={ (e) => setNewPassword( e.target.value )}
                                    onClick={ () => setErrorNewPassword( false ) }
                                />
                                
                                {/* Submit */}
                                <button 
                                    type="submit" 
                                    className={`mt-5 bg-black bg-opacity-30 w-full rounded-full py-3 px-4 text-white text-xl 
                                                hover:bg-opacity-60 duration-200 transition-all ${ waiting  && 'disabled:animate-pulse' }`}
                                    disabled={waiting}   
                                    >
                                        Cambiar Contraseña
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}