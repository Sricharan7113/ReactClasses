import React, { useState } from "react";
import Counter from "./Counter";
// import Movie1 from "./Assets/MoviePoster1.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

import "./Movie.css";
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";


export default function Movie({ movieTake }) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const ratingStyles = {
    color: movieTake.rating >= 8.5 ? "green" : "red",
  };

  return (
    <div className="Container MovieContainer">
      <Card className="Card">
        <CardMedia
          className="MoviePoster"
          sx={{ height: 350 }}
          image={movieTake.poster}
          alt="Movie Poster"
        />

        <CardContent className="MovieSpecs">
          <h2 className="MovieName">
            {movieTake.name}

            <IconButton
              color="primary"
              className="DescriptionIcon"
              aria-label="Toggle-Description"
              onClick={() => navigate(`/portal/view/${movieTake.id}`)}
            >
              <InfoIcon></InfoIcon>
            </IconButton>

            <IconButton
              color="primary"
              className="DescriptionIcon"
              aria-label="Toggle-Description"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <ExpandLessIcon fontSize="large" />
              ) : (
                <ExpandMoreIcon fontSize="large" />
              )}
            </IconButton>
          </h2>
          <h3 className="MovieRating" style={ratingStyles}>⭐{movieTake.rating}</h3>
        </CardContent>

        {/* <Button className="btn" onClick={() => setShow(!show)}>
          Description 
        </Button> */}

        {show ? <p className="MovieSummary">{movieTake.summary}</p> : null}

        <CardActions>
          <Counter />
          <IconButton
              color="primary"
              className="DescriptionIcon"
              aria-label="Toggle-Description"
              onClick={() => navigate(`/portal/edit/${movieTake.id}`)}
            >
              <EditIcon></EditIcon>
            </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
