import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material';

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
  const theme = useTheme();
  const currentPath = location.pathname;
  const classForArrow = currentPath === '/' ? 'arrow-home' : 'arrow-news';
  const classForDiv = currentPath === '/' ? 'slick-home' : '';
  const responsiveSliderHome = [
    {
      breakpoint: theme.breakpoints.values.xl,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: theme.breakpoints.values.md,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const responsiveSliderNews = [
    {
      breakpoint: theme.breakpoints.values.xs,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const sliderResponsive =
    currentPath === '/' || currentPath.startsWith('/#news')
      ? responsiveSliderHome
      : responsiveSliderNews;

  const settings = {
    dots: showPagination,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: sliderResponsive,
    initialSlide: 0,
    adaptiveHeight: currentPath !== '/#news',
    mobileFirst: true,
    touchThreshold: 10,
    waitForAnimate: true,
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
  };
  /* if (sliderResponsive) {
    const screenWidth = window.innerWidth;

    sliderResponsive.forEach((breakpoint) => {
      if (screenWidth <= breakpoint.breakpoint) {
        settings.slidesToShow = breakpoint.settings.slidesToShow;
        settings.slidesToScroll = breakpoint.settings.slidesToScroll;
      }
    });
  } */
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          initialSlide={settings.initialSlide}
          autoplay={settings.autoplay}
          nextArrow={settings.nextArrow}
          prevArrow={settings.prevArrow}
          responsive={settings.responsive}
          beforeChange={settings.beforeChange}
          adaptiveHeight={settings.adaptiveHeight}
          mobileFirst={settings.mobileFirst}
          touchThreshold={settings.touchThreshold}
          waitForAnimate={settings.waitForAnimate}>
          {items.map((item, index) => (
            <div
              key={typeof item === 'object' ? item.id : `string-${index}`}
              className={classForDiv}>
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
