import React from 'react'
import {Inicio, Academico, Contacto, Cursos, Footer, Habilidades, Hobbies, Menu} from '../../component/index'
const Home = () => {
    return(
        <>
        <Menu/>
        <Inicio/>
        <Academico/>
        <Cursos/>
        <Hobbies/>
        <Habilidades/>
        <Contacto/>
        <Footer/>
        </>
    )
}
export default Home;