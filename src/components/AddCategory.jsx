import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const value = inputValue.trim();

    if ( value.length === 0 ) return;

    // setCategories( (categories) => [ inputValue, ...categories ] );
    onNewCategory(value);
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
