import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes  from '../../data/heroes';

describe("Pruebas de 09- .... .test.js", ()=> {
    test('getHeroeByIdAsync debe retornar un heroe Async ', ( done ) => {
        const id = 2;
        getHeroeByIdAsync( id )
            .then((heroe)=> {
                expect( heroe ).toBe( heroes[1] );
                done();
            })                
    });

    test('getHeroeByIdAsync debe obtener error en el catch ', ( done ) => {
        const id = 100;
        getHeroeByIdAsync( id )
            .catch((err)=> {
                expect( err ).toBe( 'No se pudo encontrar el héroe' );
                done();
            })                
    });
})