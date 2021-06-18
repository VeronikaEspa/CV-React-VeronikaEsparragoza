import React from 'react';
import '../utils/css/contacto.estilos.css';
import mensaje from '../utils/images/mensaje.svg';
import mail from '../utils/images/mail_icono.svg';
import link from '../utils/images/linkedin_icon.svg';
import whats from '../utils/images/whats_icon.svg';
import gith from '../utils/images/github_icon.svg';
// import insta from '../utils/images/inta_icon.svg';

const Contactame = () => {
    return (
        <div className="contacto_contenido margenComponentes complejo" id="Contact" name="Contact">
        <div className="cuadroNaranja2 blanco tamañoCuadro2">
            <div className="titulo">
            CONTACTAME !
            </div>
            <div className="parrafo">
                <div className="gmail icono_contactame">
                    <img src={mail} />vesparragozam@gmail.com
                </div>
                <div className="linkedin icono_contactame">
                    <img src={link} /><a target="_blank" className="linksContact blanco" href="https://www.linkedin.com/in/veronika-esparragoza-m/">www.linkedin.com/in/veronika-esparragoza-m</a>
                </div>
                <div className="whats icono_contactame">
                    <img src={whats} /><a target="_blank" className="linksContact blanco" href="https://wa.link/l3ui50">3002925434</a>
                </div>
                <div className="github icono_contactame">
                    <img src={gith} /><a target="_blank" className="linksContact blanco" href="https://github.com/VeronikaEspa">VeronikaEspa</a>
                </div>
                {/* Aun no disponible el instagram porque aun es una cuenta personal
                <div className="insta icono_contactame">
                    <img src={insta} /><a target="_blank" className="linksContact blanco" href="https://www.instagram.com/vero36espa/">vero36espa</a>
                </div> */}
            </div>
        </div>
        <div className="imagen1">
        <img src={mensaje} />
        </div></div>
    )
}

export default Contactame