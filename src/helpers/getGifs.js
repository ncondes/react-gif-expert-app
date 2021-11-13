export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=wX9iI032XuGayYX75yxgGMealZha5skn`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      // ? si se tienen imagenes entonces obtengalas
      url: img.images?.downsized_medium.url,
    }
  })

  // En este archivo no se tiene acceso a setImages entonces solo retornamos gif ( Promesa que resuelve la coleccion de mis imagenes )
  // setImages( gifs );
  return gifs;

};