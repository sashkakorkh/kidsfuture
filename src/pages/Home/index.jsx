import React from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
/* import styled from '@emotion/styled'; */
import { NavLink } from 'react-router-dom';
import { ContainedButton, OutlinedButton } from '../../components/Button';

function HomeContent() {
  const theme = useTheme();
  const sectionTitleStyles = {
    fontFamily: theme.typography.const.fontFamily.secondary,
    fontWeight: theme.typography.const.fontWeight.normal,
    lineHeight: 'normal',
    fontSize: {
      xs: '1.25rem',
      md: '2.5rem',
    },
    marginBottom: {
      xs: '11px',
      md: '16px',
    },
  };

  const circleTextBoxStyles = {
    color: 'white',
    padding: {
      xs: '62px 50px 0 50px',
      md: '90px 0 0 19px',
      lg: '162px 108px 0 98px',
    },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const circleBoxTitleStyles = {
    fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.5rem' },
    fontWeight: theme.typography.const.fontWeight.bold,
    marginBottom: { xs: '8px', lg: '16px' },
    textAlign: 'center',
  };

  const circleTextStyles = {
    fontSize: {
      xs: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
    },
    lineHeight: '1.3',
    marginBottom: { xs: '16px', lg: '32px' },
    textAlign: 'left',
  };

  return (
    <div>
      <section>
        <Container maxWidth="xl" disableGutters>
          <Stack
            sx={{
              flexDirection: { xs: 'column', lg: 'row' },
              padding: {
                xs: '0 1rem 0 1.2rem',
                md: '0 6rem',
                lg: '0 5rem 0 9rem',
                xl: '0 5rem 0 12rem',
              },
              marginTop: { xs: '27px', md: '40px', lg: '54px' },
              '::before': {
                content: '""',
                position: 'absolute',
                top: { xs: '', md: '-10px' },
                left: { xs: '', md: '-10px' },
                right: { xs: '33px' },
                bottom: { xs: '120px' },
                width: { xs: '30px', md: '58px' },
                height: { xs: '30px', md: '58px' },
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_squareTriangles.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity: 1,
                zIndex: -1,
              },
              '::after': {
                content: '""',
                position: 'absolute',
                top: {
                  xs: '',
                  md: '-10px',
                },
                left: {
                  xs: '',
                  md: '-10px',
                },
                bottom: { xs: '218px' },
                right: { xs: '62px' },
                width: {
                  xs: '66px',
                  md: '58px',
                },
                height: {
                  xs: '94px',
                  md: '58px',
                },
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_3triangles.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity: 1,
                zIndex: -1,
              },
            }}>
            <Stack sx={{ maxWidth: { lg: '526px', xl: '567px' } }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontFamily: theme.typography.const.fontFamily.secondary,
                  fontWeight: theme.typography.const.fontWeight.bold,
                  lineHeight: '1.2',
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
                  lineHeight: '1.3',
                  textAlign: 'left',
                  fontFamily: theme.typography.const.fontFamily.primary,
                  fontSize: {
                    xs: '1rem',
                    md: '1.25rem',
                    lg: '1rem',
                    xl: '1.25rem',
                  },
                  margin: {
                    xs: '11px 0 16px 0',
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
            {/* <Box
              sx={{
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '', md: '-10px' },
                  left: { xs: '', md: '-10px' },
                  right: { xs: '33px' },
                  bottom: { xs: '120px' },
                  width: { xs: '30px', md: '58px' },
                  height: { xs: '30px', md: '58px' },
                  backgroundImage: `url(${squareTriangle})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 1,
                  zIndex: -1,
                },
                '::after': {
                  content: '""',
                  position: 'absolute',
                  top: {
                    xs: '',
                    md: '-10px',
                  },
                  left: {
                    xs: '',
                    md: '-10px',
                  },
                  bottom: { xs: '218px' },
                  right: { xs: '62px' },
                  width: {
                    xs: '66px',
                    md: '58px',
                  },
                  height: {
                    xs: '94px',
                    md: '58px',
                  },
                  backgroundImage: `url(${threeTriangles})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 1,
                  zIndex: -1,
                },
              }}> */}
            <Box
              sx={{
                height: {
                  lg: '410px',
                  xl: '544px',
                },
                width: {
                  xl: '1454px',
                },
              }}>
              <Box
                sx={{
                  bottom: { lg: '40px', xl: '44px' },
                  right: { xl: '24px' },
                  height: {
                    xs: '275px',
                    md: '456px',
                    lg: '450px',
                    xl: '592px',
                  },
                  width: {
                    xs: '328px',
                    md: '544px',
                    lg: '559px',
                    xl: '705px',
                  },
                  margin: { xs: '98px auto 0', md: '68px auto 0', lg: '0' },
                  position: 'relative',
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/boy_and_girl.png`}
                  alt="boy and girl smilling"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
            {/*  </Box> */}
          </Stack>
        </Container>
      </section>
      <section>
        <Container maxWidth="100%" disableGutters>
          <Stack
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
            }}>
            <Box
              sx={{
                backgroundImage: `linear-gradient(rgba(67, 102, 227, 0.90), rgba(67, 102, 227, 0.90)), url(${process.env.PUBLIC_URL}/images/activity_1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                padding: {
                  xs: '38px 68px 34px 20px',
                  md: '50px 63px 66px 34px',
                  lg: '69px 131px 68px 51px',
                },
              }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: '1.25rem', lg: '2rem' },
                  lineHeight: 'normal',
                  marginBottom: '8px',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: theme.typography.const.fontWeight.bold,
                }}>
                Інструменти
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', lg: '1.125rem' },
                  lineHeight: '1.3',
                  marginBottom: '20px',
                  color: 'white',
                  textAlign: 'left',
                }}>
                Ми збираємо гроші на різноманітні засоби - для шкіл, садочків,
                творчих майстерень, центрів розвитку діток
              </Typography>
              <OutlinedButton
                textColorBlack={false}
                text="задонатити"
                btnSupport={false}
              />
            </Box>
            <Box
              sx={{
                backgroundImage: `linear-gradient(rgba(249, 152, 32, 0.90), rgba(249, 152, 32, 0.90)), url(${process.env.PUBLIC_URL}/images/activity_2.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                padding: {
                  xs: '38px 69px 33px 20px',
                  md: '50px 63px 66px 34px',
                  lg: '69px 190px 68px 51px',
                },
              }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: '1.25rem', lg: '2rem' },
                  lineHeight: 'normal',
                  marginBottom: '8px',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: theme.typography.const.fontWeight.bold,
                }}>
                Пізнання
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', lg: '1.125rem' },
                  lineHeight: '1.3',
                  marginBottom: '16px',
                  color: 'white',
                  textAlign: 'left',
                }}>
                Ми розробляємо та впроваджуємо різнопланові програми та проєкти
                для розвитку дітей.
              </Typography>
              <OutlinedButton
                textColorBlack={false}
                text="задонатити"
                btnSupport={false}
              />
            </Box>
            <Box
              sx={{
                backgroundImage: `linear-gradient(rgba(94, 117, 199, 0.90), rgba(94, 117, 199, 0.90)), url(${process.env.PUBLIC_URL}/images/activity_3.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                padding: {
                  xs: '38px 69px 33px 20px',
                  md: '50px 63px 66px 34px',
                  lg: '69px 148px 68px 51px',
                },
              }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: '1.25rem', lg: '2rem' },
                  lineHeight: 'normal',
                  marginBottom: '8px',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: theme.typography.const.fontWeight.bold,
                }}>
                Розвиток
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', lg: '1.125rem' },
                  lineHeight: '1.3',
                  marginBottom: '20px',
                  color: 'white',
                  textAlign: 'left',
                }}>
                Навчальна платформа, курси ІТ та анімації, а також інші проєкти,
                мета яких допомогти дитині визначитись у житті.
              </Typography>
              <OutlinedButton
                textColorBlack={false}
                text="задонатити"
                btnSupport={false}
              />
            </Box>
          </Stack>
        </Container>
      </section>
      <section id="about">
        <Container maxWidth="xl" disableGutters>
          <Stack
            sx={{
              margin: { xs: '54px 0', md: '100px 0', lg: '91px 0 117px 0' },
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
                  xs: '0 auto 54px',
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
                    right: { xs: '24px', md: '7px', lg: '-22px' },
                    width: { xs: '20px', md: '36px', lg: '41px' },
                    height: { xs: '20px', md: '36px', lg: '41px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '12px', md: '79px', lg: '-31px' },
                    right: { xs: '-4px', md: '-46px', lg: '-93px' },
                    width: { xs: '12px', md: '32px', lg: '36px' },
                    height: { xs: '12px', md: '32px', lg: '36px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_darkblue.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                }}>
                <Box
                  sx={{
                    maxWidth: { md: '360px' },
                    padding: { xs: '0 2rem 0 4rem' },
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
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_yellow.png)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      opacity: 1,
                      zIndex: -1,
                    },
                  }}>
                  <Typography component="h2" sx={sectionTitleStyles}>
                    Мета
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: '1.3',
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
                  height: {
                    xs: '237px',
                  },
                  paddingRight: { xs: '21px' },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girl_studying.png`}
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
                    right: { xs: '39px', md: '49px', lg: '' },
                    width: { xs: '12px', md: '32px', lg: '27px' },
                    height: { xs: '12px', md: '32px', lg: '27px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_BlueTriangle.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                    transform: 'rotate(90deg)',
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '-41px', md: '-45px', lg: '298px' },
                    right: { xs: '61px', md: '3px', lg: '' },
                    left: { lg: '-109px' },
                    width: { xs: '13px', md: '34px', lg: '41px' },
                    height: { xs: '13px', md: '34px', lg: '41px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                }}>
                <Box
                  sx={{
                    maxWidth: { md: '360px' },
                    padding: { xs: '0 2rem 0 3.9rem' },
                    position: 'relative',
                    margin: { xs: '0 auto' },
                    '::after': {
                      content: '""',
                      position: 'absolute',
                      top: { xs: '-3px', md: '-10px' },
                      left: { xs: '29px', md: '-10px' },
                      width: { xs: '25px', md: '58px' },
                      height: { xs: '25px', md: '58px' },
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_yellow.png)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      opacity: 1,
                      zIndex: -1,
                    },
                  }}>
                  <Typography component="h2" sx={sectionTitleStyles}>
                    Цінності
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: '1.3',
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
                  height: {
                    xs: '329px',
                  },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/happy_people.png`}
                  alt="three men and a woman standing and smiling"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </section>
      <section id="cooperation">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ marginBottom: { xs: '50px' } }}>
          <Box
            sx={{
              padding: { xs: '0 1.25rem', md: '0 2.19rem', lg: '0 6rem' },
            }}>
            <Box
              sx={{
                margin: {
                  xs: '0 auto 26px',
                  md: '0 auto 16px',
                  lg: '0 auto 88px',
                },
                textAlign: 'center',
              }}>
              <Typography sx={sectionTitleStyles}>Співпраця</Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', md: '1.125rem' },
                  textAlign: 'left',
                  padding: { md: '0 2rem', lg: '0 16rem' },
                  lineHeight: '1.3',
                  marginTop: { xs: '1rem', md: '1.4rem' },
                }}>
                Якщо у вас є бажання робити дійсно добру справу, інвестувати
                свій час, знання та вміння, а також можливі ресурси у розвиток
                дітей України - запрошуємо до співпраці.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              '::before': {
                content: '""',
                position: 'absolute',
                top: { xs: '15px', md: '-10px' },
                left: { xs: '26px', md: '-10px' },
                right: { xs: '' },
                width: { xs: '26px', md: '58px' },
                height: { xs: '19px', md: '58px' },
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_BlueTriangle.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity: 1,
                zIndex: -1,
              },
              '::after': {
                content: '""',
                position: 'absolute',
                top: { xs: '-37px', md: '-10px' },
                left: { xs: '', md: '-10px' },
                right: { xs: '19px' },
                width: { xs: '48px', md: '58px' },
                height: { xs: '68px', md: '58px' },
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_3triangles.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity: 1,
                zIndex: -1,
              },
            }}>
            <Grid
              container
              alignItems="center"
              sx={{
                rowGap: { xs: '26px', md: '10px', lg: '16px' },
                padding: {
                  xs: '0 1.25rem 0 1.25rem',
                  lg: '0 14.25rem 0 14.25rem',
                },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '347px', md: '-10px' },
                  left: { xs: '', md: '-10px' },
                  right: { xs: '19px' },
                  width: { xs: '27px', md: '58px' },
                  height: { xs: '27px', md: '58px' },
                  backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_yellow_triangle.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  transform: 'rotateZ(180deg)',
                  opacity: 1,
                  zIndex: -1,
                },
                '::after': {
                  content: '""',
                  position: 'absolute',
                  top: { xs: '312px', md: '-10px' },
                  left: { xs: '', md: '-10px' },
                  right: { xs: '75px' },
                  width: { xs: '13px', md: '58px' },
                  height: { xs: '9px', md: '58px' },
                  backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  transform: 'rotateZ(270deg)',
                  opacity: 1,
                  zIndex: -1,
                },
              }}>
              <Grid
                item
                xs={12}
                md={6}
                /* sx={{ paddingLeft: { md: '20px', lg: '232px' } }} */
              >
                <Box
                  sx={{
                    width: { xs: '320px', md: '344px', lg: '548px' },
                    height: { xs: '320px', md: '378px', lg: '548px' },
                    borderRadius: { xs: '320px', md: '300px 300px 0px 300px' },
                    background: {
                      xs: theme.palette.colors.mainsecond,
                      md: theme.palette.colors.circle,
                    },
                    opacity: { xs: '.8', md: '.9' },
                  }}>
                  <Box sx={circleTextBoxStyles}>
                    <Typography component="h4" sx={circleBoxTitleStyles}>
                      Бізнес
                    </Typography>
                    <Typography sx={circleTextStyles}>
                      Долучайтесь до створення проектів та програм, які
                      допоможуть дітям реалізувати свій потенціал. Ваша
                      підтримка може стати кроком до покращення життя багатьох
                      маленьких українців
                    </Typography>
                    <ContainedButton textColorBlack text="Долучитися" />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: 'relative',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '', md: '-10px' },
                    bottom: { xs: '-22px' },
                    left: { xs: '2px', md: '-10px' },
                    right: { xs: '' },
                    width: { xs: '36px', md: '58px' },
                    height: { xs: '18px', md: '58px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_2Triangles.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                }}>
                <Box
                  sx={{
                    width: { xs: '320px', md: '344px', lg: '548px' },
                    height: { xs: '320px', md: '378px', lg: '548px' },
                    borderRadius: { xs: '320px', md: '300px 300px 300px 0px' },
                    background: {
                      xs: theme.palette.colors.circle,
                      md: theme.palette.colors.mainsecond,
                    },
                    opacity: { xs: '.9', md: '.8' },
                  }}>
                  <Box sx={circleTextBoxStyles}>
                    <Typography component="h4" sx={circleBoxTitleStyles}>
                      ГО
                    </Typography>
                    <Typography sx={circleTextStyles}>
                      Готові співпрацювати задля створення проектів для розвитку
                      дітей? Звертайтеся до нас, разом ми можемо зробити більше
                      для дітей та їх майбутнього
                    </Typography>
                    <ContainedButton textColorBlack text="Долучитися" />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                /* sx={{ paddingLeft: { md: '20px', lg: '232px' } }} */
              >
                <Box
                  sx={{
                    width: { xs: '320px', md: '344px', lg: '548px' },
                    height: { xs: '320px', md: '378px', lg: '548px' },
                    borderRadius: { xs: '320px', md: '300px 0px 300px 300px' },
                    background: theme.palette.colors.mainsecond,
                    opacity: '0.8',
                  }}>
                  <Box sx={circleTextBoxStyles}>
                    <Typography component="h4" sx={circleBoxTitleStyles}>
                      Фонд
                    </Typography>
                    <Typography sx={circleTextStyles}>
                      Ми відкриті для обміну ідеями, знаннями та досвідом в
                      роботі з дітьми та створенні проектів, які б забезпечували
                      розвиток їх талантів та навичок. Втілимо мрії дітей разом
                    </Typography>
                    <ContainedButton textColorBlack text="Долучитися" />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: 'relative',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '-41px', md: '-10px' },
                    bottom: { xs: '' },
                    left: { xs: '', md: '-10px' },
                    right: { xs: '1px' },
                    width: { xs: '47px', md: '58px' },
                    height: { xs: '74px', md: '58px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamond_triangle.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1,
                    zIndex: -1,
                  },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '', md: '-10px' },
                    bottom: { xs: '2px' },
                    left: { xs: '1px', md: '-10px' },
                    right: { xs: '' },
                    width: { xs: '20px', md: '58px' },
                    height: { xs: '14px', md: '58px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    transform: 'rotateZ(270deg)',
                    opacity: 1,
                    zIndex: -1,
                  },
                }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '320px', md: '344px', lg: '548px' },
                    height: { xs: '320px', md: '378px', lg: '548px' },
                    borderRadius: { xs: '320px', md: '0 300px 300px 300px' },
                    background: theme.palette.colors.circle,
                    opacity: '0.9',
                  }}>
                  <Box
                    sx={{
                      color: 'white',
                      padding: {
                        xs: '37px 50px 0 50px',
                        md: '57px 34px 0 34px',
                        lg: '150px 63px 0 63px',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <Typography component="h4" sx={circleBoxTitleStyles}>
                      Волонтери
                    </Typography>
                    <Typography sx={circleTextStyles}>
                      Обожнюєте розвивати таланти та навички дітей? Наші проекти
                      та програми потребують волонтерської допомоги в проведенні
                      різноманітних заходів, розвитку креативних ідей та роботі
                      з дітьми. Долучайтеся до нас та станьте частиною команди,
                      яка змінює життя дітей на краще.
                    </Typography>
                    <ContainedButton textColorBlack text="Долучитися" wider />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section id="team">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ marginBottom: { xs: '50px' } }}>
          <Typography sx={sectionTitleStyles} style={{ textAlign: 'center' }}>
            Команда
          </Typography>
          <Box
            sx={{
              padding: { xs: '0 1.28rem 0 1.38rem', md: '0 2.2rem 0 2.3rem' },
              marginTop: { xs: '26px', md: '50px' },
            }}>
            <Stack
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: { xs: '26px', lg: '50px' },
              }}>
              <Box sx={{ maxWidth: { md: '500px', lg: '600px' } }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.125rem', md: '1.5rem', lg: '2rem' },
                    marginBottom: { xs: '8px' },
                    lineHeight: 'normal',
                  }}>
                  Олександр Синько
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5' },
                    fontWeight: theme.typography.const.fontWeight.bold,
                    marginBottom: { xs: '8px' },
                    lineHeight: 'normal',
                  }}>
                  Засновник фонду
                </Typography>
                <Box
                  sx={{
                    marginBottom: { xs: '26px' },
                  }}>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125' },
                      lineHeight: 'normal',
                    }}>
                    Режисер, продюсер, спортивний тренер, менеджер спортивного
                    клубу.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125' },
                      lineHeight: 'normal',
                    }}>
                    17 років у медія індустрії, працював на дитячо-молодіжних
                    програмах, створював мультсеріали для дошкільнят та
                    повнометражний анімаційний фільм Більше 20 років тренерскої
                    діяльності 3 дітьми та підлітками. Серед Вихованців багато
                    призерів у тому числі чемпіони світу.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '173px',
                  height: '173px',
                  position: { md: 'relative' },
                  bottom: { md: '30px' },
                  marginLeft: { md: '20px' },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/founder_man.png`}
                  alt="Founder of the fond Oleksandr Sinko"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Stack>
            <Stack
              sx={{
                flexDirection: { xs: 'column', md: 'row-reverse' },
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Box sx={{ maxWidth: { md: '500px', lg: '600px' } }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.125rem', md: '1.5rem', lg: '2rem' },
                    marginBottom: { xs: '8px' },
                    lineHeight: 'normal',
                  }}>
                  Катерина Синько
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5' },
                    fontWeight: theme.typography.const.fontWeight.bold,
                    marginBottom: { xs: '8px' },
                    lineHeight: 'normal',
                  }}>
                  Засновниця фонду
                </Typography>
                <Box
                  sx={{
                    marginBottom: { xs: '26px' },
                  }}>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125' },
                      lineHeight: 'normal',
                    }}>
                    Адептка сімейного бізнесу, більше 15 років в PR, маркетингу,
                    продажах.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125' },
                      lineHeight: 'normal',
                    }}>
                    Приймала участь у реалізації низки проектів у здоров &apos;
                    ї (ціль ООН). Авторка власних проектів для інвесторів та
                    стартапів, а також для агро і сімейного фермерства та
                    інвестування в Україну.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '173px',
                  height: '173px',
                  position: { md: 'relative' },
                  bottom: { md: '30px' },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/founder_woman.png`}
                  alt="Founder of the fond Kateryna Sinko"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Stack>
          </Box>
        </Container>
      </section>
      <section id="news">
        <NavLink to="/news">
          <Typography>Новини</Typography>
        </NavLink>
      </section>
    </div>
  );
}

export default HomeContent;
