// Clase 41 - Tarea

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import { Button } from 'react-materialize';

const CounterApp = ({valor = 1000}) => {

    const [ counter, setCounter ] = useState( valor );
    const handleAdd = () => {
        setCounter(counter + 1);
    };
    const handleMin = () => {
        setCounter(counter - 1);
    };
    const handleReset = () => {
        setCounter(valor);
    };
    return (
        <>
            <h1>Pruebas contador</h1>
            <h4>{counter}</h4>
            <Button onClick={ handleAdd }> +1 </Button>
            <Button onClick={ handleReset }> Reset </Button>
            <Button onClick={ handleMin }> -1 </Button>           
        </>
       
    );
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;