import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test('debe de cambiar el valor de la caja del texto', () => {
    render( <AddCategory onNewCategory={ () => {} } /> );
    // screen.debug();
    
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {
      target: {
        value: 'Saitama'
      }
    }); // Disparar el evento
    
    // screen.debug();
    expect( input.value ).toBe('Saitama');
  });
  
  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); // funcion como un Mock => es una simulacion de esa funcion

    // render( <AddCategory onNewCategory={ () => {} } /> );
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form'); // se creo un aria-label para identificarlo

    fireEvent.input(input, {
      target: {
        value: inputValue
      }
    }); // Disparar el evento

    fireEvent.submit(form); // ejecuta el submit
    // screen.debug();

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled(); // Si se ha llamado la funcion
    expect( onNewCategory ).toHaveBeenCalledTimes(1); // Que la funcion ha sido llamado una vez
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Evalua que haya sido llamada con la caja de texto
  });

  test('no debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn(); // funcion como un Mock => es una simulacion de esa funcion

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const form  = screen.getByRole('form'); // se creo un aria-label para identificarlo
    fireEvent.submit(form); // ejecuta el submit

    expect( onNewCategory ).toHaveBeenCalledTimes(0); // Que no fue llamado
    expect( onNewCategory ).not.toHaveBeenCalled(); // Que no fue llamado
  });

});