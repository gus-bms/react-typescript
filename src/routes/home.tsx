import React, { useState, useEffect } from 'react';
import MovieLIst from '../components/movieList';
import Dotwaves from '../loader/dotWave.loaders';
import MovieInfo from '../types/movieInfo';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieInfo[]>([]);

  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    //   .then((res) => res.json())
    //   .then((json) => setMovies(json.data.movies));
    // setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <Dotwaves />
      ) : (
        <div>
          {movies.map((data) => (
            <MovieLIst
              id={data.id}
              key={data.id}
              medium_cover_image={data.medium_cover_image}
              title={data.title}
              summary={data.summary}
              genres={data.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
