import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { TextButton } from '../Button';

function CardNewsItem({ item }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: '320px' },
        height: { xs: '240px' },
        textAlign: 'left',
      }}>
      <img
        src={item.imagePath[0]}
        alt={item.title}
        width="100%"
        height="100%"
      />
      <Typography
        variant="h4"
        sx={{
          marginTop: { xs: '15px' },
          fontSize: { xs: '1.125rem' },
          lineHeight: 'normal',
          fontWeight: theme.typography.const.fontWeight.bold,
        }}>
        {item.title}
      </Typography>
      <p className="clamp-text">{item.text}</p>
      <NavLink to={`/news/${item.title}`} style={{ textDecoration: 'none' }}>
        <TextButton text="Читати" />
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
