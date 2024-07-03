import React, { useState, useEffect } from 'react'
import Moon from './Moon'
import SunIcon from './SunIcon';

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark' ? true : false;
const Header = () => {

    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    // const [loading, setLoading] = useState(false);
    
   

    // useEffect(() => {
    //     // Obtener el tema actual almacenado en localStorage
    //     const storedTheme = localStorage.getItem('theme');
    
    //     // Inicializar darkMode según el tema almacenado o por defecto false
    //     if (storedTheme === 'dark') {
    //         setDarkMode(true);
    //     } 
    //     if (storedTheme === 'light') {
    //         setDarkMode(false)
    //     }
    //     setLoading(true)
    // }, []); // Este useEffect se ejecuta solo una vez al cargar el componente

    
    
    useEffect(() => {
        // Actualizar el tema en localStorage y las clases del documento HTML

        // if (!loading) {
        //     return
        // }
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]); // Este useEffect se ejecuta cuando darkMode cambia Esta dependencia es necesaria para ejecutar el useEffect cuando darkMode cambia
    

    return (
        <header className="container mx-auto px-4 pt-8" >
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em] ">Todo</h1>
                <button onClick={() => setDarkMode(!darkMode)} >
                    {darkMode ? <SunIcon/> :  <Moon />}
                </button>
            </div>
        </header>
    )
}

export default Header