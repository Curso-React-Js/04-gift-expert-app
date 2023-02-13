import { useState } from 'react';

import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([
    'One Punch',
    'Dragon Ball'
  ]);

  const onAddCategory = () => {
    setCategories( ['Valorant', ...categories] );
    // setCategories( cat => [ ...cat, 'Valorant' ]);
  }

  return (
    <>
      {/* Titulo */}

      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={ setCategories } />

      {/* Listado de Items (Gifs) */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      <ol>
        { 
          categories.map( category => {
            return <li key={ category }>{ category }</li>;
          })
        }
        {/* <li>ABC</li> */}
      </ol>
              {/* Gift Item */}
    </>
  );
}
