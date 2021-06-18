import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Spartan-Medium.ttf'
import TitulosFont from './utils/fonts/SourceSerifPro-Bold.ttf'
import SecundaryFont from './utils/fonts/The-Castle-Elizah.woff'
const GlobalStyles = createGlobalStyle`
html{
    scroll-behavior: smooth;
}
.todito{
    display:flex;
}

// COLOR DE TEXTO
.rojo{
    color: #8C1102;
}
.blanco{
    color: #FAFAF0;
}
body::-webkit-scrollbar{
    width:15px;
    background-color: #8C1102;
}
body::-webkit-scrollbar-thumb{
    background-color: #FEAE4F;
    border-radius: 30px;
}
// COLOR DE FONDO
.fondo_rojo{
    background-color: #8C1102;
}
.margen_izquierdo{
    margin-left: 10%;
}
.margen_derecho{
    margin-right: 10%
}
// CUADROS
.tamañoCuadro{
    width:70%;
    margin: 5%;
    margin-left: 10%;
    padding: 5%;
}
.tamañoCuadro2{
    width:70%;
    margin-left: 2%;
    padding: 5%;
}
.margenComponentes{
    margin-top: 5%;
}
.titulo{
    font-size: 40px;
    font-family: 'Elizah';
    margin: 0px 0px 20px 0px;
}
.parrafo{
    font-size: 20px;
    text-align: justify;
}
button{
    border: none;
    background: none;
    cursor: pointer;
    color: #FAFAF0;
    font-size: 22px;
    font-family: 'Elizah';
    padding: 20px;
    margin: 2%;
}
button:hover{
    // font-size: 23px;
    transform:scale(1.15);
}
button a {
    decorative-style: none;
}
// FUENTES
@font-face{
    font-family: "Spartan";
    src: local("Spartan"), url(${PrimaryFont}) format('ttf');
    font-style: normal;
}
@font-face{
    font-family: "Elizah";
    src: local("Spartan"), url(${SecundaryFont}) format('woff');
    font-style: normal;
}
@font-face{
    font-family: "SourceSerifPro";
    src: local("SourceSerifPro"), url(${TitulosFont}) format('ttf');
    font-style: normal;
}
// RESPONSIVE
@media only screen and (min-width:750px) and (max-width:900px){
    .tamañoCuadro{
        margin:6%;
        width:70%;
    }
    .margen_izquierdo{
        margin-left: 5%;
    }
    .margen_derecho{
        margin-right: 10%;
    }
    .titulo{
        font-size: 25px;
    }
    .parrafo{
        font-size: 15px;
    }
    #Cursos{
        flex-direction: column;
        margin-right: 10%;
    }
    .imagen2{
        margin-top: 1%;
        width: 40%;
    }
    .capa_react img{
        width: 100%;
    }
    .texto2{
        margin-left: 0%;
        margin-right: 10%;
    }
    .imagen1 img{
        width: 60%;
    }
    .tamañoCuadro2{
        width:100%;
        margin-left: 2%;
        padding: 4%;
    }
    .todoInicio{
        flex-direction: column;
        margin-right: 10%;
    }
    .profesion{
        margin: 3%;
    }
    .menu{
        width: 20%;
    }
    .imagenMia img{
        width: 50%;
        margin-top: 10%;
    }
    button{
        font-size: 20px;
        padding: 15px;
        margin: 2%;
    }
}
`
export default GlobalStyles;