import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movie.css";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";

const Movie = () => {
  //getting the details of the movie
  const [movie, movieDetail] = useState({
    language: [],
    title: "",
    overview: "",
    popularity: "",
    genres: [],
    release_date: "",
    origin_country: [],
    vote_count: "",
    vote_average: "",
    budget: "",
    revenue: "",
    image: "",
    banner: "",
    tagline: "",
  });
  

  useEffect(() => {
    const load = async () => {
      const getMovie = await axios.get(
        `https://api.themoviedb.org/3/movie/${window.location.pathname.substring(
          1
        )}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      
      movieDetail({
        language: getMovie.data.spoken_languages,
        title: getMovie.data.title,
        overview: getMovie.data.overview,
        popularity: Math.ceil(parseInt(getMovie.data.popularity) / 100),
        genres: getMovie.data.genres,
        release_date: getMovie.data.release_date,
        origin_country: getMovie.data.production_countries,
        vote_count: getMovie.data.vote_count,
        vote_average: getMovie.data.vote_average,
        budget: getMovie.data.budget,
        revenue: getMovie.data.revenue,
        image: getMovie.data.poster_path,
        banner: getMovie.data.backdrop_path,
        tagline: getMovie.data.tagline,
      });
    };
    load();
  }, []);
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <div
        className="showMovie container" /* style={{
          backgroundSize: "cover",

          backgroundImage: `url(${
            "https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.banner
          })` ,background:"rotate(30deg)",
          backgroundPosition: "center",backgroundRepeat:"no-repeat"
        }}  */
      >
        <div className="movieContent px-5 py-5">
          <div className="poster px-3 py-3">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.image}`}
            />
          </div>
          <div className="contents px-3 py-3">
            
              <h1>
                {movie.title}
                <span>({movie.release_date.substring(0, 4)})</span>
              </h1>
              <p>
                {movie.release_date}
                <span>
                  (
                  {movie.origin_country.map((object) => {
                    return object.iso_3166_1;
                  })}
                  )
                </span>
              </p>
              <p>
                {movie.genres.map((object) => {
                  return <span>{object.name},</span>;
                })}
              </p>
              <p>{movie.tagline}</p>
              <p>Overview</p>
              <p>{movie.overview}</p>
              <p>
                Budget:{movie.budget}&nbsp;&nbsp;&nbsp;
                <span>Revenue:{movie.revenue}</span>
              </p>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movie;
