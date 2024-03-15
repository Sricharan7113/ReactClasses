import React from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const movieValidationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(8),
   
  });

  const formik = useFormik({
    initialValues: {
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

      <h1>Login</h1>
      <form className="FormInputs" onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email? formik.errors.email:null}
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
          helperText={formik.touched.password && formik.errors.password? formik.errors.password:null}

        />
       
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
