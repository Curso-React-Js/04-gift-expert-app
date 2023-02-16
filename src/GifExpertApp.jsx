import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    const category = categories.find(category => category.toUpperCase() === newCategory.toUpperCase());
    // if ( categories.includes(newCategory) ) return;
    if ( category !== undefined ) return;

    setCategories( [newCategory, ...categories] );
    // setCategories( cat => [ ...cat, 'Valorant' ]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) } />

      { 
        categories.map(category => (
            <GifGrid key={ category } category={ category } />
          )
        )
      }
    </>
  );
}
