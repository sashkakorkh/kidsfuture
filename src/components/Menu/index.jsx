import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Divider, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LinkText = styled(Typography)`
  color: ${(props) => props.theme.typography.fontColor};
  font-weight: ${(props) => props.theme.typography.const.fontWeight.normal};
  text-transform: uppercase;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const menuItems = [
  {
    text: 'Про нас',
    link: '/#about',
  },
  {
    text: 'Співпраця',
    link: '/#cooperation',
  },
  {
    text: 'Команда',
    link: '/#team',
  },
  {
    text: 'Новини',
    link: '/#news',
  },
  {
    text: 'Донати',
    link: '#',
  },
  {
    text: 'Партнери',
    link: '#',
  },
];

function Menu({ tag, styleConfig }) {
  const { itemStyle, containerStyle } = styleConfig;
  const theme = useTheme();
  const ElementTag = tag;
  return (
    <>
      {menuItems.map((item, index) => (
        <React.Fragment key={item.text}>
          <ElementTag style={containerStyle}>
            <NavLink to={item.link} style={{ textDecoration: 'none' }}>
              <LinkText sx={itemStyle} style={itemStyle} noWrap>
                {item.text}
              </LinkText>
            </NavLink>
          </ElementTag>
          {tag === 'li' && index !== menuItems.length - 1 && (
            <Divider
              style={{
                color: theme.palette.colors.divider,
                borderColor: theme.palette.colors.divider,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default Menu;

Menu.propTypes = {
  tag: PropTypes.string.isRequired,
  styleConfig: PropTypes.shape({
    containerStyle: PropTypes.instanceOf(Object),
    itemStyle: PropTypes.instanceOf(Object),
  }).isRequired,
};
