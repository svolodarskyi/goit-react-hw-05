import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'));

export const App = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
