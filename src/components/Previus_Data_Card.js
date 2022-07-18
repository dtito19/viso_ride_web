import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../pages/Title';

function preventDefault(event) {
  event.preventDefault();
}

const PreviousDataCard=() =>{
  return (
    <React.Fragment>
      <Title>Ingizo kabla ya leo</Title>
      <Typography component="p" variant="h4">
        1000
      </Typography>
     
    </React.Fragment>
  );
}

export default PreviousDataCard;