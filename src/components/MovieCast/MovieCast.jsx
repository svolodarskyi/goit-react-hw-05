import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchCreditsByMovieId } from '../../services/api';
import headShotPlaceholder from '../../assets/placeholder-headshot.png';

const MovieCast = () => {
  const { movieId } = useParams();
  const {
    data: movieCast,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchCreditsByMovieId(movieId),
    queryKey: ['cast', movieId],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error ...</div>;
  }
  return (
    <ul className={css.castList}>
      {movieCast.cast.map(item => (
        <li key={item.cast_id}>
          <div>
            <img
              src={
                item?.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : headShotPlaceholder
              }
              alt={`${item.name}`}
            />
            <p>{item.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
