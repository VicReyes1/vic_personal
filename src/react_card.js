import React from "react";
import './react_card.css';

let apellidos = ['Serrano','Reyes'];
let [apellidoPaterno, apellidoMaterno] = apellidos;
function React_card({Mi_perfil,name:nombre, primerApellido: apellidoPaterno, segundoApellido}){
    return(
        <div class ="caja">
            <div class = "imagenPerfil">
                <img id="mi_foto" src={Mi_perfil}/>
            </div>
            <div>
                <h2>{`${nombre} ${primerApellido} ${segundoApellido}`}</h2>
                <p>vicvane21@outlook.com</p>
                <p>Instagram de mi empresa <a href="https://www.instagram.com/kings_pickss/">kings_pickss</a></p>
            </div>
        </div>    
    );
}

export default React_card;