import React from 'react';
import MovieInfo from '../types/movieInfo';
import { Link } from 'react-router-dom';

const MovieLIst = ({ id, medium_cover_image, title, summary, genres }: MovieInfo) => {
  return (
    <div>
      <div>
        <div>
          <img src={medium_cover_image} />
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>{genres != undefined ? genres.map((g: React.Key | null | undefined) => <li key={g}>{g}</li>) : null}</ul>
        </div>
      </div>
    </div>
  );
};

export default MovieLIst;
