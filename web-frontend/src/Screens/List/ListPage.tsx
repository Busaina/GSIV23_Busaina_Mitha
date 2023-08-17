import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { ContainerStyled, Pagination } from "./ListPageStyled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovie } from "../../Redux/reducers/movie";
import { setShowMovies } from "../../Redux/reducers/showMovies";
import { RootState } from "../../Redux/store";
import { Button, Typography } from "@mui/material";
import { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL } from "../../apiConfig";

interface MovieRelease {
  release_date: string | number | Date;
}
export interface MovieType {
  id: string;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}
const ListPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [_movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const showMovies = useSelector((state: RootState) => state.showMovie.movie);
  const reset = useSelector((state: RootState) => state.showMovie.reset);
  const handleMovieClick = (movie: MovieType) => {
    dispatch(setMovie(movie.id));
  };
  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${TMDB_BASE_URL}/movie/popular?api_key=${tmdbApiKey}&sort_by=release_date.desc&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const sortedMovies = data.results.sort(
          (a: MovieRelease, b: MovieRelease) => {
            const aDate = new Date(a.release_date).getTime();
            const bDate = new Date(b.release_date).getTime();
            return bDate - aDate;
          }
        );
        setMovies(sortedMovies);
        dispatch(setShowMovies(sortedMovies));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [tmdbApiKey, reset, page]);
  return (
    <>
      <ContainerStyled>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : !showMovies?.length ? (
          <Typography>No Movies Found</Typography>
        ) : (
          showMovies.map((movie: MovieType) => (
            <Link
              key={movie.id}
              to={`/details`}
              onClick={() => handleMovieClick(movie)}
            >
              <Card
                id={movie.id}
                title={movie.title}
                description={movie.overview}
                rating={movie.vote_average}
                img={`${TMDB_IMAGE_BASE_URL}/${movie.poster_path}`}
              />
            </Link>
          ))
        )}
      </ContainerStyled>
      {showMovies?.length && !loading ? (
        <Pagination>
          <Button
            variant="contained"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button variant="contained" onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </Pagination>
      ) : null}
    </>
  );
};

export default ListPage;
