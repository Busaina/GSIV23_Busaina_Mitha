import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ListPage from "./Screens/List/ListPage";
import DetailPage from "./Screens/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
