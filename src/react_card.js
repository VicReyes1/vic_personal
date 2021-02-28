import React from "react";
import './react_card.css';

function React_card({miPerfil,name:nombre, apellidoPaterno = 'Serrano',  apellidoMaterno = 'Reyes',correo:email,link, empresa:nombreEmpresa}){
    return(
        <div id="contenido">
            <div class ="caja">
            <div class = "imagenPerfil">
                <img id="mi_foto" src={miPerfil}/>
            </div>
            <div>
                <h2>{`${nombre} ${apellidoPaterno} ${apellidoMaterno}`}</h2>
                <p>{email}</p>
                <p>Instagram de mi empresa <a href={link}>{nombreEmpresa}</a></p>
            </div>
        </div>  
        </div>
    
    );
}
export default React_card;