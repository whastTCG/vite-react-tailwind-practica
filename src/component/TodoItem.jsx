import React from 'react'
import CrossIcon from './icons/CrossIcon'
import CheckIcon from './icons/CheckIcon'

const TodoItem = ({ todo, removeTodo, todoUpdate }) => {

    //podemos desestructurar el props ya que es un array de objetos pero en este caso solo nos llega el objeto 
    const { id, title, completed } = todo
    return (
        <>
            <article className="flex gap-4 border-b-[1.5px] border-b-gray-400 py-4 dark:bg-gray-800 ">
                { 
                    completed ? <button className="flex justify-center items-center rounded-full border-2  h-5 w-5 ml-3 mr-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={() => todoUpdate(id)}><CheckIcon /></button>
                               : <button className="flex justify-center items-center rounded-full border-2  h-5 w-5 ml-3 mr-4 " onClick={() => todoUpdate(id)}></button>
                }
                <p className={`text-gray-600 grow ${completed && "line-through text-gray-300"} dark:text-gray-600`}>{title}</p>
                <button className="pr-4" onClick={() => removeTodo(id)}><CrossIcon /></button>

            </article>
        </>
    )
}

export default TodoItem

