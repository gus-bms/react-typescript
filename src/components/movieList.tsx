import React, { useEffect, useState } from 'react';
import Dotwaves from '../loader/dotWave.loaders';

type MovieInfo = {
  id?: string;
  title?: string;
  summary?: string;
  medium_cover_image?: string;
  url?: string;
  background_image?: string;
  genres?: any;
};

const MovieLIst = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [movies, setMovies] = useState<MovieInfo[]>([]);

  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
    // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    //   .then((res) => res.json())
    //   .then((json) => setMovies(json.data.movies));
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Dotwaves />
      ) : (
        <div>
          {movies.map((data) => (
            <div key={data.id}>
              <img src={data.medium_cover_image} />
              <h2>{data.title}</h2>
              <p>{data.summary}</p>
              <ul>
                {data.genres.map((g: React.Key | null | undefined) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieLIst;
