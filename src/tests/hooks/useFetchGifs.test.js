import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el custom hook useFetchGifs', () => {

  const category = 'category';

  test('Debe de retornar el estado inicial', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual( [] );
    expect( loading ).toBe( true );

  });


  test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
    
    // para esperar por un nuevo cambio por el estado se usa waitForNextUpdate
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) ); 
    await waitForNextUpdate();
    // const { data, loading } = result.current;

    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );

  })
  

})