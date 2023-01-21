import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css"

const ShowSummary = () => {
  const [show, setShow] = useState({});
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => setShow(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div key={show.id} className="container" >
      <h1>Summary </h1>
      <div className="row mt-3">
        <div className="col-md-4 col-12">
          <img loading="lazy" src={show.image?.medium} alt={show.name} />
        </div>
        <div className="col-md-8 col-12">
          <h2>{show.name}</h2>
          <p>Genres : {show.genres?.join(", ")}</p>
          <p>Language : {show.language}</p>
          <p>Data : {show.premiered}</p>
          <p>Ratings : {show.rating?.average}</p>
          <p>{show.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
