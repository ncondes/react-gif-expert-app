import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// lo que se hace con este mock es fingir cualquier llamada a este archivo y controlar la informacion que eso va a responder
jest.mock('../../hooks/useFetchGifs')

describe('Prueba con GifGrid', () => {

  const category = 'category';

  test('Deberia de hacer match con el snapshot', () => {

    // con mockReturnValue falseamos la data del objeto
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow( <GifGrid
      category={ category }
    /> );
    
    expect( wrapper ).toMatchSnapshot();

  });
  
  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    
    const gifs = [{
      id: 'abc',
      url: 'https://url.com',
      title: 'titulo',
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow( <GifGrid
      category={ category }
    /> );

    expect( wrapper ).toMatchSnapshot();
    // mirar que no existe un elemnto p ( loading ) cuando ya se cargo data
    expect( wrapper.find('p').exists() ).toBe( false );
    // como seleccionar componentes / y revisar si la cantidad de items en el grid son iguales a los objetos cargados en gifs
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )

  })
  
})