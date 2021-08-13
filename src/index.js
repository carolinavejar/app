import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import Navegacion from './Navegacion';
import Gif from './GifApp';

const divRoot = document.querySelector('#counter');
const divNavegacion = document.querySelector('#navegacion');
const divGifRandom = document.querySelector('#gif');

ReactDOM.render(<CounterApp valor = {100} />, divRoot);
ReactDOM.render(<Navegacion />, divNavegacion);
ReactDOM.render(<Gif />, divGifRandom);