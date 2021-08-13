import { getImagen } from '../../base/11-async-await';

describe("Pruebas de 11- .... .test.js", ()=> {
    test('debe retornar url de la imagen ', async () => {
        const url = await getImagen();
        console.log(`url ${url}`);
        expect ( url.includes("https://") ).toBe( true );
    });

})