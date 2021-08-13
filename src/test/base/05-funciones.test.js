import { getUser } from '../../base/05-funciones';
import '@testing-library/jest-dom';
describe("Pruebas de 05- .... .test.js", ()=> {
    test('debe retornar objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        
        expect(user).toEqual(userTest);
        
    })
})

