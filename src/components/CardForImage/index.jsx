import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';

function CardForImage({ item }) {
  return (
    <Stack sx={{ maxWidth: { xs: '256px' } }}>
      <img src={item} width="100%" height="100%" alt={item} />
    </Stack>
  );
}

export default CardForImage;

CardForImage.propTypes = {
  item: PropTypes.string.isRequired,
};
