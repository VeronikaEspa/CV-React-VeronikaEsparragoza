import React from 'react'
import {Inicio, Academico, Contacto, Cursos, Footer, Habilidades, Hobbies, Menu} from '../../component/index'
const Home = () => {
    return(
        <div>
        <Menu/>
        <Inicio/>
        <Academico/>
        <Cursos/>
        <Hobbies/>
        <Habilidades/>
        <Contacto/>
        <Footer/>
        </div>
    )
}
export default Home;