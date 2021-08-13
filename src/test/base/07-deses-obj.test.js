import { retornaArreglo } from '../../base/07-deses-arr';
import '@testing-library/jest-dom';
describe("Pruebas de 07- .... .test.js", ()=> {
    test('debe retornar objeto ', () => {
        const [letras, numeros] = retornaArreglo();
        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number');
                
    })
})

