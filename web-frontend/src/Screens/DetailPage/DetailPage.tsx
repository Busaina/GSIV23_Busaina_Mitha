import { ContainerStyled, DeatailsContainer } from "./DetailPageStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL } from "../../apiConfig";

interface CrewType {
  job: string;
  name: string;
}
interface CastType {
  known_for_department: string;
  name: string;
}
interface MoviesType {
  title: string;
  runtime: number;
  credits: {
    crew: CrewType[];
    cast: CastType[];
  };
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string;
}

const DetailPage = () => {
  const selectedMovieId = useSelector((state: RootState) => state.movie);
  const [movies, setMovies] = useState({});
  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${TMDB_BASE_URL}/movie/${selectedMovieId}?api_key=${tmdbApiKey}&language=en-US&append_to_response=credits`
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovieDetails();
    return () => {};
  }, [tmdbApiKey, selectedMovieId]);
  if (!selectedMovieId) {
    return <div>Loading...</div>;
  }
  const {
    title,
    vote_average,
    release_date,
    runtime,
    credits,
    overview,
    poster_path,
  } = movies as MoviesType;
  const time = `${String(Math.floor(runtime / 60)).padStart(2, "0")}:${String(
    runtime % 60
  ).padStart(2, "0")}`;
  const Director = credits?.crew
    .filter((value) => value.job === "Director")
    .map((value) => value.name);

  const Actors = credits?.cast
    .filter((value) => value.known_for_department === "Acting")
    .map((value) => value.name)
    .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
    .slice(0, 2);
  return (
    <ContainerStyled>
      <img
        src={`${TMDB_IMAGE_BASE_URL}/${poster_path}`}
        height={240}
        width={180}
        alt="Not avalaible"
      />
      <DeatailsContainer>
        <Typography fontSize={24} fontWeight="bold">
          {title} ({vote_average})
        </Typography>
        <Typography fontSize={20}>
          {release_date?.slice(0, 4)} | {time} | {Director}
        </Typography>
        <Typography fontSize={20}>
          Cast: {Actors?.map((actor) => `${actor},`)} …
        </Typography>
        <Typography fontSize={20}>Description: {overview}</Typography>
      </DeatailsContainer>
    </ContainerStyled>
  );
};

export default DetailPage;
