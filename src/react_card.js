import React from "react";
import './react_card.css';


function React_card({Mi_perfil,name:nombre, apellidoPaterno = 'Serrano',  apellidoMaterno = 'Reyes',correo:email,link, empresa:nombre_empresa}){
    return(
        <div class ="caja">
            <div class = "imagenPerfil">
                <img id="mi_foto" src={Mi_perfil}/>
            </div>
            <div>
                <h2>{`${nombre} ${apellidoPaterno} ${apellidoMaterno}`}</h2>
                <p>{email}</p>
                <p>Instagram de mi empresa <a href={link}>{nombre_empresa}</a></p>
            </div>
        </div>    
    );
}

export default React_card;