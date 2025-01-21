import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchReviewsByMovieId } from '../../services/api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const {
    data: movieReview,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchReviewsByMovieId(movieId),
    queryKey: ['review', movieId],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error ...</div>;
  }

  if (movieReview.results.length < 0) {
    return <div>No reviews yet. Leave first review ...</div>;
  }
  return (
    <ul className={css.reviewList}>
      {movieReview.results.map(item => (
        <li key={item.id}>
          <div>
            <p>{item.updated_at}</p>
            <p>Author: {item.author}</p>
            <p>
              {item.content.length < 800
                ? item.content
                : item.content.slice(0, 800) + '...'}
              {/* TODO: Create a reusable ReviewItem component to display review comments. 
    Include functionality to expand or collapse the full comment if the length exceeds 800 characters. */}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
