import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function CardForImage({ item }) {
  return (
    <Box sx={{ maxWidth: { xs: '256px', md: '588px' }, margin: '0 auto' }}>
      <img src={item} width="100%" height="100%" alt={item} />
    </Box>
  );
}

export default CardForImage;

CardForImage.propTypes = {
  item: PropTypes.string.isRequired,
};
