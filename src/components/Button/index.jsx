import React from 'react';
import styled from '@emotion/styled';
import { Button, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const StyledBtn = styled(Button)`
  font-weight: ${(props) => props.theme.typography.const.fontWeight.bold};
  border-radius: 48px;
  box-shadow: unset;
  text-wrap: nowrap;
  line-height: 1;
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
    height: { xs: '36px' },
    width: { xs: '136px' },
    fontSize: { xs: '0.812rem' },
    textAlign: 'center',
    backgroundColor: 'transparent',
    textTransform: 'capitalize',
    fontWeight: theme.typography.const.fontWeight.bold,
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

export function ContainedButton({ textColorBlack, text, wider }) {
  const theme = useTheme();
  const btnBlueStyle = {
    padding: '0',
    height: {
      xs: '34px',
      md: '49px',
      lg: '43px',
      xl: '54px',
    },
    width: {
      xs: '128px',
      md: '205px',
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
    '&:hover': {
      backgroundColor: theme.palette.colors.mainfirst,
    },
  };

  const btnWhiteStyle = {
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
    '&:hover': {
      backgroundColor: theme.palette.colors.mainfirst,
    },
  };
  const styles = textColorBlack ? btnWhiteStyle : btnBlueStyle;
  return (
    <StyledBtn variant="contained" sx={styles}>
      {text}
    </StyledBtn>
  );
}

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColorBlack: PropTypes.bool.isRequired,
  btnSupport: PropTypes.bool.isRequired,
};

ContainedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColorBlack: PropTypes.bool.isRequired,
  wider: PropTypes.bool,
};

ContainedButton.defaultProps = {
  wider: false,
};
