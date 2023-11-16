import React from 'react';
import { makeStyles } from '@mui/styles';

const triangleEl = makeStyles((theme) => ({
  imageContainer: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%', // Adjust styles for medium and larger screens
    },
    // Add more styles as needed
  },
  // Add more styles as needed
}));

const Triangle = (<img src={triangle} />)
