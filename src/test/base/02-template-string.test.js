import { getSaludo } from '../base/02-template-string';
import '@testing-library/jest-dom';
describe("Pruebas de 02- .... .test.js", ()=> {
    test('debe retornar hola carolina ', () => {
        const nombre = "carito";
        
        const saludo = getSaludo( nombre );
        nombre && nombre.length > 0 ? expect( saludo ).toBe( 'Hola ' + nombre) :  expect( saludo ).toBe( 'Hola Carlitos' );
        
    })
})

