import React from 'react'
import TodoFiltrar from './TodoFiltrar';

const TodoComputed = ({ countTodoIncomplete, clearCompleted, filterTodo, setFilter }) => {

    const itemLeft = countTodoIncomplete();
    return (
        <section className="py-4 px-4 bg-white  rounded-md flex justify-between  dark:bg-gray-800">
            <span className="text-gray-400 text-nowrap  dark:bg-gray-800">{itemLeft} item left</span>
            <TodoFiltrar filterTodo={filterTodo}  setFilter={setFilter}/>
            <button className="text-gray-400 text-nowrap" onClick={clearCompleted}> Clear Completed</button>
        </section>
    )
}

export default TodoComputed