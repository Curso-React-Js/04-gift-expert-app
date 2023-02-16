import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }

  // useEffect (un hook) => Sirve para disparar efectos secundarios
  // No se vuelve a ejecturar el fetch 
  useEffect(() => {
    // #1 forma
    // getGifs(category).then(newimages => setImages(newimages));
    // #2 forma
    getImages();
  }, [])

  return {
    images,
    isLoading
  }
}
