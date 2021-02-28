import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Datos from './mis_datos';
import React_card from './react_card';
import miPerfil from './mi_perfil.jpg'

ReactDOM.render(
  <React.StrictMode>
    <React_card 
      miPerfil = {miPerfil}
      name = "Victor"
      correo = "vicvane21@outlook.com"
      link = {"https://www.instagram.com/kings_pickss/"}
      empresa = "kings_pickss"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
