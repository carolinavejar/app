import React from 'react';
import CounterApp  from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';

// No las toma de setupTests.js , así que las dejaré aquí por ahora
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe("Pruebas de Counter App .... .test.js", ()=> { 
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe de mostrar <CounterApp /> correctamente', () => {
       
        expect (wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor que se muestra por defecto en valor de 100', () => {
        const wrapper = shallow(<CounterApp valor = { 100 } />);

        const textoParrafo = wrapper.find('h4').text().trim();

        console.log(`texto parrafo ${textoParrafo}`);

        expect (textoParrafo).toBe( `100` );
    });

    test('debe incremetar contador', () => {
        wrapper.find('Button').at(0).simulate('click');

        const counterText = wrapper.find('h4').text().trim();

        expect(counterText).toBe('1001');
    });

    test('debe resetear contador', () => {
        const wrapper = shallow(<CounterApp  valor  = {500} />);
        wrapper.find('Button').at(0).simulate('click');
        wrapper.find('Button').at(0).simulate('click');
        wrapper.find('Button').at(1).simulate('click');

        const counterText = wrapper.find('h4').text().trim();

        expect(counterText).toBe('500');
    })

    test('debe incremetar contador', () => {
        wrapper.find('Button').at(2).simulate('click');

        const counterText = wrapper.find('h4').text().trim();

        expect(counterText).toBe('999');
    });
});

