import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const StyledSupportBtn = styled(Button)`
  /*   color: ${(props) => props.theme.typography.fontColor}; */
  font-weight: ${(props) => props.theme.typography.const.fontWeight.bold};
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 48px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

function SupportButton({ header }) {
  return (
    <StyledSupportBtn
      variant="outlined"
      style={{
        outline: header ? '1px solid #4366E3' : '1px solid white',
        color: header ? 'black' : 'white',
        textWrap: 'nowrap',
      }}
      sx={{
        padding: '0',
        height: {
          xs: '32px',
          md: '33px',
          lg: '43px',
          /*   xl: '43px', */
        },
        width: {
          xs: '125px',
          md: '180px',
          lg: '232px',
          /* xl: '232px', */
        },
        fontSize: {
          xs: '0.7rem',
          md: '0.875rem',
          lg: '1.125rem',
        },
      }}>
      Підтримати фонд
    </StyledSupportBtn>
  );
}

export default SupportButton;

SupportButton.propTypes = {
  header: PropTypes.bool.isRequired,
};
