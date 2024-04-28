'use client'
import ClientService from "@/services/ClientService";
import { useState } from "react"
import { toast } from "react-toastify"

export default function AttendanceForm({ dafoe }: any) {
    // Form state
    const [ name, setName ] = useState <string> ('');
    const [ confirmed, setConfirmed ] = useState <string> ('asistir');
    const [ message, setMessage ] = useState <string> ('');

    // Errors state
    const [ errorName, setErrorName ] = useState <boolean> (false);
    const [ errorConfirmed, setErrorConfirmed ] =  useState <boolean> (false);

    const handleSubmit = async ( e: React.ChangeEvent< HTMLFormElement > ) => {
        e.preventDefault();
        console.log(confirmed, name, message)
        // Set Errors in case it passed
        if( name === '' ) { setErrorName( true ) }
        if( confirmed === '' ) { setErrorConfirmed( true ) }
        // else if( confirmed === 'default' ) { console.log(confirmed); return }

        // Validate form is not empty
        if( ![name,confirmed].includes('') ) {
            try {
                // Get confirm (in boolean value)
                const aux = confirmed === 'asistir'? true : false;
                
                // Send data to API n' get Response
                const response = await ClientService.registerGuest( name, aux, message );

                // Get JSON data n' send msg to user
                const { msg } = await response.json();
                toast.success(msg);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="bg-purple-400">
            <form className="px-8 py-4" onSubmit={ handleSubmit }>
                <label>
                    <p className={`${dafoe.className} text-5xl text-shadow shadow-black text-center`}>Confirma Tu Asistencia</p>
                </label>

                <fieldset className='mt-7'>
                    {/* Name */}
                    <input 
                        type="text" 
                        placeholder='Nombre' 
                        className={`py-3 px-4 text-xl w-full bg-black bg-opacity-30 text-white placeholder:text-white 
                                    rounded-full focus:ring-4 focus:ring-purple-700 focus:outline-none 
                                    ${ errorName? 'animate-bounce ring-4 ring-red-600 bg-red-600' : '' }`}
                        value={name}
                        onChange={ (e) => { setName( e.target.value ) }}
                        onClick={ (e) => setErrorName( false ) }
                    />

                    {/* Select ('I'm going / I'm not going) */}
                    <select 
                        className={`mt-3 py-3 px-4 text-xl w-full bg-black bg-opacity-30 text-white rounded-full 
                                    focus:ring-4 focus:ring-purple-700 focus:outline-none
                                    ${ errorConfirmed? 'animate-bounce ring-4 ring-red-600 bg-red-600' : '' }`}
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
                        placeholder="Escribe Un Mensaje"
                        className="mt-3 py-3 px-4 text-xl w-full bg-black bg-opacity-30 placeholder:text-white text-white rounded-2xl
                                    focus:ring-4 focus:ring-purple-700 focus:outline-none"
                        onChange={ ( e ) => setMessage( e.target.value )}
                    >
                    </textarea>

                    {/* Submit */}
                    <button 
                        type="submit" 
                        className="mt-5 bg-black bg-opacity-30 w-full rounded-full py-3 px-4 text-white text-xl 
                            hover:bg-opacity-60 duration-200 transition-all">
                            Enviar
                    </button>
                </fieldset>
            </form>
        </div>
    )
}