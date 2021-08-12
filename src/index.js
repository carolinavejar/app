import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';
import Navegacion from './Navegacion';

const divRoot = document.querySelector('#counter');
const divNavegacion = document.querySelector('#navegacion');

ReactDOM.render(<CounterApp valor = {100} />, divRoot);
ReactDOM.render(<Navegacion />, divNavegacion);