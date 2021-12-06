import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {

  test('Deberia hacer match con el snapshot', () => {
    
    const wrapper = shallow( <GifExpertApp /> );
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('Deberia de mostrar una lista de categorias', () => {
    
    const categories = [ 'One punch', 'Dragon ball' ];
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );

  })
  
})