'use client'
import ClientService from "@/services/ClientService"
import { useState } from "react"

export default function AttendanceForm({ dafoe }: any) {
    // Form state
    const [ name, setName ] = useState('');
    const [ confirmed, setConfirmed ] = useState('asistir');
    const [ message, setMessage ] = useState('');
    const [ waiting, setWaiting ] = useState(false); // Disable form fields

    /**
     * errorName - field is empty
     * errorConfirmd - the option select is not "Asistiré" or "No Asistiré"
     */
    const [ errorName, setErrorName ] = useState <boolean> (false);
    const [ errorConfirmed, setErrorConfirmed ] =  useState <boolean> (false);

    const handleSubmit = async ( e: React.ChangeEvent< HTMLFormElement > ) => {
        e.preventDefault();
        
        // Set Errors in case it passed
        if( name === '' ) { setErrorName( true ) }
        if( confirmed === '' ) { setErrorConfirmed( true ) }

        // Validate form is not empty
        if( ![name,confirmed].includes('') ) {
            setWaiting(true);

            try {
                // Get confirm (in boolean value)
                const aux = confirmed === 'asistir'? true : false;
                
                // Send data to API n' get Response
                const response = await ClientService.registerGuest( name, aux, message );

                // Get JSON data n' send msg to user
                const { msg } = await response.json();
                alert( msg );
            } catch (error) {
                console.log(error);
            } finally {
                setWaiting(false);
            }
        }
    }

    return (
        <div className="form md:bg-[url(/xv/imgs/form.jpg)] bg-cover" onContextMenu={ (e) => e.preventDefault() }>
            <form className="px-8 py-4" onSubmit={ handleSubmit }>
                <h3>
                    <p className={`${dafoe.className} text-5xl text-shadow shadow-black text-center text-white`}>Confirma Tu Asistencia</p>
                </h3>

                <fieldset className='mt-7'>
                    {/* Name */}
                    <input 
                        id="name"
                        autoComplete="off"
                        type="text" 
                        placeholder='Nombre' 
                        disabled={waiting}
                        className={`py-3 px-4 text-xl w-full bg-black bg-opacity-50 text-white placeholder:text-white 
                                    rounded-full focus:ring-4 focus:ring-purple-700 focus:outline-none 
                                    ${ errorName? 'animate-bounce ring-4 ring-red-600 bg-red-600' : '' }
                                    ${ waiting && 'disabled:animate-pulse' }`}
                        value={name}
                        onChange={ (e) => { setName( e.target.value ) }}
                        onClick={ (e) => setErrorName( false ) }
                    />

                    {/* Select ('I'm going / I'm not going) */}
                    <select
                        id="attendence"
                        disabled={waiting}
                        className={`mt-3 py-3 px-4 text-xl w-full bg-black bg-opacity-50 text-white rounded-full 
                                    focus:ring-4 focus:ring-purple-700 focus:outline-none
                                    ${ errorConfirmed? 'animate-bounce ring-4 ring-red-600 bg-red-600' : '' }
                                    ${ waiting && 'disabled:animate-pulse' }`}
                        onChange={ (e) => setConfirmed( e.target.value ) }
                        onClick={ (e) => setErrorConfirmed(false) }
                        defaultValue={confirmed}
                    >
                        <option value="default" disabled className="">Confirmo Que:</option>
                        <option value="asistir" className="bg-black bg-opacity-50">Asistire</option>
                        <option value="no asistir" className="bg-black bg-opacity-50">No asistire</option>
                    </select>

                    {/* Kind message */}
                    <textarea 
                        id="message"
                        disabled={waiting}
                        placeholder="Escribe Un Mensaje"
                        className={`mt-3 py-3 px-4 text-xl w-full bg-black bg-opacity-50 placeholder:text-white text-white rounded-2xl
                                    focus:ring-4 focus:ring-purple-700 focus:outline-none
                                    ${ waiting && 'disabled:animate-pulse' }`}
                        onChange={ ( e ) => setMessage( e.target.value )}
                    >
                    </textarea>

                    {/* Submit */}
                    <button 
                        type="submit" 
                        disabled={waiting}
                        className={`mt-5 bg-black bg-opacity-50 w-full rounded-full py-3 px-4 text-white text-xl 
                                    hover:bg-opacity-60 duration-200 transition-all
                                    ${ waiting && 'disabled:animate-pulse' }`}>
                            Enviar
                    </button>
                </fieldset>
            </form>
        </div>
    )
}