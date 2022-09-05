import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href='/dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="All Boda" />
    </ListItemButton>

    

    <ListItemButton  component="a" href='/registerStation'>
      <ListItemIcon>
        <TwoWheelerIcon />
      </ListItemIcon>
      <ListItemText primary="Sajili Dereva" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

