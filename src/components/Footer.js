import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer mt-5 py-5">
        <div className="container">
          <div className="logo">
            <ul>
              <li>
                <h1>
                  <a href="">TMDB</a>
                </h1>
              </li>
            </ul>
          </div>
          <div className="basics">
            <ul>
              <li>
                <h3>THE BASICS</h3>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">API</a>
              </li>
              <li>
                <a href="">Support Forums</a>
              </li>
            </ul>
          </div>
          <div className="involve">
            <ul>
              <li>
                <h3>GET INVOLVED</h3>
              </li>
              <li>
                <a href="">Contribution Bible</a>
              </li>
              <li>
                <a href="">Add New Movie</a>
              </li>
              <li>
                <a href="">Add New TV Show</a>
              </li>
            </ul>
          </div>
          <div className="community">
            <ul>
              <li>
                <h3>COMMUNITY</h3>
              </li>
              <li>
                <a href="">Guidelines</a>
              </li>
              <li>
                <a href="">Discussions</a>
              </li>
              <li>
                <a href="">Leaderboard</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="legal">
            <ul>
              <li>
                <h3>LEGAL</h3>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">API Terms of Uset</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
