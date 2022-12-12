type MovieInfo = {
    id: number;
    key: number;
    title?: string;
    summary?: string;
    medium_cover_image?: string;
    url?: string;
    background_image?: string;
    genres?: (string | number)[];
  };

export default MovieInfo;