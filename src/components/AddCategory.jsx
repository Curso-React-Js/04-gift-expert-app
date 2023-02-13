import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if ( inputValue.trim().length === 0 ) return;

    setCategories( (categories) => [ inputValue, ...categories ] );
    setInputValue(''); // limpiar value del input
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange } />
    </form>
  );
}
