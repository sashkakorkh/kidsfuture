import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CardNewsItem({ item, setItem }) {
  const theme = useTheme();
  const handleButtonClick = () => {
    setItem(item);
  };
  return (
    <Box
      sx={{
        width: { xs: '320px' },
        height: { xs: '240px' },
        textAlign: 'left',
      }}>
      <img src={item.imagePath} alt={item.title} width="100%" height="100%" />
      <Typography
        variant="h4"
        sx={{
          marginTop: { xs: '16px' },
          fontSize: { xs: '1.125rem' },
          lineHeight: 'normal',
          fontWeight: theme.typography.const.fontWeight.bold,
        }}>
        {item.title}
      </Typography>
      <Typography
        style={{
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': 2,
          '-webkit-box-orient': 'vertical',
          textOverflow: 'ellipsis',
          whiteSpace: 'normal',
        }}
        sx={{ marginTop: { xs: '16px' } }}>
        {item.text}
      </Typography>
      <NavLink to="/news">
        <Button
          variant="text"
          sx={{
            textTransform: 'uppercase',
            fontWeight: theme.typography.const.fontWeight.bold,
            fontSize: { xs: '0.875rem' },
            color: theme.palette.colors.mainsecond,
            marginTop: { xs: '16px' },
            onClick: { handleButtonClick },
          }}>
          Читати
        </Button>
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
  setItem: PropTypes.func.isRequired,
};
