import React from 'react';
import styled from '@emotion/styled';
import { Button, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const StyledBtn = styled(Button)`
  border-radius: 48px;
  box-shadow: unset;
  text-wrap: nowrap;
  line-height: normal;
  :hover {
    cursor: pointer;
  }
`;

export function OutlinedButton({ textColorBlack, text, btnSupport }) {
  const theme = useTheme();
  const btnSupportStyle = {
    padding: '0',
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
    textAlign: 'center',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    fontWeight: theme.typography.const.fontWeight.bold,
  };

  const btnDonateStyle = {
    padding: '0',
    height: { xs: '36px', md: '34px' },
    width: { xs: '136px', md: '145px' },
    fontSize: { xs: '0.812rem', md: '1rem' },
    textAlign: 'center',
    backgroundColor: 'transparent',
    textTransform: 'capitalize',
    fontWeight: theme.typography.const.fontWeight.normal,
  };
  const sxStyle = btnSupport ? btnSupportStyle : btnDonateStyle;
  return (
    <StyledBtn
      variant="outlined"
      style={{
        border: textColorBlack ? '1px solid #4366E3' : '1px solid white',
        color: textColorBlack ? 'black' : 'white',
      }}
      sx={sxStyle}>
      {text}
    </StyledBtn>
  );
}

export function ContainedButton({ btnName, text, wider, onClick }) {
  const theme = useTheme();
  const buttons = {
    btnBlue: {
      padding: '0',
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
      texAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: theme.typography.const.fontWeight.bold,
      backgroundColor: theme.palette.colors.mainsecond,
      color: 'white',
      borderRadius: '48px',
      boxShadow: 'unset',
      textWrap: 'nowrap',
      lineHeight: 'normal',
      '&:hover': {
        backgroundColor: theme.palette.colors.mainfirst,
        cursor: ' pointer',
      },
    },
    btnWhite: {
      padding: '0',
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
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: theme.typography.const.fontWeight.bold,
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '48px',
      boxShadow: 'unset',
      textWrap: 'nowrap',
      lineHeight: 'normal',
      '&:hover': {
        backgroundColor: theme.palette.colors.mainfirst,
        cursor: 'pointer',
      },
    },
    btnCurrency: {
      fontSize: { xs: '1.25rem', md: '1.5rem' },
      fontWeight: theme.typography.const.fontWeight.normal,
      width: { xs: '80px', md: '108px' },
      height: { xs: ' 45px', md: '72px' },
      lineHeight: 'normal',
      textTransform: 'uppercase',
      textAlign: 'center',
      borderRadius: { xs: '15px', md: '25px' },
      color: 'black',
      background: '#F99820',
      boxShadow: 'unset',
      textWrap: 'nowrap',
      '&:hover': {
        backgroundColor: theme.palette.colors.mainfirst,
        cursor: 'pointer',
      },
    },
  };

  return (
    <Button variant="contained" sx={buttons[btnName]} onClick={onClick}>
      {text}
    </Button>
  );
}

export function TextButton({ text, readBtn }) {
  const theme = useTheme();
  const textBtnBack = {
    textTransform: 'uppercase',
    fontWeight: theme.typography.const.fontWeight.bold,
    color: theme.palette.colors.mainsecond,
    lineHeight: 'normal',
    padding: '0',
    minWidth: '53px',
    marginTop: { xs: '17px', md: '48px' },
    fontSize: '1rem',
  };
  const textBtnRead = {
    textTransform: 'uppercase',
    fontWeight: theme.typography.const.fontWeight.bold,
    color: theme.palette.colors.mainsecond,
    lineHeight: 'normal',
    padding: '0',
    minWidth: '53px',
    fontSize: { xs: '0.875rem', md: '1rem' },
  };
  const textBtnStyles = readBtn ? textBtnRead : textBtnBack;
  return <StyledBtn sx={textBtnStyles}>{text}</StyledBtn>;
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
