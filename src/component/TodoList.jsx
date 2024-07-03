import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({ todo, removeTodo, todoUpdate }) => {



  return (
    <div className="bg-white  rounded-md mt-8 ">
      {todo.map((item) => (
        <TodoItem key={item.id} todo={item} removeTodo={removeTodo} todoUpdate={todoUpdate}/>
      ))}

    </div>
  )
}

export default TodoList