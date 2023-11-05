import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from './small-logo.png';

const LinkText = styled(Typography)`
  color: ${(props) => props.theme.typography.fontColor};
  font-weight: ${(props) => props.theme.typography.const.fontWeight.normal};
  text-transform: uppercase;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const SupportBtn = styled(Button)`
  color: ${(props) => props.theme.typography.fontColor};
  font-weight: ${(props) => props.theme.typography.const.fontWeight.bold};
  text-transform: uppercase;
  border-radius: 48px;
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
  { text: 'Про нас', link: '#' },
  { text: 'Співпраця', link: '#' },
  { text: 'Команда', link: '#' },
  { text: 'Новини', link: '#' },
  { text: 'Донати', link: '#' },
  { text: 'Партнери', link: '#' },
];

function Header() {
  const [open, setState] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (openMenu) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(openMenu);
  };

  return (
    <Container>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          padding: '0',
          margin: '0',
        }}>
        <Container maxWidth="xl" sx={{ padding: '0' }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              padding: {
                xs: '1rem 1.28rem 1rem 1.25rem',
                md: '1rem 2.2rem 1rem 2rem',
                lg: '1.06rem 3.1rem 1.06rem 2.8rem',
                /* xl: '1.06rem 3.1rem 1.06rem 2.8rem' */
              },
            }}>
            <Stack direction="row" alignItems="center">
              <NavLink to="/">
                <Box
                  sx={{
                    height: {
                      xs: '48px',
                      md: '45px',
                      lg: '69px' /* xl: '69px' */,
                    },
                    width: {
                      xs: '48px',
                      md: '45px',
                      lg: '69px' /* xl: '69px' */,
                    },
                  }}>
                  <img src={logo} alt="Logo" height="100%" width="100%" />
                </Box>
              </NavLink>
              <Stack
                direction="row"
                spacing={{ md: 1, lg: 1.5, xl: 1.5 }}
                sx={{
                  marginLeft: {
                    md: '1.25rem',
                    lg: '3.94rem' /* xl: '3.94rem' */,
                  },
                  display: { xs: 'none', md: 'flex' },
                }}>
                {menuItems.map((item) => (
                  <NavLink
                    key={item.text}
                    to={item.link}
                    style={{ textDecoration: 'none' }}>
                    <LinkText sx={menuTextStyle}>{item.text}</LinkText>
                  </NavLink>
                ))}
              </Stack>
            </Stack>
            <NavLink to="#">
              <SupportBtn
                variant="outlined"
                sx={{
                  outline: '1px solid #4366E3',
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
                    /* xl: '1.125rem', */
                  },
                }}>
                Підтримати фонд
              </SupportBtn>
            </NavLink>
            <IconButton
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              style={{ color: theme.palette.colors.mainsecond }}
              sx={{
                mr: 2,
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}>
              <MenuRoundedIcon fontSize="large" />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              PaperProps={{
                style: {
                  width: '200px',
                  height: 'auto',
                  backgroundColor: '#FFF',
                  borderRadius: '23px 0px 0px 23px',
                  border: '4px solid',
                  borderColor: theme.palette.colors.mainfirst,
                },
              }}>
              <IconButton
                style={{
                  color: theme.palette.colors.mainsecond,
                  justifyContent: 'end',
                  paddingTop: '12px',
                }}>
                <CloseRoundedIcon
                  onClick={toggleDrawer(false)}
                  fontSize="large"
                />
              </IconButton>
              <List style={{ margin: '0 auto 31px', padding: '0 29px' }}>
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
              </List>
            </SwipeableDrawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}

export default Header;
