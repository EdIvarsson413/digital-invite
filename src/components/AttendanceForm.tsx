'use client'


export default function AttendanceForm({ dafoe }: any) {
    return (
        <div className="bg-purple-400">
            <form className="px-8 py-4">
                <label>
                    <p className={`${dafoe.className} text-5xl text-shadow shadow-black text-center`}>Confirma Tu Asistencia</p>
                </label>

                <fieldset className='mt-7'>
                    {/* Name */}
                    <input 
                        type="text" 
                        placeholder='Nombre' 
                        className='py-3 px-4 text-xl w-full bg-black bg-opacity-30 text-white placeholder:text-white rounded-full'
                    />

                    {/* Select ('I'm going / I'm not going) */}
                    <select className="mt-2 py-3 px-4 text-xl w-full bg-black bg-opacity-30 text-white rounded-full">
                        <option value="" disabled selected className="">Confirmo Que:</option>
                        <option value="" className="bg-black bg-opacity-50">Asistire</option>
                        <option value="" className="bg-black bg-opacity-50">No asistire</option>
                    </select>

                    {/* Kind message */}
                    <textarea 
                        placeholder="Escribe Un Mensaje"
                        className="mt-2 py-3 px-4 text-xl w-full bg-black bg-opacity-30 placeholder:text-white text-white rounded-2xl">
                    </textarea>

                    {/* Submit */}
                    <button type="button" className="mt-4 bg-black bg-opacity-30 w-full rounded-full py-3 px-4 text-white text-xl hover:bg-opacity-60 duration-200 transition-all">Enviar</button>
                </fieldset>
            </form>
        </div>
    )
}