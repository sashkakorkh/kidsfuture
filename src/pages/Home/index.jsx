import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
/* import styled from '@emotion/styled'; */
import banner from './boy_and_girl.png';
import { ContainedButton } from '../../components/Button';
/* import diamond from './bg_diamond.png';
import triangle from './bg_triangle.png';
import square from './bg_square.png'; */
import girl from './girl_studying.png';
import people from './happy_people.png';
import diamondElement from './diamond_el.png';
import halfDiamond from './half_diamond_aim.png';
import diamondAim from './diamond_aim.png';
import yellowTriangle from './yellow_triangle.png';

function HomeContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" disableGutters>
      <section>
        <Stack
          sx={{
            flexDirection: { xs: 'column', lg: 'row' },
            padding: {
              xs: '0 1rem',
              md: '0 6rem',
              lg: '0 5rem 0 9rem',
              xl: '0 5rem 0 12rem',
            },
            marginTop: { xs: '15px', md: '40px', lg: '54px' },
          }}>
          <Stack>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: theme.typography.const.fontFamily.secondary,
                fontWeight: theme.typography.const.fontWeight.bold,
                fontSize: {
                  xs: '2.25rem',
                  md: '3.25rem',
                  lg: '2.5rem',
                  xl: '4rem',
                },
                /*    maxWidth: { md: '457px', lg: '567px' }, */
              }}>
              Розвиток. Діти. Майбутнє.
            </Typography>
            <Typography
              sx={{
                lineHeight: '1.2',
                textAlign: 'left',
                fontFamily: theme.typography.const.fontFamily.primary,
                fontSize: {
                  xs: '1rem',
                  md: '1.25rem',
                  lg: '1rem',
                  xl: '1.25rem',
                },
                margin: {
                  xs: '8px 0 16px 0',
                  lg: '22px 0 30px 0',
                  xl: '22px 0 51px 0',
                },
                padding: {
                  xs: '0 1.5rem 0 0',
                  md: '0 7rem 0 0',
                  lg: '0',
                  xl: '0 3rem 0 0',
                },
              }}>
              Ми - сімейний благодійний фонд, який розробляє та підтримує
              проєкти, що спрямовані на всебічний розвиток дітей та підлітків.
            </Typography>
            <ContainedButton textColorBlack={false} text="Долучитися" />
          </Stack>
          <Box
            sx={{
              flex: '1 1 auto',
              bottom: { xs: '', md: '', lg: '33px', xl: '54px' },
              right: { xs: '', md: '', lg: '0', xl: '52px' },
              height: {
                xs: '264px',
                md: '456px',
                lg: '382px',
                xl: '592px',
              },
              width: {
                xs: '310px',
                md: '544px',
                lg: '935px',
                xl: '1454px',
              },
              maxWidth: {
                lg: '935px',
                xl: '1454px',
              },
              margin: { xs: '96px auto 0', md: '68px auto 0', lg: '0' },
              position: 'relative',
            }}>
            {/*     <span>
              <img
                src={triangle}
                alt="decor element"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  position: 'absolute',
                  '@media (min-width:360px)': {
                    maxWidth: '66px',
                  },
                }}
              />
            </span> */}
            <img
              src={banner}
              alt="boy and girl smilling"
              width="100%"
              height="100%"
            />
          </Box>
        </Stack>
      </section>
      <section>
        <Stack
          sx={{
            margin: { xs: '50px 0', md: '100px 0', lg: '91px 0 117px 0' },
            padding: {
              xs: '0 1.5rem',
              md: '0 5rem',
              lg: '0 6rem',
              /*    xl: '0 5rem 0 12rem', */
            },
          }}>
          <Stack
            sx={{
              flexDirection: { xs: 'column', lg: 'row-reverse' },
              justifyContent: { lg: 'space-evenly' },
              alignItems: 'center',
              gap: { lg: '232px' },
              margin: {
                xs: '0 auto 50px',
                lg: '0',
              },
            }}>
            <Box
              sx={{
                position: 'relative',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '-28px', md: '-35px', lg: '-157px' },
                  right: { xs: '17px', md: '7px', lg: '-22px' },
                  width: { xs: '20px', md: '36px', lg: '41px' },
                  height: { xs: '20px', md: '36px', lg: '41px' },
                  backgroundImage: `url(${halfDiamond})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 1,
                  zIndex: -1,
                },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '13px', md: '79px', lg: '-31px' },
                  right: { xs: '-12px', md: '-46px', lg: '-93px' },
                  width: { xs: '12px', md: '32px', lg: '36px' },
                  height: { xs: '12px', md: '32px', lg: '36px' },
                  backgroundImage: `url(${diamondAim})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 1,
                  zIndex: -1,
                },
              }}>
              <Box
                sx={{
                  maxWidth: { xs: '217px', md: '360px' },
                  paddingLeft: { xs: '4rem' },
                  position: 'relative',
                  margin: { xs: '0 auto' },
                  top: { lg: '-60px' },
                  left: { lg: '-138px' },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '-1px', md: '-10px' },
                    left: { xs: '31px', md: '-10px' },
                    width: { xs: '25px', md: '58px' },
                    height: { xs: '25px', md: '58px' },
                    backgroundImage: `url(${diamondElement})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: theme.typography.const.fontFamily.secondary,
                    fontWeight: theme.typography.const.fontWeight.normal,
                    lineHeight: '1',
                    fontSize: {
                      xs: '1.25rem',
                      md: '2.5rem',
                    },
                    marginBottom: {
                      xs: '8px',
                      md: '16px',
                    },
                  }}>
                  Мета
                </Typography>
                <Typography
                  sx={{
                    lineHeight: '1',
                    fontSize: {
                      xs: '0.875rem',
                      md: '1.25rem',
                    },
                    marginBottom: {
                      xs: '26px',
                      md: '50px',
                      lg: '0',
                    },
                  }}>
                  Дати дітям впевненість у власному щасливому майбутньому.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: {
                  xs: '320px',
                  md: '680px',
                  lg: '709px',
                },
              }}>
              <img
                src={girl}
                alt="girl studying at home"
                width="100%"
                height="100%"
              />
            </Box>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: { lg: 'space-evenly' },
              alignItems: 'center',
              gap: { lg: '232px' },
              margin: {
                xs: '0 auto',
                lg: '0',
              },
            }}>
            <Box
              sx={{
                position: 'relative',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '-12px', md: '15px', lg: '377px' },
                  left: { lg: '-54px' },
                  right: { xs: '25px', md: '49px', lg: '' },
                  width: { xs: '12px', md: '32px', lg: '27px' },
                  height: { xs: '12px', md: '32px', lg: '27px' },
                  backgroundImage: `url(${halfDiamond})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 1,
                  zIndex: -1,
                  transform: 'rotate(90deg)',
                },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '-39px', md: '-45px', lg: '298px' },
                  right: { xs: '47px', md: '3px', lg: '' },
                  left: { lg: '-109px' },
                  width: { xs: '13px', md: '34px', lg: '41px' },
                  height: { xs: '13px', md: '34px', lg: '41px' },
                  backgroundImage: `url(${yellowTriangle})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 1,
                  zIndex: -1,
                },
              }}>
              <Box
                sx={{
                  maxWidth: { xs: '217px', md: '360px' },
                  paddingLeft: { xs: '4rem' },
                  position: 'relative',
                  margin: { xs: '0 auto' },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '-1px', md: '-10px' },
                    left: { xs: '31px', md: '-10px' },
                    width: { xs: '25px', md: '58px' },
                    height: { xs: '25px', md: '58px' },
                    backgroundImage: `url(${diamondElement})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: theme.typography.const.fontFamily.secondary,
                    fontWeight: theme.typography.const.fontWeight.normal,
                    lineHeight: '1',
                    fontSize: {
                      xs: '1.25rem',
                      md: '2.5rem',
                    },
                    marginBottom: {
                      xs: '0.5rem',
                      md: '1rem',
                    },
                  }}>
                  Цінності
                </Typography>
                <Typography
                  sx={{
                    lineHeight: '1',
                    fontSize: {
                      xs: '0.875rem',
                      md: '1.25rem',
                    },
                    marginBottom: {
                      xs: '26px',
                      md: '50px',
                      lg: '0',
                    },
                  }}>
                  Сім’я, розвиток, щасливе майбутнє дитини, родини, України.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: { lg: 'relative' },
                top: { lg: '-83px' },
                maxWidth: {
                  xs: '320px',
                  md: '680px',
                  lg: '709px',
                },
              }}>
              <img
                src={people}
                alt="three men and a woman standing and smiling"
                width="100%"
                height="100%"
              />
            </Box>
          </Stack>
        </Stack>
      </section>
    </Container>
  );
}

export default HomeContent;
