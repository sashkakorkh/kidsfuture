import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import arrowSlider from '../../images/bgElements/arrowSlider.png';

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
        backgroundImage: `url(${arrowSlider}`,
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
  slidesToScroll,
}) {
  const lastVisibleSlide = currentSlide + slidesToScroll - 1;
  const classToHideArrow = lastVisibleSlide >= totalSlides - 1 ? 'hidden' : '';
  return (
    <div
      className={`${className} ${classForPage} ${classToHideArrow} `}
      role="button"
      tabIndex={0}
      aria-label="Next"
      style={{
        ...style,
        display: 'block',
        backgroundImage: `url(${arrowSlider}`,
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
  slidesToScroll: PropTypes.number.isRequired,
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
  const classForDiv = currentPath === '/' ? 'slick-home' : '';
  const responsiveSliderHome = [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const sliderResponsive = currentPath === '/' ? responsiveSliderHome : null;
  const cardsToShowScroll = currentPath === '/' ? 3 : 1;
  const cardAdaptiveHeight = currentPath !== '/';
  const settings = {
    dots: showPagination,
    infinite: false,
    autoplay: false,
    slidesToShow: cardsToShowScroll,
    slidesToScroll: cardsToShowScroll,
    responsive: sliderResponsive,
    initialSlide: 0,
    adaptiveHeight: cardAdaptiveHeight,
    mobileFirst: true,
    touchThreshold: 10,
    waitForAnimate: true,
    nextArrow: (
      <SampleNextArrow
        slidesToScroll={cardsToShowScroll}
        currentSlide={currentSlide}
        totalSlides={items.length}
        classForPage={classForArrow}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        currentSlide={currentSlide}
        classForPage={classForArrow}
        totalSlides={items.length}
      />
    ),
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          autoplay={settings.autoplay}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          responsive={settings.responsive}
          initialSlide={settings.initialSlide}
          adaptiveHeight={settings.adaptiveHeight}
          nextArrow={settings.nextArrow}
          prevArrow={settings.prevArrow}
          mobileFirst={settings.mobileFirst}
          beforeChange={settings.beforeChange}
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
