import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"

const url = "https://api.tvmaze.com/search/shows?q=all";

function ShowsList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setShows(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid">
    <h1 className="text-center">TV Maze API</h1>
      <div className="row text-center">
          {shows.map((show) => (
            <div className="col-md-3 col-12 cards" key={show.show.id}>
            <div>  
            <h2>{show.show.name}</h2>
              <img loading="lazy" src={show.show.image?.medium} alt={show.show.name} />
                <p>Genres : {show.show.genres?.join(", ")}</p>
                <p>Language : {show.show.language}</p>
                <p>Data : {show.show.premiered}</p>
                <p>Ratings : {show.show.rating?.average}</p>
                <Link to={`/shows/${show.show.id}`}>
                  <button className="mybtn">View Summary</button>
                </Link>
                </div>
            </div>
          ))}
       
      </div>
    </div>
  );
}

export default ShowsList;
