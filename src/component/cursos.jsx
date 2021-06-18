import React from 'react';
import '../utils/css/cursos.estilos.css';
import focus from '../utils/images/focus.svg'

const Cursos = () => {
    return (
        <div className="cursos margen_izquierdo rojo" id="Cursos" name="Cursos">
            <div>
                <div className="titulo">
                EDUCACIÓN COMPLEMENTARIA
                </div>
                <div className="parrafo">
                    <ul>
                        <li>Formación de habilidades para el siglo XXI, Disruptia, en curso</li>
                        <li>Desarrollo web con PHP, Sena Virtual, en curso</li>
                        <li>Introducción a Unity para videojuegos 2D, Domestika, en curso</li>
                        <li>Introducción a SketchUp, Domestika, en curso</li>
                        <li>Ilustracion de personajes en medios digitales, Sena Virtual, mayo 2021</li>
                        <li>Ser más creativos, Coursera, julio 2020</li>
                        <li>Arduino y algunas aplicaciones, Coursera, agosto 2020</li>
                        <li>Sesenta años de inteligencia artificial, Coursera, agosto 2020</li>
                    </ul>
                </div></div>
            <div className="imagen2">
            <img src={focus} />
            </div>
        </div>
    )
}

export default Cursos