import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
export const NavbarStyled = styled(AppBar)(({ theme }) => ({
  height: 64,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 1rem",
  color: "#4A4A4A",
}));
export const SearchBarStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#D8D8D8",
  borderRadius: 8,
  padding: "0.1rem 0.5rem",
  marginRight: "1rem",
  height: 40,
  width: 600,
}));
