import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  const defaultCategories = [ 'One Punch' ];
  const [ categories, setCategories ] = useState( defaultCategories );

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory
        setCategories={ setCategories }
      />
      <hr />


      { categories.map( category => (
        <GifGrid
          category={ category }
          key={ category }
        />
      ))}


    </>
  )
}

