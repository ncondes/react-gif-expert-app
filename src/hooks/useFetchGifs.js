import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // useEfect hace que la funcion getGifts la cual hace una peticion a una API, solo se haga una vez estableciendo la lista de dependencias ( poniendo los [] )

  // si la categoria llegara a cambiar, use effect no se volveria a reenderizar, pues se establecio [] para que se cargue una unica vez, pero para que useEffect vuelve a realizar un cambio cuando cambia el estado de categories basta con poner como lista de dependencia [ category ] pues es lo que estamos recibiendo como props

  useEffect( () => {

    getGifs( category )
      .then( imgs => {
        // setTimeout para simular una carga mas lenta
        setTimeout(() => {
          setState({
            data: imgs,
            loading: false,
          })
        }, 1500);
      })

  }, [ category ])

  return state;


}
