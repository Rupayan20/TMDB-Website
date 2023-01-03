import "./App.css";

import Request from "./components/Request.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchBar />}/>

        <Route path="/:slug" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
