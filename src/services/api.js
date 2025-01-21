import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults['accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_KEY}`;

axios.defaults.params = {
  language: 'en-US',
};

//https://developer.themoviedb.org/reference/trending-movies
export const fetchTrendingMovies = async params => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params,
  });
  return data;
};

export const fetchMoviesByKeyword = async params => {
  //setting additional defaults
  params['include_adult'] = 'false';
  const { data } = await axios.get(`/search/movie`, {
    params,
  });
  return data;
};

export const fetchInfoByMovieId = async moveId => {
  const { data } = await axios.get(`/movie/${moveId}`);
  return data;
};

export const fetchReviewsByMovieId = async moveId => {
  const { data } = await axios.get(`/movie/${moveId}/reviews`);
  return data;
};

export const fetchCreditsByMovieId = async moveId => {
  const { data } = await axios.get(`/movie/${moveId}/credits`);
  return data;
};
