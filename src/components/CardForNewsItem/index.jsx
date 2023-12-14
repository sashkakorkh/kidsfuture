import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { TextButton } from '../Button';

function CardNewsItem({ item }) {
  const theme = useTheme();
  return (
    <Box
      className="slick-container"
      sx={{
        textAlign: 'left',
        margin: { xs: '0 auto', md: '0' },
      }}>
      <Box
        sx={{
          width: { xs: '320px', md: '219px', lg: '300px', xl: '436px' },
          height: { xs: '240px', md: '165px', lg: '226px', xl: '328px' },
        }}>
        <img
          src={item.imagePath[0]}
          alt={item.title}
          width="100%"
          height="100%"
        />
      </Box>
      <Typography
        variant="h4"
        sx={{
          marginTop: { xs: '15px' },
          fontSize: { xs: '1.125rem', lg: '1.5rem' },
          lineHeight: 'normal',
          fontWeight: theme.typography.const.fontWeight.bold,
        }}>
        {item.title}
      </Typography>
      <p className="clamp-text">{item.text}</p>
      <NavLink to={`/news/${item.title}`} style={{ textDecoration: 'none' }}>
        <TextButton text="Читати" readBtn />
      </NavLink>
    </Box>
  );
}

export default CardNewsItem;

CardNewsItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
