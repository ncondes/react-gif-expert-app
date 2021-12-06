import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en GifGridItem.js', () => {

  const title = 'title';
  const url = 'url'
  const wrapper = shallow( <GifGridItem 
    title={ title }
    url={ url }
  /> )

  test('Debe de mostrar el componente correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  // Este text se realiza para saber si el parrafo en el componente tiene como contenido -> title
  test('Debe de tener un parrafo con el title', () => {
    
    const parrafo = wrapper.find('p');
    expect( parrafo.text().trim() ).toBe( title );

  });

  test('Debe de tener la imagen igual al url y alt de los props, lo mismo con el title', () => {
    
    const img = wrapper.find('img');
    // para saber el elemento se usa .html()
    // para saber las props del elemento se usa .props()
    // o si se desea conocer una de manera individual se usa .prop('property') => ejemplo: img.prop('src')
    // console.log( img.props().src );
    
    expect( img.prop( 'src' )).toBe( url );
    expect( img.prop( 'alt' )).toBe( title );

  });
  
  test('Deberia de tener la clase animate__fadeInUp', () => {
    
    const div = wrapper.find('div');

    // 2 formas de hacerlo:
    // expect( div.prop( 'className' ).includes( 'animate__fadeInUp' )).toBe( true );
    expect( div.hasClass( 'animate__fadeInUp' )).toEqual( true );

  });
  
  

})