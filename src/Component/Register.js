import React from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

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
      console.log(values);
    },
  });

  return (
    <div className="Container">
      <h1>Register</h1>
      <form className="FormInputs" onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Username:"
          variant="outlined"
          value={formik.values.username}
          name="name"
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
