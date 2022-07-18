import * as React from 'react';
import {Typography, } from '@mui/material/';
import Title from '../pages/Title';







const TodayCard=() =>{



  return (
    <React.Fragment>
      <Title>Ingizo la leo</Title>
      <Typography component="p" variant="h4">
        300
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        14 July 2022
      </Typography>
     
    
    </React.Fragment>
  );
}

export default TodayCard;