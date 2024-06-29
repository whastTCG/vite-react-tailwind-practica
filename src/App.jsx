import CrossIcon from "./component/icons/CrossIcon"
import Moon from "./component/icons/Moon"

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat 
      bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8"  >
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em] ">Todo</h1>
          <button className=""><Moon/></button>
        </div>

        <form className=" flex bg-white rounded overflow-hidden py-4 gap-4 items-center mt-8">
          <span className="rounded-full border-2 inline-block h-5 w-5 ml-3" ></span>
          <input type="text" placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none" />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white  rounded-md ">
          <article className="flex gap-4 border-b-[1.5px] border-b-gray-400 py-4">
            <button className="rounded-full border-2 inline-block h-5 w-5 ml-3 mr-4 "></button>
            <p  className="text-gray-600 grow">Complete online JavaScrip course</p> 
            <button className="pr-4"><CrossIcon /></button>

          </article>
          <article className="flex gap-4 border-b-[1.5px] border-b-gray-400 py-4">
            <button className="rounded-full border-2 inline-block h-5 w-5 ml-3 mr-4"></button>
            <p  className="text-gray-600 grow">Complete online JavaScrip course</p> 
            <button className="pr-4" ><CrossIcon /></button>

          </article>

        </div>

        <section className="py-4 px-4 bg-white  rounded-md flex justify-between">
          <span className="text-gray-400">5 item left</span>
          <button className="text-gray-400"> clear completed</button>
        </section>
      </main>
      <section className=" container mx-auto px-4 mt-8">
        <div className="bg-white  p-4 rounded-md flex justify-center gap-4">
        <button className="text-blue-600">all</button>
        <button className="hover:text-blue-600">active</button>
        <button className="hover:text-blue-600">complete</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and  Drop to Reorder list</p>
    </div>
  )
}

export default App
