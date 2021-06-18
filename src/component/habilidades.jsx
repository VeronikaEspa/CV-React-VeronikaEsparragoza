import React from 'react';
import '../utils/css/habilidades.estilos.css';
import html5 from '../utils/images/html5.svg';
import css3 from '../utils/images/css-3.svg';
import jsv from '../utils/images/javascript.svg';
import boostrap from '../utils/images/Boostrap-Icons.png';
import git from '../utils/images/git_icon.svg';
import react from '../utils/images/logo.svg';
import photo from '../utils/images/photoshop.svg';
import figma from '../utils/images/figma.svg'
import arduino from '../utils/images/arduino.svg'

const Habilidades = () => {
    return (
        <div className=" margen_izquierdo margen_derecho margenComponentes rojo" id="Habili" name="Habili">
            <div className="titulo">
            HABILIDADES
            </div>
            <div className="parrafo">
            Soy una persona tranquila, con capacidad para liderar equipos de trabajo, con pensamiento creativo, con habilidades en programación y diseño de entornos virtuales.
            </div><br/>
            <div className="">
                <div className="container_conreact">
            <div className="containerIconos1">
                <div className="columna_iconos imagenesIconos">
                    <img src={html5} />
                    <div className="capa">HTML</div>
                </div>
                <div className="columna_iconos imagenesIconos">
                    <img src={css3} />
                    <div className="capa">CSS</div>
                </div>
                <div className="columna_iconos imagenesIconos">
                    <img src={jsv} />
                    <div className="capa">JavaScript</div>
                </div>
            </div>
            <div className="columna_iconos capa_react">
                    <img src={react} />
                    <div className="capa">React</div>
                </div>
                </div>
            <div className="containerIconos2">
                <div className=" columna_iconos imagenesIconos">
                    <img src={git} />
                    <div className="capa">Git / Github</div>
                </div>
                <div className=" columna_iconos imagenesIconos">
                    <img src={boostrap} />
                    <div className="capa">Boostrap</div>
                </div>
                <div className="columna_iconos imagenesIconos">
                    <img src={figma} />
                    <div className="capa">Figma</div>
                </div>
                <div className="columna_iconos imagenesIconos">
                    <img src={photo} />
                    <div className="capa">Photoshop</div>
                </div>
                <div className="columna_iconos imagenesIconos">
                    <img src={arduino} />
                    <div className="capa">Arduino</div>
                </div>
            </div></div><br/><br/>
                <div className="parrafo texto2">
                Estos son algunos de los programas que he estado aprendiendo en mi formación académica, algunos de manera autónoma o a través de cursos formativos.
                </div>
            </div>
    )
}

export default Habilidades