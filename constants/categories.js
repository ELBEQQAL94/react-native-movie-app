// API
import {request} from '../api';

const categories = [
  {
    id: 1,
    name: 'Trending',
    request: request.fetchTrending,
  },
  {
    id: 2,
    name: 'Top Rated',
    request: request.fetchTopRated,
  },
  {
    id: 3,
    name: 'Action',
    request: request.fetchActionMovies,
  },
  {
    id: 4,
    name: 'Comedy',
    request: request.fetchComedyMovies,
  },
  {
    id: 5,
    name: 'Horror',
    request: request.fetchHorrorMovies,
  },
  {
    id: 6,
    name: 'Romance',
    request: request.fetchRomanceMovies,
  },
  {
    id: 7,
    name: 'Mystery',
    request: request.fetchMystery,
  },
  {
    id: 8,
    name: 'Sci-Fi',
    request: request.fetchSciFi,
  },
  {
    id: 9,
    name: 'Western',
    request: request.fetchWestern,
  },
  {
    id: 10,
    name: 'Animation',
    request: request.fetchAnimation,
  },
];

export default categories;
