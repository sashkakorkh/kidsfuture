import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
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
// export function BurgerMenu() {
//   const theme = useTheme();
//   return (
//     <>
//       {menuItems.map((item, index) => (
//         <>
//           <ListItem key={item.text} style={{ padding: '12px 0' }}>
//             <NavLink
//               to={item.link}
//               style={{
//                 textDecoration: 'none',
//                 margin: '0 auto',
//                 padding: '0',
//               }}>
//               <LinkText sx={menuTextStyle}>{item.text}</LinkText>
//             </NavLink>
//           </ListItem>
//           {index !== menuItems.length - 1 && (
//             <Divider
//               style={{
//                 color: theme.palette.colors.divider,
//                 borderColor: theme.palette.colors.divider,
//               }}
//             />
//           )}
//         </>
//       ))}
//     </>
//   );
// }

function Menu({ tag, styleConfig }) {
  const { itemStyle, containerStyle } = styleConfig;
  const ElementTag = tag;
  return (
    <>
      {menuItems.map((item) => (
        <ElementTag key={item.text} style={containerStyle}>
          <NavLink to={item.link} style={{ textDecoration: 'none' }}>
            <LinkText sx={itemStyle} style={itemStyle} noWrap="true">
              {item.text}
            </LinkText>
          </NavLink>
        </ElementTag>
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
