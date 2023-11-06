import React from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Divider,
  Grid,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
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

const menuTextStyle = {
  fontSize: {
    xs: '1rem',
    md: '0.75rem',
    /* lg: '0.75rem', */
    xl: '1rem',
  },
};

const menuItems = [
  {
    text: 'Про нас',
    link: '#',
  },
  {
    text: 'Співпраця',
    link: '#',
  },
  {
    text: 'Команда',
    link: '#',
  },
  {
    text: 'Новини',
    link: '#',
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
export function BurgerMenu() {
  const theme = useTheme();
  return (
    <>
      {menuItems.map((item, index) => (
        <>
          <ListItem
            key={item.text}
            to={item.link}
            style={{ padding: '12px 0' }}>
            <NavLink
              to={item.link}
              style={{
                textDecoration: 'none',
                margin: '0 auto',
                padding: '0',
              }}>
              <LinkText sx={menuTextStyle}>{item.text}</LinkText>
            </NavLink>
          </ListItem>
          {index !== menuItems.length - 1 && (
            <Divider
              style={{
                color: theme.palette.colors.divider,
                borderColor: theme.palette.colors.divider,
              }}
            />
          )}
        </>
      ))}
    </>
  );
}

export function RowMenu() {
  return (
    <>
      {menuItems.map((item) => (
        <NavLink
          key={item.text}
          to={item.link}
          style={{ textDecoration: 'none' }}>
          <LinkText sx={menuTextStyle}>{item.text}</LinkText>
        </NavLink>
      ))}
    </>
  );
}
