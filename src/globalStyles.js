import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Spartan-Medium.ttf'
import TitulosFont from './utils/fonts/SourceSerifPro-Bold.ttf'
import SecundaryFont from './utils/fonts/The-Castle-Elizah.woff'
const GlobalStyles = createGlobalStyle`

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
    font-size: 23px;
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
@media screen and (max-width:769px){
.ContainerText{
    background-color: red;
}
}
`
export default GlobalStyles;