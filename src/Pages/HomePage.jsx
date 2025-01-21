import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import MovieList from '../components/MovieList/MovieList';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendingMovies } from '../services/api';

const HomePage = () => {
  const {
    data: trendingMovies,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchTrendingMovies(),
    queryKey: ['trending'],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error ...</div>;
  }

  return (
    <Section>
      <Container>
        <h2
          style={{
            textAlign: 'center',
            color: 'black',
            marginBottom: '2rem',
          }}
        >
          Trending Today
        </h2>
        <MovieList trendingMovies={trendingMovies.results} />
      </Container>
    </Section>
  );
};

export default HomePage;
