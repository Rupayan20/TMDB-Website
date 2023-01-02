import React from "react";
import "./Navbar.css";
import { SiThemoviedatabase } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">TMDB</a>
          </div>
          <div className="links">
            <ul>
              <li id="movieType">
                <a href="">
                  <span>Movies</span>
                  <span>
                    <SiThemoviedatabase />
                  </span>
                </a>
                 <ul id="moviesType">
                           <li><a href="#Upcoming Movies">Upcoming</a></li>
                           <li><a href="#Top Rated Movies">Top Rated</a></li>
                           <li><a href="#Popular Movies">Popular</a></li>

                        </ul> 
              </li>
              <li>
                <a href="">
                  <span>TV Shows</span>
                  <span>
                    <MdLocalMovies />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>People</span>
                  <span>
                    <BsFillPeopleFill />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>More</span>
                  <span>
                    <CgMoreO />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
