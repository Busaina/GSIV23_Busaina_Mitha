import { NavbarStyled, SearchBarStyled } from "./NavbarStyled";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { InputBase, IconButton, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { resetMovies, setShowMovies } from "../../Redux/reducers/showMovies";
import { TMDB_BASE_URL } from "../../apiConfig";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const isDashboardPage = location.pathname === "/";
  const handleHomeClick = () => {
    navigate("/");
  };
  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
  const fetchSearchResults = async (query: string) => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/search/movie?api_key=${tmdbApiKey}&query=${query}`
      );
      const JSONResponse = await response.json();
      dispatch(setShowMovies(JSONResponse.results));
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query.trim() === "") {
      dispatch(resetMovies(true));
      setSearchQuery("");
    } else {
      dispatch(resetMovies(false));
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  };
  return (
    <NavbarStyled>
      {isDashboardPage ? (
        <SearchBarStyled data-testid="search-bar">
          <SearchIcon sx={{ color: "#4A4A4A" }} />
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "inherit" }}
            value={searchQuery}
            onChange={handleInputChange}
          />
        </SearchBarStyled>
      ) : (
        <Typography variant="h6">Movie Details</Typography>
      )}
      <IconButton onClick={handleHomeClick}>
        <HomeIcon fill="#4A4A4A" />
      </IconButton>
    </NavbarStyled>
  );
};

export default Navbar;
