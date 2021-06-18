import React from 'react';
import '../utils/css/menu.estilos.css';
import vero from '../utils/images/Vero_circulo.png';

const Menu = () => {
    return (
        <div className=" fondo_rojo blanco menu">
            <div className="imagenMia">
                <img src={vero} />
            </div>
            <div className="opcionesMenu">
                <a href="#Inicio"><button type="button">Inicio</button></a>
                <a href="#Academico"><button type="button">Experiencia academica</button></a>
                <a href="#Cursos"><button type="button">Educación complementaria</button></a>
                <a href="#Hobbies"><button type="button">Hobbies</button></a>
                <a href="#Habili"><button type="button">Habilidades</button></a>
                <a href="#Contact"><button type="button">Contacto</button></a>
            </div>
        </div>
    )
}

export default Menu