interface Props {
    setFilter: Function
}
export default function Filter( { setFilter }: Props ) {
    return (
        <div className="w-1/2 mx-auto">
            <select 
                className="w-full mt-3 py-3 px-4 text-xl bg-black bg-opacity-50 text-white rounded-full 
                    focus:ring-4 focus:ring-purple-700 focus:outline-none"
                onChange={ (e) => setFilter( e.target.value ) }
            >
                <option value="date-des">Más Recientes</option>
                <option value="date-asc">Anteriores</option>
                <option value="attendence">Asistirán</option>
                <option value="not-attendence">No Asistirán</option>
            </select>
        </div>
    )
}