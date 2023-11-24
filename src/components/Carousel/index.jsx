import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';

function Carousel({ items, slidesToShow, showPagination }) {
  const settings = {
    dots: showPagination,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={item.title}>
          <img src={item.imagePath} alt={item.title} />
          <p>{item.caption}</p>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      imagePath: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  slidesToShow: PropTypes.number.isRequired,
  showPagination: PropTypes.bool.isRequired,
};
