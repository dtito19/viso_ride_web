import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Box 
      alignContent='center'
      alignItems='center'
      >
      <Title>Jumla</Title>
      <Typography component="p" variant="h4">
        1300
      </Typography>
      </Box>
      
   
 
    </React.Fragment>
  );
}