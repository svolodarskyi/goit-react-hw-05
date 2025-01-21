import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeyword } from '../services/api';
import Container from '../components/Container/Container';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryString = searchParams.get('query') ?? '';
  const handleChangeQuery = queryValue => {
    if (!queryValue) {
      searchParams.delete('query');
      return setSearchParams(searchParams);
    }
    searchParams.set('query', queryValue);

    setSearchParams(searchParams);
    setQuery(queryValue);
  };

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchMoviesByKeyword({ query: query ? query : queryString }),
    queryKey: ['movies', query],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error ...</div>;
  }

  return (
    <section>
      <SearchBar handleChangeInQuery={handleChangeQuery} query={queryString} />
      <Container>
        <MovieList trendingMovies={queryString ? movies.results : []} />
      </Container>
    </section>
  );
};

export default MoviesPage;
