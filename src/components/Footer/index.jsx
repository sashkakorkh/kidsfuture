import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import './index.scss';
import Menu from '../Menu/index';
import { OutlinedButton } from '../Button';

function Footer() {
  const theme = useTheme();
  const footerMenuStyle = {
    containerStyle: {},
    itemStyle: {
      color: 'white',
      fontWeight: theme.typography.const.fontWeight.bold,
      fontSize: {
        xs: '0.75rem',
        md: '1rem',
        xl: '1rem',
      },
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  };

  return (
    <footer
      style={{
        height: 'auto',
        backgroundColor: theme.palette.colors.mainsecond,
      }}>
      <Container
        maxWidth="100%"
        sx={{
          height: { xs: '', md: '267px', lg: '210px' },
          padding: {
            xs: '1.4rem 1.6rem 1.9rem 1rem',
            md: '2.5rem 5.25rem 3.12rem 3.25rem',
            lg: '3.1rem 2.25rem 1.4rem 2.2rem',
            xl: '3.1rem 4.5rem 1.4rem 6.2rem',
          },
          position: 'relative',
        }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
          }}>
          <NavLink to="/">
            <Box
              sx={{
                position: 'relative',
                top: { xs: '0', md: '-10px' },
                height: { xs: '36px', md: '74px', lg: '87px' },
                width: { xs: '44px', md: '87px', lg: '97px' },
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-white.png`}
                alt="Logo"
                height="100%"
                width="100%"
              />
            </Box>
          </NavLink>
          <Box
            display="grid"
            sx={{
              marginLeft: { lg: '0.5rem' },
              position: { md: 'absolute', lg: 'static' },
              bottom: { md: '70px' },
              left: { md: '50%' },
              transform: { md: 'translateX(-50%)', lg: 'none' },
              justifyItems: 'baseline',
              gap: { xs: '8px', md: '24px', lg: '24px' },
            }}
            gridTemplateColumns={{
              xs: '1fr',
              md: 'repeat(6, 1fr)',
              lg: 'repeat(2, 1fr)',
            }}
            gridTemplateRows={{ xs: '1fr', md: '1fr', lg: 'repeat(2, 1fr)' }}>
            <Menu tag="div" styleConfig={footerMenuStyle} />
          </Box>
          <Stack
            sx={{
              marginTop: '5px',
              marginLeft: { xs: '', md: '1.25rem' },
              position: { xs: 'absolute', md: 'static' },
              bottom: '29%',
              left: '50%',
            }}>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              sx={{
                marginBottom: { xs: '8px', md: '25px' },
                '&:hover img': {
                  animation: 'tilt-shaking .1s alternate ease infinite',
                },
              }}>
              <Box
                sx={{
                  height: { xs: '16px', md: '30px', lg: '31px' },
                  width: { xs: '16px', md: '30px', lg: '31px' },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/phone.png`}
                  alt="phone"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Link
                href="tel:+38093 549 8057"
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.75rem', md: '1rem' },
                  fontFamily: theme.typography.const.fontFamily.primary,
                  fontWeight: theme.typography.const.fontWeight.bold,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>
                +38093 549 8057
              </Link>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                gap: { xs: '8px', md: '16px' },
                '&:hover img': {
                  animation: 'transformToParallelogram 1s infinite',
                },
              }}>
              <Box
                sx={{
                  height: { xs: '16px', md: '30px', lg: '31px' },
                  width: { xs: '16px', md: '30px', lg: '31px' },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/mail.png`}
                  alt="mail"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Link
                href="mailto:info@kidsfuture.org.ua"
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.75rem', md: '1rem' },
                  fontFamily: theme.typography.const.fontFamily.primary,
                  fontWeight: theme.typography.const.fontWeight.bold,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>
                info@kidsfuture.org.ua
              </Link>
            </Box>
          </Stack>
          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                marginTop: { lg: '-7px' },
                position: { xs: 'absolute', lg: 'static' },
                top: { xs: '31%', md: '84px' },
                left: { xs: '48%', md: 'unset' },
                right: { xs: 'unset', md: '74px' },
              }}>
              <IconButton>
                <Link
                  href="https://www.facebook.com/kids.future.ua"
                  sx={{
                    '&:hover img': {
                      transform: 'scale(1.09)',
                    },
                  }}>
                  <Box
                    sx={{
                      width: { xs: '15px', md: '25px', lg: '30px' },
                    }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/fb-logo.png`}
                      alt="Logo"
                      height="100%"
                      width="100%"
                      style={{ transition: 'all 0.2s ease-in-out' }}
                    />
                  </Box>
                </Link>
              </IconButton>
              <IconButton>
                <Link
                  href="https://www.instagram.com/kids.future.ua"
                  sx={{
                    '&:hover img': {
                      transform: 'scale(1.09)',
                    },
                  }}>
                  <Box sx={{ width: { xs: '15px', md: '25px', lg: '30px' } }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/insta-logo.png`}
                      alt="Logo"
                      height="100%"
                      width="100%"
                    />
                  </Box>
                </Link>
              </IconButton>
              <IconButton>
                <Link
                  href="https://www.youtube.com/"
                  sx={{
                    '&:hover img': {
                      transform: 'scale(1.09)',
                    },
                  }}>
                  <Box sx={{ width: { xs: '15px', md: '25px', lg: '30px' } }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/youtube-logo.png`}
                      alt="Logo"
                      height="100%"
                      width="100%"
                    />
                  </Box>
                </Link>
              </IconButton>
            </Stack>
            <Link
              href="https://policies.google.com/privacy?hl=uk"
              sx={{
                fontSize: { xs: '0.75rem', md: '1rem' },
                fontFamily: theme.typography.const.fontFamily.primary,
                fontWeight: theme.typography.const.fontWeight.bold,
                color: 'white',
                textDecoration: 'underline white',
                position: { xs: 'absolute', lg: 'static' },
                bottom: { xs: '17%', md: '20px' },
                left: { xs: '50%' },
                transform: { md: 'translateX(-50%)', lg: 'none' },
                cursor: 'pointer',
                textUnderline: '',
                textWrap: 'nowrap',
              }}>
              Політика конфіденційності
            </Link>
          </Stack>
          <OutlinedButton
            textColorBlack={false}
            text="Підтримати фонд"
            btnSupport
          />
        </Stack>
      </Container>
      <Box
        style={{
          backgroundColor: theme.palette.colors.footercontrast,
          height: { xs: '32px', md: '53px' },
        }}>
        <Typography
          color="white"
          sx={{
            fontSize: { xs: '0.75rem', md: '1rem' },
            padding: { xs: '8px 0', md: '16px 0' },
          }}
          style={{
            textAlign: 'center',
            fontWeight: theme.typography.const.fontWeight.bold,
          }}>
          © 2022-2023 БФ «Kids Future»
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
