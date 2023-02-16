import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  // useEffect (un hook) => Sirve para disparar efectos secundarios
  // No se vuelve a ejecturar el fetch 
  useEffect(() => {
    // #1 forma
    // getGifs(category).then(newimages => setImages(newimages));
    // #2 forma
    getImages();
  }, [])

  return (
    <>
      <h3>{ category }</h3>

      <div className='card-grid'>
        {
          images.map(( image ) =>( 
            <GifItem 
              key={ image.id } 
              { ...image } /> 
          ))
        }
      </div>

    </>
  );
}
