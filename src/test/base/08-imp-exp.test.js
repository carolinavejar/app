import { getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes  from '../../data/heroes';
import '@testing-library/jest-dom';
describe("Pruebas de 08- .... .test.js", ()=> {
    test('debe retornar un heroe por ID ', () => {
        const id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id);
        expect( heroe ).toEqual( heroeData );
                
    });

    test('debe retornar un undefined si heroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined );      
    });

    test('debe retornar arreglo con los heroes de DC', () => {
        const owner = "DC";
        const heroesOwner = getHeroesByOwner( owner );
        const heroesData = heroes.filter( h => h.owner === owner);
        expect( heroesOwner ).toEqual( heroesData );      
    });


    test('debe retornar arreglo con los heroes de Marvel, debe ser largo 2', () => {
        const owner = "Marvel";
        const heroesOwner = getHeroesByOwner( owner );
        expect( heroesOwner.length ).toEqual( 2 );      
    });
})

