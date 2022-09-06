import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

import { useNavigate } from "react-router-dom";

const Leftbar = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/", { replace: true });
  };

  return (
    <>
      <List>
        <ListItemButton component="a" href="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="All Boda" />
        </ListItemButton> */}

        <ListItemButton component="a" href="/registerStation">
          <ListItemIcon>
            <TwoWheelerIcon />
          </ListItemIcon>
          <ListItemText primary="Sajili Dereva" />
        </ListItemButton>

        <ListItemButton onClick={handleSubmit}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </>
  );
};

export default Leftbar;
