import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './Login';
import Caja from './Caja';
import PantallaPublico from './PantallaPublico';
import TurnosPage from './TurnosPage';
import Crud from './Crud';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Crud />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
