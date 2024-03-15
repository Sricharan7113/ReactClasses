import "./App.css";
import AddMovie from "./Component/AddMovie";
import Register from "./Component/Register";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Component/Login";
import Home from "./Component/Home";
import NotFound from "./Component/NotFound";
import Portal from "./Component/Portal";
// import Movie from "./Component/Movie";
import MovieList from "./Component/MovieList";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Paper from '@mui/material/Paper'
import MovieDetail from "./Component/MovieDetail";
import EditMovie from "./Component/EditMovie";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}> 
        <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevtion={9}>
          
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={<Portal mode={mode} setMode={setMode} />} >
              <Route path="home" element={<Home />} />

              <Route path="addmovie" element={<AddMovie />} />
              <Route path="movie" element={<MovieList />} />
              <Route path="view/:id" element={<MovieDetail />} />
              <Route path="edit/:id" element={<EditMovie/>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
