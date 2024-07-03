import FormularioTodo from "./component/FormularioTodo"
import TodoComputed from "./component/TodoComputed"
import TodoFiltrar from "./component/TodoFiltrar"
import TodoList from "./component/TodoList"
import Header from "./component/icons/Header"
import { useState, useEffect } from 'react';

const initialStateTodo = [
  {
    id: 1,
    title: "Complete online javascript bluuweb curse",
    completed: true
  },
  {
    id: 2,
    title: "Go to the gym",
    completed: false
  },
  {
    id: 3,
    title: "10 minute meditation",
    completed: false
  },
  {
    id: 4,
    title: "complete todo app on frontend mentor",
    completed: true
  },
]

function App() {

  const [todo, setTodo] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");

  const filterTodo = (filter) => {
     if (filter === "all") {
       return todo
     }
     if (filter === "completed") {
       return todo.filter((todo) => todo.completed);
     }
     if (filter === "active") {
       return todo.filter((todo) => !todo.completed);
     }
  }

  const removeTodo = (id) => {
    const newTodos = todo.filter((todo) => todo.id !== id)
    setTodo(newTodos);
  }

  const todoUpdate = (id) => {
    // se puede hacer asi o con operador ternario
    // setTodo(todo.map(
    //   todo => {
    //     if (todo.id === id) {
    //       return {...todo, completed: !todo.completed}
    //     }else{
    //       return todo
    //     }
    //   }
    // ))

    setTodo(todo.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const createTodo = (title) => {
     const newTodo = {
      id:todo.length +1,
      title,
      completed:false
     }

     setTodo([...todo, newTodo]);
  }

  const countTodoIncomplete = () => {
    const countTodo = todo.filter( todo => !todo.completed && {...todo} );
    return countTodo.length;
  }

  const clearCompleted = () =>{
    setTodo(todo.filter(todo => !todo.completed));
  }

 

  

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat 
      bg-contain bg-gray-300 min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 ">

      <Header />

      <main className="container mx-auto px-4 mt-8">

        <FormularioTodo createTodo={createTodo}/>

        <TodoList todo={filterTodo(filter)} removeTodo={removeTodo} todoUpdate={todoUpdate} />


        <TodoComputed  countTodoIncomplete={countTodoIncomplete} clearCompleted={clearCompleted}  filterTodo={filterTodo} setFilter={setFilter} />


       
      </main>

      <footer className="text-center mt-8  dark:text-gray-400">Drag and  Drop to Reorder list</footer>
    </div>
  )
}

export default App
