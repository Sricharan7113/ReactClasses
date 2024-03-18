import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "./global";

export default function MovieDetail() {
  const { id } = useParams();

  console.log(id);

  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  const ratingStyles = {
    color :movie.rating>=8.5?"green":"red",
  };

  useEffect(() => {
    // fetch(`https://65f16b85034bdbecc76270a5.mockapi.io/movie/${id}`, {
      fetch(`${api}/getone/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  console.log(movie);
  return (
    <div>
      <iframe
        width="1000"
        height="600"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share muted"
        allowfullscreen
      ></iframe>
      

      <div className="MovieDetailsContainer">
        <div className="MovieSpecs">
          <h2 className="MovieName">{movie.name}</h2>

          <h3  className="MovieRating" style={ratingStyles}>⭐{movie.rating}</h3>
        </div>
        <p className="MovieSummary">
            {movie.summary}
          </p>
      </div>
      <Button variant="contained" startIcon={<ArrowBackIos/>} onClick={()=> navigate(-1)}>
        
        </Button>
    </div>
  );
}
