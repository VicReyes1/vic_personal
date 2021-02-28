import React from "react";
import Mi_perfil from './mi_perfil.jpg'
import './react_card.css';


function React_card(){
    return(
        <div class ="caja">
            <div class = "imagenPerfil">
                <img id="mi_foto" src={Mi_perfil}/>
            </div>
            <div>
                <h2>Victor Serrano Reyes</h2>
                <p>vicvane21@outlook.com</p>
                <p>Instagram de mi empresa <a href="https://www.instagram.com/kings_pickss/">kings_pickss</a></p>
            </div>
        </div>    
    );
}

export default React_card;