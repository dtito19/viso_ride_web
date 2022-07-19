import * as React from 'react';
import {Typography, } from '@mui/material/';
import Title from './Title';







const TodayCard=() =>{

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <React.Fragment>
      <Title variant='h4'>Ingizo la leo</Title>
      <Typography component="p" variant="h4">
        300
      </Typography>
      <Typography variant='h4' color="text.secondary" sx={{ flex: 1 }}>
        {date}
      </Typography>
     
    
    </React.Fragment>
  );
}

export default TodayCard;