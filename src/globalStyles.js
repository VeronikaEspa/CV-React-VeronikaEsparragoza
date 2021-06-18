import {createGlobalStyle} from 'styled-components'
import SecundaryFont from './utils/fonts/The-Castle-Elizah.woff'
const GlobalStyles = createGlobalStyle`
html{
    scroll-behavior: smooth;
}
//Ubicado en App.js
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
// COLOR DE FONDO
.fondo_rojo{
    background-color: #8C1102;
}
//Estilos del scroll
body::-webkit-scrollbar{
    width:15px;
    background-color: #8C1102;
}
body::-webkit-scrollbar-thumb{
    background-color: #FEAE4F;
    border-radius: 30px;
}
//Margen de cursos, habilidades, inicio
.margen_izquierdo{
    margin-left: 10%;
}
.margen_derecho{
    margin-right: 10%
}
//Margen general
.margenComponentes{
    margin-top: 5%;
}
// CUADROS
.tamañoCuadro{
    width:70%;
    margin: 5%;
    margin-left: 10%;
    padding: 5%;
}
//Cuadro comentarios
.tamañoCuadro2{
    width:70%;
    margin-left: 2%;
    padding: 5%;
}
//Tipos de letras
.titulo{
    font-size: 40px;
    font-family: 'Elizah';
    margin: 0px 0px 20px 0px;
}
.parrafo{
    font-size: 20px;
    text-align: justify;
}
//Menu
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
    transform:scale(1.15);
}
button a {
    decorative-style: none;
}
// FUENTES
@font-face{
    font-family: "Elizah";
    src: local("The-Catle-Elizah"), url(${SecundaryFont}) format('woff');
    font-style: normal;
}

// RESPONSIVE
@media only screen and (min-width:750px) and (max-width:900px){
    //Margenes
    .margen_izquierdo{
        margin-left: 5%;
    }
    .margen_derecho{
        margin-right: 10%;
    }
    //Letras
    .titulo{
        font-size: 25px;
    }
    .parrafo{
        font-size: 15px;
    }
    //menu
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
    //Inicio
    .todoInicio{
        flex-direction: column;
        margin-right: 10%;
    }
    .profesion{
        margin: 3%;
    }
    //Imagen de inicio
    .imagen1 img{
        width: 60%;
    }
    //Reorganizar seccion Cursos
    #Cursos{
        flex-direction: column;
        margin-right: 10%;
    }
    //Imagen de Cursos
    .imagen2{
        margin-top: 1%;
        width: 40%;
    }
    //Imagen Habilidades
    .capa_react img{
        width: 100%;
    }
    //Texto inferior de habilidades
    .texto2{
        margin-left: 0%;
        margin-right: 10%;
    }
    //Cuadros
    .tamañoCuadro{
        margin:6%;
        width:70%;
    }
    .tamañoCuadro2{
        width:100%;
        margin-left: 2%;
        padding: 4%;
    }
}
`
export default GlobalStyles;