import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (await await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  });

  return <h1>hello</h1>;
};

export default Detail;
