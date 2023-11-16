import React from 'react';
import styled from '@emotion/styled';
import { Button, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const StyledBtn = styled(Button)`
  font-weight: ${(props) => props.theme.typography.const.fontWeight.bold};
  border-radius: 48px;
  box-shadow: unset;
  :hover {
    cursor: pointer;
  }
`;

export function OutlinedButton({ textColorBlack, text }) {
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
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    fontWeight: theme.typography.const.fontWeight.bold,
    textWrap: 'nowrap',
  };
  return (
    <StyledBtn
      variant="outlined"
      style={{
        outline: textColorBlack ? '1px solid #4366E3' : '1px solid white',
        color: textColorBlack ? 'black' : 'white',
      }}
      sx={btnSupportStyle}>
      {text}
    </StyledBtn>
  );
}

export function ContainedButton({ textColorBlack, text }) {
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
    textWrap: 'nowrap',
    lineHeight: '1',
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
      md: '154px',
    },
    fontSize: {
      xs: '0.875rem',
      md: '1rem',
    },
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: theme.typography.const.fontWeight.bold,
    textWrap: 'nowrap',
    lineHeight: '1',
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
};

ContainedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColorBlack: PropTypes.bool.isRequired,
};
