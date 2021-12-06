import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en el componente addCategory.js', () => {

  // se usa jest.fn() para conocer mas cosas de esta funcion como:
  // como fue llamada
  // fue llamada?
  // cuantas veces fue llamada?
  const setCategories = jest.fn();
  let wrapper;

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory
      setCategories={ setCategories }
    /> );
  })

  test('Debe de mostrarse correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Deberia de cambiar la caja de texto', () => {
    
    const input = wrapper.find('input');
    const value = 'Hola mundo'

    // para definir el evento de un input se hace {}
    input.simulate('change', {
      target: {
        value: value,
      }
    });

    expect( wrapper.find('p').text().trim() ).toBe( value )

  });
  
  test('No debe de postear la informacion con submit', () => {
    
    // simulamos el submit
    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    // saber si hemos llamado a la funcion 
    expect( setCategories ).not.toHaveBeenCalled();

  });

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    
    const value = 'Hola mundo';
    // 1. simular el input change
    // estamos simulando un evento input change en el cual estamos poniendo como evento el value= 'Hola mundo'
    wrapper.find('input').simulate('change', { target: { value } });
    // console.log( wrapper.find('input').prop('value'), 'antes del submit' );


    // 2. simular el submit del formulario
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    // 3. se debe haber llamado el set categories
    // con la siguiente linea se comprueba que se hizo el llamado a set categories
    expect( setCategories ).toHaveBeenCalled();
    // si se quisiera evaluar y asegurar de que la funcion setCategories se haya llamado con una funcion se haría
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ) 

    // 4. el value del input debe de estar vacio
    // console.log( wrapper.find('input').prop('value'), 'despues del submit' );
    expect( wrapper.find('input').prop('value') ).toBe('');


  });
   
})