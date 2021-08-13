import React from 'react';
import PrimeraApp  from '../PrimeraApp';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Pruebas de Primera App .... .test.js", ()=> {
    test('debe retornar Hola soy Carito', () => {
        const saludo = `Hola soy Carito`;
        const { getByText } = render ( < PrimeraApp saludo = { saludo } />);

        expect ( getByText(saludo) ).toBeInTheDocument();
    });

})