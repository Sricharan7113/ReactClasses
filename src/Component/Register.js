import React from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "./global";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const movieValidationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(8),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      Register(values)
    },
  });

  const navigate = useNavigate();

  const Register = (values)=>{
    fetch(`${api}/register`,{
      method:'POST',
      body : JSON.stringify(values),
      headers : {"Content-Type":"application/json"},
    })
    
    .then(()=>{
      alert("Registered Sucessfully");
    })

    .then(()=> navigate("/login"))
  }
  return (
    <div className="Container">
      <h1>Register</h1>
      <form className="FormInputs" onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Username:"
          variant="outlined"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
          helperText={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
        />
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <TextField
          id="outlined-basic"
          label="Password:"
          variant="outlined"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />

        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
