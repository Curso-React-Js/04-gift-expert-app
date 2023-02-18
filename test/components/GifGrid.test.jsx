import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// 1. Crea un mock
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    // 2. Simular los valores del mock del hook
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } /> );
    // screen.debug();

    expect( screen.getByText('Cargando...') );
    expect( screen.getAllByText(category) ); // verificar o limpiar 
  });

  describe('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '132',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> );
    // screen.debug();

    expect( screen.getAllByRole('img').length ).toBe(2);

  });

});