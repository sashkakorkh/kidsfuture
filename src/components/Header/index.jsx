import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  IconButton,
  List,
  Stack,
  SwipeableDrawer,
  Toolbar,
  useTheme,
} from '@mui/material';
import Menu from '../Menu/index';
import Footer from '../Footer';
import { OutlinedButton } from '../Button';
import { images } from '../../assets/images';
import sprites from '../../images/svg/sprites.svg';

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
    <>
      <AppBar position="static">
        <Toolbar>
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
                <img
                  src={images.logoBlue}
                  alt="logotype of the fund hands of adult in blue color holding child hands"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </Box>
            </NavLink>
            <Stack
              direction="row"
              sx={{
                marginLeft: {
                  md: '.8rem',
                  lg: '2rem',
                },
                display: { xs: 'none', md: 'flex' },
                gap: { md: '.56rem', lg: '0' },
              }}>
              <Menu tag="div" styleConfig={headerMenuStyle} />
            </Stack>
          </Stack>
          <Box sx={{ marginRight: { xs: '1rem', md: '0.5rem', xl: '0' } }}>
            <OutlinedButton textColorBlack text="Підтримати фонд" btnSupport />
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
            <svg className="icon">
              <use href={`${sprites}#menu`} />
            </svg>
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
                borderRadius: '1.43rem 0 0 1.43rem',
                border: '4px solid',
                borderColor: theme.palette.colors.mainfirst,
              },
            }}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                justifyContent: 'end',
                padding: '0.3rem',
                marginRight: { xs: '.2rem', sm: '0' },
              }}>
              <svg style={{ width: '16px', height: '16px' }} className="icon">
                <use href={`${sprites}#close_icon`} />
              </svg>
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
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Header;
