import React from 'react'

const TodoFiltrar = ({ setFilter }) => {

   const  handledSetFilter = (event) => {
        setFilter(event.target.value)
    }
    return (
        <section className="bg-white container mx-auto px-4 rounded-md flex justify-center gap-4  dark:bg-gray-800">
            
                <button className="text-blue-600" value={"all"} onClick={handledSetFilter}>all</button>
                <button className="hover:text-blue-600" value={"active"} onClick={handledSetFilter}>active</button>
                <button className="hover:text-blue-600" value={"completed"} onClick={handledSetFilter}>complete</button>
            
        </section>
    )
}

export default TodoFiltrar