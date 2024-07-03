import React, { useState } from 'react'

const FormularioTodo = ({ createTodo }) => {

  const [title, setTitle] = useState('');

  const hanledSubmitAddTodo = (event) => {

    event.preventDefault();
    if (title.trim().length > 0) {
      createTodo(title)
      return setTitle("");
    }
    setTitle("");
  }

  return (
    <form onSubmit={hanledSubmitAddTodo} className=" flex bg-white rounded overflow-hidden py-4 gap-4 items-center  dark:bg-gray-800">
      <span className="rounded-full border-2 inline-block h-5 w-5 ml-3" ></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none  dark:bg-gray-800"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  )
}

export default FormularioTodo