import React from 'react';
import '../utils/css/habilidades.estilos.css';
import html5 from '../utils/images/html5.svg';
import css3 from '../utils/images/css-3.svg';
import jsv from '../utils/images/javascript.svg';
import boostrap from '../utils/images/Boostrap-Icons.png';
import git from '../utils/images/git_icon.svg';
import react from '../utils/images/logo.svg';
import photo from '../utils/images/photoshop.svg';

const Habilidades = () => {
    return (
        <div className=" margen_izquierdo margen_derecho margenComponentes" id="Habili" name="Habili">
            <div className="titulo">
            Habilidades
            </div>
            <div className="parrafo">
            Se manejar varios programas, entre ellos se encuentran: 
            </div>
            <div className="imagenesIconos">
                <img src={html5} />
                <div className="capa">HTML</div>
                <img src={css3} />
                <div className="capa">CSS</div>
                <img src={jsv} />
                <div className="capa">JavaScript</div>
            </div>
            <div className="iconosYboos">
            <div className="git">
                <img src={git} />
                <div className="capa">Git</div>
            </div>
            <div className="react">
                <img src={react} />
                <div className="capa">React</div>
            </div>
            <div className="boostrap-image">
                <img src={boostrap} />
                <div className="capa">Boostrap</div>
            </div>
            <div className="photo">
                <img src={photo} />
                <div className="capa">React</div>
            </div>
            </div>
        </div>
    )
}

export default Habilidades