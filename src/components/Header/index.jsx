import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
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
import MenuIcon from '../MenuIcon';
import HeaderLogo from '../HeaderLogoItem';

function Header() {
  const [open, setMenuOpen] = useState(false);
  const theme = useTheme();
  const burgerMenuStyle = {
    containerStyle: {
      padding: '.67rem 0',
    },
    itemStyle: {
      fontSize: {
        xs: '1rem',
        md: '.75rem',
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
        md: '.725rem',
        lg: '1rem',
      },
      marginRight: { lg: '1.47rem' },
      marginLeft: { md: '.5rem', lg: '0' },
      lineHeight: 'normal',
      fontStretch: 'extra-condensed',
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
                      xs: '3rem',
                      md: '2.8rem',
                      lg: '4.3rem',
                    },
                    width: {
                      xs: '3rem',
                      md: '2.8rem',
                      lg: '4.3rem',
                    },
                  }}>
                  <HeaderLogo />
                </Box>
              </NavLink>
              <Stack
                direction="row"
                sx={{
                  marginLeft: {
                    md: '.8rem',
                    lg: '5%',
                    xl: '3.9rem',
                  },
                  display: { xs: 'none', md: 'flex' },
                  gap: { md: '.56rem', lg: '0' },
                }}>
                <Menu tag="div" styleConfig={headerMenuStyle} />
              </Stack>
            </Stack>
            <Box sx={{ marginRight: { xs: '1rem', md: '1%', xl: '0' } }}>
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
                  xs: 'inline-flex',
                  md: 'none',
                },
                padding: '0',
                marginLeft: { xs: '.6rem', md: '0' },
                width: '1.29rem',
                height: '1.2rem',
              }}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              PaperProps={{
                style: {
                  width: '55%',
                  height: 'auto',
                  backgroundColor: '#FFF',
                  borderRadius: '1.43rem 0px 0px 1.43rem',
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
                  marginRight: { xs: '.2rem', sm: '0' },
                }}>
                <CloseRoundedIcon fontSize="Large" />
              </IconButton>
              <List disablePadding sx={{ margin: '0 1.6rem 0 1.6rem' }}>
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
