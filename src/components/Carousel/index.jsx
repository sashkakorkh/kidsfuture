import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function SamplePrevArrow({
  className,
  style,
  onClick,
  currentSlide,
  classForPage,
}) {
  return (
    <div
      className={`${className} ${classForPage} ${
        currentSlide === 0 ? 'hidden' : ''
      }`}
      role="button"
      tabIndex={0}
      aria-label="Next"
      style={{
        ...style,
        display: 'block',
        backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/arrowSlider.png)`,
        backgroundRepeat: 'no-repeat',
        transform: 'rotate(180deg)',
        backgroundSize: 'contain',
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          onClick();
        }
      }}
    />
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    display: PropTypes.string,
    backgroundImage: PropTypes.string,
  }),
  classForPage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  currentSlide: PropTypes.number.isRequired,
};

SamplePrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};

function SampleNextArrow({
  className,
  style,
  onClick,
  currentSlide,
  totalSlides,
  classForPage,
}) {
  return (
    <div
      className={`${className} ${classForPage} ${
        currentSlide === totalSlides - 1 ? 'hidden' : ''
      } `}
      role="button"
      tabIndex={0}
      aria-label="Next"
      style={{
        ...style,
        display: 'block',
        backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/arrowSlider.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          onClick();
        }
      }}
    />
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    display: PropTypes.string,
    backgroundImage: PropTypes.string,
    transform: PropTypes.string,
  }),
  classForPage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
};

SampleNextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};

function Carousel({ items, showPagination, isLoading, renderContent }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;
  const classForArrow = currentPath === '/' ? 'arrow-home' : 'arrow-news';

  const settings = {
    dots: showPagination,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    adaptiveHeight: true,
    nextArrow: (
      <SampleNextArrow
        currentSlide={currentSlide}
        totalSlides={items.length}
        classForPage={classForArrow}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        currentSlide={currentSlide}
        classForPage={classForArrow}
      />
    ),
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          initialSlide={settings.initialSlide}
          autoplay={settings.autoplay}
          nextArrow={settings.nextArrow}
          prevArrow={settings.prevArrow}
          responsive={settings.responsive}
          beforeChange={settings.beforeChange}
          adaptiveHeight={settings.adaptiveHeight}>
          {items.map((item, index) => (
            <div key={typeof item === 'object' ? item.id : `string-${index}`}>
              {renderContent(item)}
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        imagePath: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  showPagination: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  renderContent: PropTypes.func.isRequired,
};
