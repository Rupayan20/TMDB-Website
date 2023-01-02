import React, { useEffect, useState } from "react";
import Request from "./Request.js";
import axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";

import './Home.css'

const Home = ({ title, fetchURL, value }) => {

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const getMovie = await axios.get(fetchURL);
        
        setMovies(getMovie.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    loadContent();
  }, []);
  function navigation(id){
      
      navigate('/'+id);
  }
  return (
    <>
      <div className="movieSeries my-5 "id={title}>
          <div className="container">
            <h3>{title}</h3>
            <div className="contents">
                
                
                        {movies.filter((object,id) => {
                            if (value == "") {return object;}
                            else if (object.title.toLowerCase().includes(value.toLowerCase())) {return object;}
                            })
                          .map((object,id) => {
                              return (
                              <>
                              <div className="movieItem px-2 py-2" key={id}>
                                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${object.poster_path}`}
                                            
                              
                                            onClick={()=>{navigation(object.id);}}/>
                                  <br/><br/>
                                  <p><b>{object.title}</b></p>
                                  <p style={{position:"relative",top:"-15px"}}>{object.release_date}</p>

                                  <button id="popularity">{Math.ceil(parseInt(object.popularity))}</button>&nbsp;&nbsp;<span>
                                  <button id="voteCount">{object.vote_count}</button>&nbsp;&nbsp;<span>
                                  <button id="voteAvg">{object.vote_average}</button></span></span>
                              </div>
                          </>)})}
                
            </div>
          </div>
      </div>
     
      
              
            
         
       
    </>
  );
};

export default Home;
