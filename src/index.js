import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Datos from './mis_datos';
import React_card from './react_card';

let info =["Victor Serrano Reyes", "vicvane21@outlook.com"];
let [nombre,mail] = info;
ReactDOM.render(
  <React.StrictMode>
    <React_card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
