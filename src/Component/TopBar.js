import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function TopBar({mode, setMode}) {
  const navigate = useNavigate();

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className="TopBar">
      <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/portal/home")}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/portal/movie")}
        >
          Movies
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/portal/addmovie")}
        >
          Add Movie
        </Button>
      
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          style={{ marginleft: "60%" }}
          startIcon={
            mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
          }
          color="inherit"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? "dark" : "light"}Mode
        </Button>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
