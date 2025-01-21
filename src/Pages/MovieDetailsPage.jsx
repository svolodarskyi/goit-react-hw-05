import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchInfoByMovieId } from '../services/api';
import Container from '../components/Container/Container';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useRef } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const locationUseRef = useRef(location.state ?? '/movies');

  const {
    data: movieInfo,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchInfoByMovieId(movieId),
    queryKey: ['movie', movieId],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error ...</div>;
  }

  return (
    <section
      style={{
        backgroundImage: `
      linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65)), 
      url(https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path})`,

        height: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Link className="goBackBtn" to={locationUseRef.current}>
          Go Back
        </Link>
        <div className="imageDetailsTop">
          <div className="imageDetailsPoster">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path}`}
              alt="poster"
            />
          </div>
          <div className="movieDescription">
            <div className="description">
              <h2 className="movieTitle">{movieInfo?.title}</h2>

              <p>{movieInfo?.overview}</p>
            </div>
            <nav>
              <ul className="castReviewContainer">
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="movieDetailOutletWrapper">
          <Outlet />
        </div>
      </Container>
    </section>
  );
};

export default MovieDetailsPage;
