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

});