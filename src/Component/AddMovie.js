import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const movieValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(10).url(),
    trailer: yup.string().required().min(10).url(),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      trailer: "",
      rating: "",
      summary: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      addMovie(values);
    },
  });

  const navigate = useNavigate();

  const addMovie=(values)=>{
    fetch("https://65f16b85034bdbecc76270a5.mockapi.io/movie",{
      method:"POST",
      body:JSON.stringify(values),
      headers:{"Content-Type":"application/json"},
    })

    .then(()=>navigate("/portal/movie"));
  };

  return (
    <div className="Container">

      <h1>Add movie</h1>
      <form className="FormInputs" onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Movie Name:"
          variant="outlined"
          value={formik.values.name}
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name? formik.errors.name:null}
        />
        <TextField
          id="outlined-basic"
          label="Movie Trailer"
          variant="outlined"
          value={formik.values.trailer}
          name="trailer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.trailer && formik.errors.trailer}
          helperText={formik.touched.trailer && formik.errors.trailer? formik.errors.trailer:null}
        />
        <TextField
          id="outlined-basic"
          label="Movie Poster:"
          variant="outlined"
          value={formik.values.poster}
          name="poster"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          error={formik.touched.poster && formik.errors.poster}
          helperText={formik.touched.poster && formik.errors.poster? formik.errors.poster:null}

        />
        <TextField
          id="outlined-basic"
          label="Movie Rating:"
          variant="outlined"
          value={formik.values.rating}
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.rating && formik.errors.rating}
          helperText={formik.touched.rating && formik.errors.rating? formik.errors.rating:null}
        />
        <TextField
          id="outlined-basic"
          label="Movie Summary:"
          variant="outlined"
          value={formik.values.summary}
          name="summary"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.summary  && formik.errors.summary}
          helperText={formik.touched.summary && formik.errors.summary? formik.errors.summary:null}
        />

        <Button variant="contained" type="submit">
          Add Movie
        </Button>
      </form>
    </div>
  );
}
