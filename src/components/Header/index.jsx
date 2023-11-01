import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import logo from './small-logo.png';

const LinkText = styled(Typography)`
  color: ${(props) => props.theme.typography.fontColor};
  font-weight: ${(props) => props.theme.typography.const.fontWeight.normal};
  text-transform: uppercase;
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

function Header() {
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
                xl: '1.06rem 3.1rem 1.06rem 2.8rem',
              },
            }}>
            <Stack direction="row" alignItems="center">
              <NavLink to="/">
                <Box
                  sx={{
                    height: { xs: '48px', md: '45px', lg: '69px', xl: '69px' },
                    width: { xs: '48px', md: '45px', lg: '69px', xl: '69px' },
                  }}>
                  <img src={logo} alt="Logo" height="100%" width="100%" />
                </Box>
              </NavLink>
              <Stack
                direction="row"
                spacing={{ md: 1, lg: 1.5, xl: 1.5 }}
                sx={{
                  marginLeft: { md: '1.25rem', lg: '3.94rem', xl: '3.94rem' },
                }}>
                <NavLink to="#" style={{ textDecoration: 'none' }}>
                  <LinkText
                    style={{
                      fontSize: {
                        xs: '1rem',
                        md: '0.75rem',
                        lg: '0.75rem',
                        xl: '1rem',
                      },
                    }}>
                    Про нас
                  </LinkText>
                </NavLink>
                <NavLink to="#" style={{ textDecoration: 'none' }}>
                  <LinkText
                    style={{
                      fontSize: {
                        xs: '1rem',
                        md: '0.75rem',
                        lg: '0.75rem',
                        xl: '1rem',
                      },
                    }}>
                    Співпраця
                  </LinkText>
                </NavLink>
                <NavLink to="#" style={{ textDecoration: 'none' }}>
                  <LinkText
                    style={{
                      fontSize: {
                        xs: '1rem',
                        md: '0.75rem',
                        lg: '0.75rem',
                        xl: '1rem',
                      },
                    }}>
                    Команда
                  </LinkText>
                </NavLink>
                <NavLink to="#" style={{ textDecoration: 'none' }}>
                  <LinkText
                    style={{
                      fontSize: {
                        xs: '1rem',
                        md: '0.75rem',
                        lg: '0.75rem',
                        xl: '1rem',
                      },
                    }}>
                    Новини
                  </LinkText>
                </NavLink>
                <NavLink to="#" style={{ textDecoration: 'none' }}>
                  <LinkText
                    style={{
                      fontSize: {
                        xs: '1rem',
                        md: '0.75rem',
                        lg: '0.75rem',
                        xl: '1rem',
                      },
                    }}>
                    Донати
                  </LinkText>
                </NavLink>
                <NavLink to="#" style={{ textDecoration: 'none' }}>
                  <LinkText
                    style={{
                      fontSize: {
                        xs: '1rem',
                        md: '0.75rem',
                        lg: '0.75rem',
                        xl: '1rem',
                      },
                    }}>
                    Партнери
                  </LinkText>
                </NavLink>
              </Stack>
            </Stack>
            <NavLink to="#">
              <SupportBtn
                variant="outlined"
                sx={{
                  outline: '1px solid #4366E3',
                  height: {
                    xs: '32px',
                    md: '33px',
                    lg: '43px',
                    xl: '43px',
                  },
                  width: {
                    xs: '125px',
                    md: '180px',
                    lg: '232px',
                    xl: '232px',
                  },
                  fontSize: {
                    xs: '0.7rem',
                    md: '0.875rem',
                    lg: '1.125rem',
                    xl: '1.125rem',
                  },
                }}>
                Підтримати фонд
              </SupportBtn>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}

export default Header;
