import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');

  // handleInputChange
  const handleInputChange = e => {
    setInputValue( e.target.value )
    // console.log('handledInputChange llamado');
  };

  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
      // para no tener que recibir la prop de category, podemos usar una funcion flecha para recibir el valor previo que se tenia de estado en categories.
      setCategories( prevCategories => [ inputValue, ...prevCategories ] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      {/* el p a continuacion se pone para hacer test */}
      <p> { inputValue } </p>
      <input
        type='text'
        placeholder='Example: Los Simpsons...'
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

