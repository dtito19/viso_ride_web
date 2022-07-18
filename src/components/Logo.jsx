import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import viso_logo from '../assets/viso_logo.png';

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src={viso_logo} alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
