import React, { useState, useEffect } from "react";
import Home from "./Home.js";
import Request from "./Request.js";
import axios from "axios";
import NavBar from "./Navbar.js";
import Background from "../banner.jpg";
import "./SearchBar.css";
import Footer from "./Footer.js";
import NewsLetter from "./NewsLetter.js";

const SearchBar = () => {

  //using hooks to get the typed data
  const [data, setData] = useState("");
 
  function getData(event) {
    setData(event.target.value);
  }

  return (
    <>
      <NavBar />
      <br />
      <br />

      <div className="Heading">
        <div
          className="container px-5 py-5"
          style={{
            backgroundSize: "cover",

            backgroundImage: `url(${Background})`,

            width: "100%",
            backgroundPosition: "center",
          }}
        >
          <div className="contents">
            <h1>Welcome.</h1>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <br />
          <br />
          <div className="searchBar">
            <span>
              <input
                type="text"
                placeholder="Search for topic..."
                onChange={getData}
                value={data}
              />
            </span>
          </div>
        </div>
      </div>

      <Home
        title="Upcoming Movies"
        fetchURL={Request.upcomingMovie}
        value={data}
      />
      
      <Home
        title="Top Rated Movies"
        fetchURL={Request.topRatedMovie}
        value={data}
      />
      <Home
        title="Popular Movies"
        fetchURL={Request.popularMovie}
        value={data}
      />
      
      <NewsLetter />
      <Footer />
    </>
  );
};

export default SearchBar;
