import React from 'react';
import { Button, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const defaultBtnStyles = {
  borderRadius: '48px',
  padding: '0',
  boxShadow: 'unset',
  textWrap: 'nowrap',
  lineHeight: 'normal',
  textAlign: 'center',
  ':hover': {
    cursor: 'pointer',
  },
};

export function OutlinedButton({ textColorBlack, text, btnSupport }) {
  const theme = useTheme();
  const outlinedDefaultStyles = {
    backgroundColor: 'transparent',
    border: textColorBlack
      ? `1px solid ${theme.palette.colors.mainsecond}`
      : '1px solid white',
    color: textColorBlack ? 'black' : 'white',
  };

  const btnSupportStyle = {
    ...defaultBtnStyles,
    ...outlinedDefaultStyles,
    height: {
      xs: '32px',
      md: '33px',
      lg: '43px',
    },
    width: {
      xs: '125px',
      md: '180px',
      lg: '232px',
    },
    fontSize: {
      xs: '0.7rem',
      md: '0.875rem',
      lg: '1.125rem',
    },
    textTransform: 'uppercase',
    fontWeight: theme.typography.const.fontWeight.bold,
    '&:hover': {
      border: `1px solid ${theme.palette.colors.mainfirst}`,
    },
  };

  const btnDonateStyle = {
    ...defaultBtnStyles,
    ...outlinedDefaultStyles,
    height: { xs: '36px', md: '34px' },
    width: { xs: '136px', md: '145px' },
    fontSize: { xs: '0.812rem', md: '1rem' },
    textTransform: 'capitalize',
    fontWeight: theme.typography.const.fontWeight.normal,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      border: '3px solid white',
      transform: 'scale(0.95)',
    },
  };
  const outlinedStyles = btnSupport ? btnSupportStyle : btnDonateStyle;
  return (
    <NavLink to="/#donate" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" sx={outlinedStyles}>
        {text}
      </Button>
    </NavLink>
  );
}

export function ContainedButton({ btnName, text, wider, onClick }) {
  const theme = useTheme();
  const buttons = {
    btnContainedBlue: {
      ...defaultBtnStyles,
      height: {
        xs: '34px',
        md: '49px',
        lg: '43px',
        xl: '54px',
      },
      width: {
        xs: '128px',
        md: '202px',
        lg: '186px',
        xl: '254px',
      },
      fontSize: {
        xs: '0.875rem',
        md: '1rem',
        xl: '1.25rem',
      },
      textTransform: 'uppercase',
      fontWeight: theme.typography.const.fontWeight.bold,
      backgroundColor: theme.palette.colors.mainsecond,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.colors.mainfirst,
      },
    },
    btnContainedWhite: {
      ...defaultBtnStyles,
      height: {
        xs: '34px',
        md: '41px',
      },
      width: {
        xs: '128px',
        md: wider ? '184px' : '154px',
      },
      fontSize: {
        xs: '0.875rem',
        md: '1rem',
      },
      textTransform: 'uppercase',
      fontWeight: theme.typography.const.fontWeight.bold,
      backgroundColor: 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: theme.palette.colors.mainfirst,
      },
    },
    btnContainedCurrency: {
      fontSize: { xs: '1.25rem', md: '1.5rem' },
      fontWeight: theme.typography.const.fontWeight.normal,
      width: { xs: '80px', md: '108px' },
      height: { xs: ' 45px', md: '72px' },
      lineHeight: 'normal',
      textTransform: 'uppercase',
      borderRadius: { xs: '15px', md: '25px' },
      color: 'black',
      background: theme.palette.colors.mainfirst,
      boxShadow: 'unset',
      textWrap: 'nowrap',
      '&:hover': {
        backgroundColor: theme.palette.colors.mainfirst,
        cursor: 'pointer',
      },
    },
  };

  return (
    <>
      {btnName !== 'btnContainedCurrency' && (
        <NavLink to="/#donate">
          <Button variant="contained" sx={buttons[btnName]}>
            {text}
          </Button>
        </NavLink>
      )}
      {btnName === 'btnContainedCurrency' && (
        <Button variant="contained" sx={buttons[btnName]} onClick={onClick}>
          {text}
        </Button>
      )}
    </>
  );
}

export function TextButton({ text, readBtn }) {
  const theme = useTheme();
  const textBtnStyles = {
    ...defaultBtnStyles,
    textTransform: 'uppercase',
    fontWeight: theme.typography.const.fontWeight.bold,
    color: theme.palette.colors.mainsecond,
    lineHeight: 'normal',
    padding: '0',
    minWidth: '53px',
    fontSize: { xs: '0.875rem', md: '1rem' },
    marginTop: readBtn ? undefined : { xs: '17px', md: '48px' },
  };
  return <Button sx={textBtnStyles}>{text}</Button>;
}

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColorBlack: PropTypes.bool.isRequired,
  btnSupport: PropTypes.bool.isRequired,
};

ContainedButton.propTypes = {
  text: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  wider: PropTypes.bool,
  onClick: PropTypes.func,
};

ContainedButton.defaultProps = {
  wider: false,
  onClick: () => {},
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  readBtn: PropTypes.bool.isRequired,
};
