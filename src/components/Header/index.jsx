import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  List,
  Stack,
  SwipeableDrawer,
  Toolbar,
  useTheme,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Menu from '../Menu/index';
import Footer from '../Footer';
import { OutlinedButton } from '../Button';

function Header() {
  const [open, setMenuOpen] = useState(false);
  const theme = useTheme();
  const burgerMenuStyle = {
    containerStyle: {
      padding: '12px 0',
    },
    itemStyle: {
      fontSize: {
        xs: '1rem',
        md: '0.75rem',
        xl: '1rem',
      },
    },
  };
  const headerMenuStyle = {
    containerStyle: {
      fontStretch: { md: 'extra-condensed' },
    },
    itemStyle: {
      fontSize: {
        xs: '1rem',
        md: '0.825rem',
        lg: '1rem',
      },
      marginRight: { lg: '1.5rem' },
      lineHeight: 'normal',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  };

  const toggleDrawer = (openMenu) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMenuOpen(openMenu);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          padding: '0',
          margin: '0',
        }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              padding: {
                xs: '1rem 1.28rem 1rem 1.25rem',
                md: '1rem 2.2rem 1rem 2rem',
                lg: '1.06rem 3.1rem 1.06rem 2.8rem',
              },
            }}>
            <Stack direction="row" alignItems="center">
              <NavLink to="/">
                <Box
                  sx={{
                    height: {
                      xs: '48px',
                      md: '45px',
                      lg: '69px',
                    },
                    width: {
                      xs: '48px',
                      md: '45px',
                      lg: '69px',
                    },
                  }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/small-logo.png`}
                    alt="Logo"
                    height="100%"
                    width="100%"
                  />
                </Box>
              </NavLink>
              <Stack
                direction="row"
                sx={{
                  marginLeft: {
                    md: '4%',
                    lg: '5%',
                    xl: '9%',
                  },
                  display: { xs: 'none', md: 'flex' },
                  gap: { md: '10px', lg: '0', xl: '4px' },
                }}>
                <Menu tag="div" styleConfig={headerMenuStyle} />
              </Stack>
            </Stack>
            <Box sx={{ marginRight: { md: '1%', xl: '0' } }}>
              <OutlinedButton
                textColorBlack
                text="Підтримати фонд"
                btnSupport
              />
            </Box>
            <IconButton
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                lineHeight: '1',
                display: {
                  xs: 'block',
                  md: 'none',
                },
                padding: '0',
                marginLeft: { xs: '9px', md: '0' },
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/menu.png`}
                alt="burger-menu-icon"
                width="100%"
                height="100%"
              />
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
                onClick={toggleDrawer(false)}
                sx={{
                  color: theme.palette.colors.mainsecond,
                  justifyContent: 'end',
                  padding: '0',
                  marginLeft: { xs: '10px', sm: '0' },
                }}>
                <CloseRoundedIcon fontSize="large" />
              </IconButton>
              <List style={{ margin: '0 25px 31px 25px', padding: '0' }}>
                <Menu
                  tag="li"
                  styleConfig={burgerMenuStyle}
                  functionToggle={toggleDrawer}
                  open={open}
                />
              </List>
            </SwipeableDrawer>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Header;
