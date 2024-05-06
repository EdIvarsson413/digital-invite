import ClientService from "@/services/ClientService"
import Eye from "../ui/Eye"
import { useState } from "react"

interface Props {
    setAuthenticated: Function
}
export default function InputPassword( { setAuthenticated }: Props ) {
    const [ password, setPassword ] = useState('');

    /**
     * For to manage the state of input
     * waiting - disabled form
     * errorPassword - password not match
     * viewPassdowrd - show the input with type text
     */
    const [ errorPassword, setErrorPassword ] = useState(false);
    const [ waiting, setWaiting ] = useState(false);
    const [ viewPassword, setViewPassword ] = useState(false);
    
    const handleSubmit = async ( e: React.ChangeEvent <HTMLFormElement> ) => {
        e.preventDefault();
        setWaiting( true );

        try {
            // Call API
            const response = await ClientService.inputPassword( password );

            // Get JSON
            const { authenticated } = await response.json();
            
            // Determinate if password was matched
            if( authenticated ) {
                // Password match: pass to next component
                setAuthenticated( authenticated );

                // Set mark of login
                localStorage.setItem( "loged", authenticated );
            } else {  
                    // Password not match: notify error
                    setErrorPassword( true );
                    alert('Contraseña Incorrecta')
                }

        } catch ( error ) {
            console.log(error);
        } finally {
            setWaiting( false );
        }
    }

    return (
        <main className="min-h-screen place-content-center" onContextMenu={ (e) => e.preventDefault() }>
            <div className="w-10/12 px-3 py-4 mx-auto bg-purple-400 rounded-md shadow-md shadow-black">
                <form onSubmit={handleSubmit}>
                    {/* Input password */}
                    <div className="flex gap-5">
                        <input 
                            type={ viewPassword? "text" : "password" }
                            placeholder="Contraseña"
                            className={`py-3 px-4 text-xl w-full bg-black bg-opacity-30 text-white placeholder:text-white 
                                        rounded-full focus:ring-4 focus:ring-purple-700 focus:outline-none
                                        ${ waiting && 'disabled:animate-pulse' }
                                        ${ errorPassword && 'ring-4 ring-red-600 bg-red-600 animate-bounce' }`}
                            disabled={waiting}
                            value={password}
                            onChange={ (e) => setPassword( e.target.value )}
                            onClick={ () => setErrorPassword( false ) }
                        />
                        <button 
                            type="button"
                            disabled={waiting}
                            onClick={ () => setViewPassword( !viewPassword )}
                        >
                            <Eye/>
                        </button>
                    </div>
                    
                    {/* Submit */}
                    <button 
                        type="submit" 
                        className={`mt-3 bg-black bg-opacity-30 w-full rounded-full py-3 px-4 text-white text-xl 
                                    hover:bg-opacity-60 duration-200 transition-all ${ waiting  && 'disabled:animate-pulse' }`}
                        disabled={waiting}   
                        >
                            Entrar
                    </button>
                </form>
            </div>
        </main>
    )
}