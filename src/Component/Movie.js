import React, { useState } from "react";
import Counter from "./Counter";
// import Movie1 from "./Assets/MoviePoster1.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

import "./Movie.css";
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { api } from "./global";

export default function Movie({ movieTake , getMovies }) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const ratingStyles = {
    color: movieTake.rating >= 8.5 ? "green" : "red",
  };

  const deleteMovie = (id) => {
        // fetch('https://65f16b85034bdbecc76270a5.mockapi.io/moviapi/movie/${id}', {
        fetch(`${api}/delete/${id}`, {
          method: 'DELETE',
        })
          .then(() => getMovies())
          .then(() => alert('This movie has been deleted.'));
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
              onClick={() => navigate(`/portal/view/${movieTake._id}`)}
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
          <h3 className="MovieRating" style={ratingStyles}>
            ⭐{movieTake.rating}
          </h3>
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
            onClick={() => navigate(`/portal/edit/${movieTake._id}`)}
          >
            <EditIcon></EditIcon>
          </IconButton>

          <IconButton
            sx={{ marginLeft: "auto" }}
            aria-label="Toggle-Description"
            onClick={() => deleteMovie(movieTake._id)}
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

// import React, { useState } from 'react';
// import './Movie.css';
// import Counter from './Counter';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import InfoIcon from '@mui/icons-material/Info';
// import IconButton from '@mui/material/IconButton';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

// export default function Movie({ movieTake, getMovies }) {
//   const ratingStyle = {
//     color: movieTake.rating >= 8.5 ? 'green' : 'red',
//   };
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);

//   const deleteMovie = (id) => {
//     fetch('https://65f16b85034bdbecc76270a5.mockapi.io/moviapi/movie/${id}', {
//       method: 'DELETE',
//     })
//       .then(() => getMovies())
//       .then(() => alert('This movie has been deleted.'));
//   };

//   return (
//     <Card className='movie-container' sx={{ maxWidth: 345 }}>
//       <CardMedia className="movie-poster" height="140" alt="VIKRAM" image={movieTake.poster} />
//       <CardContent className='movie-spec'>
//         <Typography gutterBottom variant="h5" component="div">{movieTake.name}</Typography>
//         <CardActions>
//           <IconButton aria-label="Toggle-Description" color="primary" onClick={() => setShow(!show)}>
//             {show ? <ExpandLessIcon fontSize='large' /> : <ExpandMoreIcon fontSize='large' />}
//           </IconButton>
//           <IconButton aria-label="Toggle-Description" onClick={() => navigate(`/portal/view/${movieTake.id}`)} color="primary">
//             <InfoIcon fontSize='large' />
//           </IconButton>
//         </CardActions>
//         <h3 style={ratingStyle} className='movie-rating'>⭐{movieTake.rating}</h3>
//       </CardContent>
//       {show ? <p className='movie-summary'>{movieTake.summary}</p> : null}
//       <CardActions>
//         <Counter />
//         <IconButton sx={{ marginLeft: 'auto' }} aria-label="Toggle-Description" onClick={() => navigate(`/portal/edit/${movieTake.id}`)}>
//           <EditIcon color="secondary" />
//         </IconButton>
//         <IconButton sx={{ marginLeft: 'auto' }} aria-label="Toggle-Description" onClick={() => deleteMovie(movieTake.id)}>
//           <DeleteIcon color="secondary" />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }
