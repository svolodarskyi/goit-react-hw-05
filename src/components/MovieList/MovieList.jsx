import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.movieList}>
        {trendingMovies.map(mov => (
          <li key={mov.id}>
            <Link to={`/movies/${mov.id}`} state={location}>
              <img
                className={css.posterImage}
                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                alt={`${mov.title} poster`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
