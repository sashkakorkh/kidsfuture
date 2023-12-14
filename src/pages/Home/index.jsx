import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { ContainedButton, OutlinedButton } from '../../components/Button';
import Carousel from '../../components/Carousel';
import CardNewsItem from '../../components/CardForNewsItem';
import DonateTab from '../../components/Donate';
import RenderPartners from '../../components/Partners';

function HomeContent({ data, loading }) {
  const theme = useTheme();
  const sectionTitleStyles = {
    fontFamily: theme.typography.const.fontFamily.secondary,
    fontWeight: theme.typography.const.fontWeight.normal,
    lineHeight: 'normal',
    textAlign: 'center',
    fontSize: {
      xs: '1.25rem',
      md: '2.5rem',
      lg: '2.3rem',
      xl: '2.5rem',
    },
    marginBottom: {
      xs: '11px',
      md: '16px',
      xl: '11px',
    },
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
    marginBottom: { xs: '16px', lg: '32px', xl: '20px' },
    textAlign: 'left',
  };

  const defaultStylesBgEl = {
    content: '""',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };
  return (
    <div>
      <section id="banner" className="scroll-section">
        <Container maxWidth="xl" disableGutters>
          <Stack
            sx={{
              flexDirection: { xs: 'column', lg: 'row' },
              gap: { xl: '9px' },
              padding: {
                xs: '0 1rem 0 1.2rem',
                md: '0 6rem',
                lg: '0 4rem 0 6rem',
                xl: '0 5rem 0 11rem',
              },
              marginTop: { xs: '27px', md: '52px', lg: '54px' },
              '::before': {
                ...defaultStylesBgEl,
                display: { md: 'none' },
                bottom: '150px',
                left: '20px',
                width: '12px',
                height: '12px',
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_darkblue.png)`,
              },
              '::after': {
                ...defaultStylesBgEl,
                display: { md: 'none' },
                bottom: '219px',
                left: '128px',
                width: '19px',
                height: '19px',
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
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
                    md: '11px 0 14px 0',
                    lg: '22px 0 30px 0',
                    xl: '22px 0 51px 0',
                  },
                  padding: {
                    xs: '0 1.5rem 0 0',
                    md: '0 7.5rem 0 0',
                    lg: '0',
                    xl: '0 3rem 0 0',
                  },
                }}>
                Ми - сімейний благодійний фонд, який розробляє та підтримує
                проєкти, що спрямовані на всебічний розвиток дітей та підлітків.
              </Typography>
              <ContainedButton btnName="btnContainedBlue" text="Долучитися" />
            </Stack>
            <Box
              sx={{
                position: 'relative',
                height: {
                  lg: '359px',
                  xl: '550px',
                },
                width: {
                  xl: '1454px',
                },
                '::before': {
                  ...defaultStylesBgEl,
                  top: { xs: '62px', md: '64px', lg: '227px', xl: '366px' },
                  left: { xs: '27px', md: '-83px', lg: '-116px', xl: '-176px' },
                  width: { xs: '21px', md: '122px', lg: '97px', xl: '152px' },
                  height: { xs: '21px', md: '103px', lg: '91px', xl: '127px' },
                  backgroundImage: {
                    xs: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_yellow.png)`,
                    md: `url(${process.env.PUBLIC_URL}/bgElements/bg_2diamonds_triangle.png)`,
                  },
                },
                '::after': {
                  ...defaultStylesBgEl,
                  top: {
                    xs: '-21px',
                    md: '-52px',
                    lg: '-37px',
                    xl: '-23px',
                  },
                  right: { xs: '46px', md: '10px', lg: '2px', xl: '40px' },
                  width: {
                    xs: '66px',
                    md: '122px',
                    lg: '79px',
                    xl: '151px',
                  },
                  height: {
                    xs: '94px',
                    md: '174px',
                    lg: '113px',
                    xl: '215px',
                  },
                  backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_3triangles.png)`,
                },
              }}>
              <Box
                sx={{
                  bottom: { lg: '40px', xl: '44px' },
                  right: { xl: '24px' },
                  height: {
                    xs: '275px',
                    md: '459px',
                    lg: '399px',
                    xl: '597px',
                  },
                  width: {
                    xs: '328px',
                    md: '544px',
                    lg: '459px',
                    xl: '705px',
                  },
                  margin: {
                    xs: '98px auto 0',
                    md: '68px 22px 0 22px',
                    lg: '0',
                  },
                  position: 'relative',
                  '::before': {
                    ...defaultStylesBgEl,
                    top: { xs: '43px', md: '104px', lg: '322px', xl: '444px' },
                    left: { xs: '', md: '' },
                    right: {
                      xs: '20px',
                      md: '-66px',
                      lg: '-53px',
                      xl: '-88px',
                    },
                    bottom: { xs: '' },
                    width: { xs: '30px', md: '66px', lg: '42px', xl: '82px' },
                    height: { xs: '30px', md: '66px', lg: '46px', xl: '82px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_squareTriangles.png)`,
                  },
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/boy_and_girl.png`}
                  alt="boy and girl smilling"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
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
                minWidth: { md: '15rem' },
                padding: {
                  xs: '36px 68px 34px 20px',
                  md: '48px 40px 65px 34px',
                  lg: '68px 56px 67px 31px',
                  xl: '69px 133px 68px 51px',
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
                  fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                  lineHeight: '1.3',
                  marginBottom: '19px',
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
                minWidth: { md: '15rem' },
                padding: {
                  xs: '36px 68px 34px 20px',
                  md: '47px 67px 65px 36px',
                  lg: '69px 65px 68px 38px',
                  xl: '69px 190px 68px 51px',
                },
              }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: '1.25rem', lg: '2rem' },
                  lineHeight: '1.3',
                  marginBottom: '8px',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: theme.typography.const.fontWeight.bold,
                }}>
                Пізнання
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                  lineHeight: '1.3',
                  marginBottom: '19px',
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
                minWidth: { md: '15rem' },
                padding: {
                  xs: '34px 68px 35px 20px',
                  md: '47px 38px 66px 34px',
                  lg: '69px 43px 68px 39px',
                  xl: '69px 112px 68px 51px',
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
                  fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
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
      <section id="about" className="scroll-section">
        <Container maxWidth="xl" disableGutters>
          <Stack
            sx={{
              margin: {
                xs: '48px 0',
                md: '103px 0 90px',
                lg: '91px 0 40px 0',
              },
              padding: {
                xs: '0 1.5rem',
                md: '0 5rem',
                lg: '0 2.5rem 0 3rem',
                xl: '0 5rem 0 8.7rem',
              },
            }}>
            <Stack
              sx={{
                flexDirection: { xs: 'column', lg: 'row-reverse' },
                justifyContent: { lg: 'space-evenly', xl: 'flex-end' },
                alignItems: 'center',
                gap: { lg: '50px', xl: '141px' },
                marginBottom: {
                  xs: '54px',
                  md: '48px',
                  lg: '0',
                },
              }}>
              <Box
                sx={{
                  position: 'relative',
                  marginBottom: {
                    xs: '22px',
                    md: '50px',
                    lg: '0',
                    xl: '103px',
                  },
                  '::after': {
                    ...defaultStylesBgEl,
                    top: {
                      xs: '-28px',
                      md: '-33px',
                      lg: '-183px',
                      xl: '-95px',
                    },
                    right: {
                      xs: '24px',
                      md: '-105px',
                      lg: '27px',
                      xl: '-204px',
                    },
                    width: { xs: '20px', md: '49px', lg: '54px', xl: '46px' },
                    height: { xs: '20px', md: '49px', lg: '54px', xl: '46px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                  },
                  '::before': {
                    ...defaultStylesBgEl,
                    top: { xs: '12px', md: '87px', lg: '-81px', xl: '38px' },
                    right: {
                      xs: '-4px',
                      md: '-159px',
                      lg: '-32px',
                      xl: '-275px',
                    },
                    width: { xs: '12px', md: '32px', lg: '32px', xl: '36px' },
                    height: { xs: '12px', md: '32px', lg: '32px', xl: '36px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_darkblue.png)`,
                  },
                }}>
                <Box
                  sx={{
                    maxWidth: { md: '360px' },
                    padding: { xs: '0 2rem 0 4rem', md: '0 0rem 0 2.1rem' },
                    position: 'relative',
                    margin: { xs: '0 auto' },
                    '::after': {
                      ...defaultStylesBgEl,
                      top: { xs: '-1px', md: '-2px', lg: '0', xl: '-4px' },
                      left: {
                        xs: '31px',
                        md: '-40px',
                        lg: '-23px',
                        xl: '-39px',
                      },
                      width: { xs: '25px', md: '58px', lg: '41px', xl: '58px' },
                      height: {
                        xs: '25px',
                        md: '58px',
                        lg: '41px',
                        xl: '58px',
                      },
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_yellow.png)`,
                    },
                  }}>
                  <Typography
                    component="h2"
                    sx={{ ...sectionTitleStyles, textAlign: 'left' }}>
                    Мета
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: '1.3',
                      fontSize: {
                        xs: '0.875rem',
                        md: '1.25rem',
                        lg: '1.125rem',
                        xl: '1.25rem',
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
                    md: '473px',
                    lg: '372px',
                    xl: '473px',
                  },
                  paddingRight: { xs: '21px', md: '36px' },
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
              }}>
              <Box
                sx={{
                  position: 'relative',
                  marginBottom: {
                    xs: '26px',
                    md: '50px',
                    lg: '0',
                    xl: '54px',
                  },
                  '::after': {
                    ...defaultStylesBgEl,
                    top: {
                      xs: '-12px',
                      md: '-120px',
                      lg: '377px',
                      xl: '339px',
                    },
                    left: { lg: '80px', xl: '-62px' },
                    right: { xs: '39px', md: '22px', lg: '' },
                    width: { xs: '12px', md: '32px', lg: '27px', xl: '38px' },
                    height: { xs: '12px', md: '32px', lg: '27px', xl: '30px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    transform: 'rotate(90deg)',
                  },
                  '::before': {
                    ...defaultStylesBgEl,
                    top: { xs: '-41px', md: '-41px', lg: '289px', xl: '254px' },
                    right: { xs: '61px', md: '-69px', lg: '' },
                    left: { lg: '17px', xl: '-125px' },
                    width: { xs: '13px', md: '34px', lg: '41px' },
                    height: { xs: '13px', md: '34px', lg: '41px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_yellow_triangle.png)`,
                  },
                }}>
                <Box
                  sx={{
                    maxWidth: { md: '374px' },
                    padding: { xs: '0 2rem 0 3.9rem', md: '0' },
                    position: 'relative',
                    marginLeft: { md: '69px', lg: '51px' },
                    top: { lg: '-52px' },
                    '::after': {
                      ...defaultStylesBgEl,
                      top: { xs: '-3px', md: '-4px', lg: '1px', xl: '-3px' },
                      left: {
                        xs: '29px',
                        md: '-75px',
                        lg: '-55px',
                        xl: '-73px',
                      },
                      width: { xs: '25px', md: '58px', lg: '41px', xl: '58px' },
                      height: {
                        xs: '25px',
                        md: '58px',
                        lg: '41px',
                        xl: '58px',
                      },
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_yellow.png)`,
                    },
                  }}>
                  <Typography
                    component="h2"
                    sx={{ ...sectionTitleStyles, textAlign: 'left' }}>
                    Цінності
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: '1.3',
                      fontSize: {
                        xs: '0.875rem',
                        md: '1.25rem',
                        lg: '1.125rem',
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
                  right: { xl: '-30px' },
                  maxWidth: {
                    xs: '320px',
                    md: '680px',
                    lg: '709px',
                  },
                  height: {
                    xs: '329px',
                    md: '534px',
                    xl: '652px',
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
      <section id="cooperation" className="scroll-section">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ marginBottom: { xs: '48px', md: '95px', xl: '151px' } }}>
          <Box
            sx={{
              padding: { xs: '0 1.25rem', md: '0', lg: '0 1rem' },
            }}>
            <Box
              sx={{
                margin: {
                  xs: '0 auto 24px',
                  md: '0 auto 11px',
                  lg: '0 auto 70px',
                  xl: '0 auto 86px',
                },
                textAlign: 'center',
              }}>
              <Typography sx={sectionTitleStyles}>Співпраця</Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', md: '1.125rem' },
                  textAlign: 'left',
                  padding: { md: '0 2rem', lg: '0 9rem', xl: '0 21rem' },
                  lineHeight: '1.3',
                  marginTop: { xs: '1rem', md: '1.4rem' },
                }}>
                Якщо у вас є бажання робити дійсно добру справу, інвестувати
                свій час, знання та вміння, а також можливі ресурси у розвиток
                дітей України - запрошуємо до співпраці.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gridTemplateRows: {
                  xs: 'repeat(4, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
                gridColumnGap: { xs: '0', md: '10px', lg: '17px' },
                gridRowGap: { xs: '26px', md: '10px', lg: '17px' },
                padding: {
                  xs: '0 1.25rem 0 1.25rem',
                  md: '0 2.5rem 0 1.9rem',
                  lg: '0 1rem 0 1rem',
                },
              }}>
              <Box sx={{ justifySelf: { xs: 'center', md: 'flex-end' } }}>
                <Box
                  sx={{
                    width: {
                      xs: '320px',
                      md: '344px',
                      lg: '450px',
                      xl: '549px',
                    },
                    height: {
                      xs: '320px',
                      md: '378px',
                      lg: '450px',
                      xl: '549px',
                    },
                    borderRadius: { xs: '320px', md: '309px 300px 0px 323px' },
                    background: {
                      xs: theme.palette.colors.mainsecond,
                      md: theme.palette.colors.circle,
                    },
                    opacity: { xs: '.8', md: '.9' },
                    position: 'relative',
                    '::before': {
                      ...defaultStylesBgEl,
                      top: { xs: '12px', md: '-115px', lg: '41px', xl: '75px' },
                      left: {
                        xs: '5px',
                        md: '665px',
                        lg: '927px',
                        xl: '1225px',
                      },
                      right: { xs: '' },
                      width: { xs: '29px', md: '24px', lg: '30px', xl: '47px' },
                      height: {
                        xs: '22px',
                        md: '19px',
                        lg: '24px',
                        xl: '34px',
                      },
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_BlueTriangle.png)`,
                      transform: { md: 'rotatey(180deg)', lg: 'rotatey(0deg)' },
                    },
                    '::after': {
                      ...defaultStylesBgEl,
                      top: {
                        xs: '-38px',
                        md: '772px',
                        lg: '-55px',
                        xl: '37px',
                      },
                      left: { xs: '', md: '3px', lg: '-44px', xl: '-114px' },
                      right: { xs: '1px' },
                      width: { xs: '48px', md: '35px', lg: '75px', xl: '75px' },
                      height: {
                        xs: '68px',
                        md: '49px',
                        lg: '107px',
                        xl: '107px',
                      },
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_3triangles.png)`,
                    },
                  }}>
                  <Box
                    sx={{
                      color: 'white',
                      padding: {
                        xs: '62px 50px 0 50px',
                        md: '92px 0 0 21px',
                        lg: '100px 40px 0 62px',
                        xl: '143px 110px 0 98px',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: {
                          xs: '1.125rem',
                          md: '1.25rem',
                          lg: '1.5rem',
                        },
                        fontWeight: theme.typography.const.fontWeight.bold,
                        margin: {
                          xs: '0 0 8px 0',
                          md: '0 18px 6px 0',
                          lg: '16px',
                          xl: '14px',
                        },
                        textAlign: 'center',
                      }}>
                      Бізнес
                    </Typography>
                    <Typography sx={circleTextStyles}>
                      Долучайтесь до створення проектів та програм, які
                      допоможуть дітям реалізувати свій потенціал. Ваша
                      підтримка може стати кроком до покращення життя багатьох
                      маленьких українців
                    </Typography>
                    <Box sx={{ marginRight: { md: '17px', xl: '0' } }}>
                      <ContainedButton
                        btnName="btnContainedWhite"
                        text="Долучитися"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  justifySelf: { xs: 'center', md: 'flex-start' },
                  position: 'relative',
                  '::before': {
                    ...defaultStylesBgEl,
                    top: {
                      xs: '',
                      md: '376px',
                      lg: '446px',
                      xl: '551px',
                    },
                    bottom: { xs: '-22px' },
                    left: {
                      xs: '2px',
                      md: '300px',
                      lg: '397px',
                      xl: '549px',
                    },
                    width: {
                      xs: '36px',
                      md: '40px',
                      lg: '57px',
                      xl: '82px',
                    },
                    height: {
                      xs: '18px',
                      md: '20px',
                      lg: '41px',
                      xl: '41px',
                    },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_2Triangles.png)`,
                  },
                  '::after': {
                    ...defaultStylesBgEl,
                    top: { xs: '-35px', md: '350px', lg: '466px', xl: '580px' },
                    left: { xs: '', md: '-351px', lg: '-502px', xl: '-725px' },
                    right: { xs: '56px' },
                    width: { xs: '13px', md: '11px', lg: '20px', xl: '20px' },
                    height: { xs: '9px', md: '9px', lg: '14px', xl: '14px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    transform: 'rotateZ(270deg)',
                  },
                }}>
                <Box
                  sx={{
                    '::before': {
                      ...defaultStylesBgEl,
                      top: { xs: '0', md: '380px', lg: '515px', xl: '632px' },
                      left: {
                        xs: '',
                        md: '-314px',
                        lg: '-456px',
                        xl: '-661px',
                      },
                      right: { xs: '0' },
                      width: { xs: '27px', md: '23px', lg: '30px', xl: '41px' },
                      height: {
                        xs: '27px',
                        md: '24px',
                        lg: '30px',
                        xl: '41px',
                      },
                      backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_yellow_triangle.png)`,
                      transform: 'rotateZ(180deg)',
                    },
                  }}>
                  <Box
                    sx={{
                      width: {
                        xs: '320px',
                        md: '344px',
                        lg: '450px',
                        xl: '549px',
                      },
                      height: {
                        xs: '320px',
                        md: '376px',
                        lg: '450px',
                        xl: '549px',
                      },
                      borderRadius: {
                        xs: '320px',
                        md: '300px 309px 323px 0px',
                      },
                      background: {
                        xs: theme.palette.colors.circle,
                        md: theme.palette.colors.mainsecond,
                      },
                      opacity: { xs: '.9', md: '.8' },
                    }}>
                    <Box
                      sx={{
                        color: 'white',
                        padding: {
                          xs: '62px 50px 0 50px',
                          md: '101px 10px 0 21px',
                          lg: '100px 88px 0 42px',
                          xl: '142px 122px 0 115px',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: {
                            xs: '1.125rem',
                            md: '1.25rem',
                            lg: '1.5rem',
                          },
                          fontWeight: theme.typography.const.fontWeight.bold,
                          margin: {
                            xs: '0 0 8px 0',
                            md: '0 16px 6px 0',
                            lg: '16px',
                            xl: '15px',
                          },
                          textAlign: 'center',
                        }}>
                        ГО
                      </Typography>
                      <Typography sx={circleTextStyles}>
                        Готові співпрацювати задля створення проектів для
                        розвитку дітей? Звертайтеся до нас, разом ми можемо
                        зробити більше для дітей та їх майбутнього
                      </Typography>
                      <Box sx={{ margin: { md: '0 14px 0 0', xl: '0' } }}>
                        <ContainedButton
                          btnName="btnContainedWhite"
                          text="Долучитися"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  justifySelf: { xs: 'center', md: 'flex-end' },
                  position: 'relative',
                  '::before': {
                    ...defaultStylesBgEl,
                    display: { xl: 'block' },
                    top: '502px',
                    left: '-97px',
                    width: '20px',
                    height: '14px',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    transform: 'rotateZ(270deg)',
                  },
                }}>
                <Box
                  sx={{
                    width: {
                      xs: '320px',
                      md: '344px',
                      lg: '450px',
                      xl: '549px',
                    },
                    height: {
                      xs: '320px',
                      md: '376px',
                      lg: '450px',
                      xl: '549px',
                    },
                    borderRadius: { xs: '320px', md: '323px 0px 309px 300px' },
                    background: theme.palette.colors.mainsecond,
                    opacity: '0.8',
                  }}>
                  <Box
                    sx={{
                      color: 'white',
                      padding: {
                        xs: '62px 50px 0 50px',
                        md: '88px 24px 0 30px',
                        lg: '100px 42px 0 67px',
                        xl: '158px 99px 0 104px',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: {
                          xs: '1.125rem',
                          md: '1.25rem',
                          lg: '1.5rem',
                        },
                        fontWeight: theme.typography.const.fontWeight.bold,
                        marginBottom: {
                          xs: '8px',
                          md: '5px',
                          lg: '16px',
                          xl: '14px',
                        },
                        textAlign: 'center',
                      }}>
                      Фонд
                    </Typography>
                    <Typography sx={circleTextStyles}>
                      Ми відкриті для обміну ідеями, знаннями та досвідом в
                      роботі з дітьми та створенні проектів, які б забезпечували
                      розвиток їх талантів та навичок. Втілимо мрії дітей разом
                    </Typography>
                    <ContainedButton
                      btnName="btnContainedWhite"
                      text="Долучитися"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  justifySelf: { xs: 'center', md: 'flex-start' },
                  position: 'relative',
                  '::before': {
                    ...defaultStylesBgEl,
                    top: { xs: '-41px', md: '368px', lg: '389px', xl: '403px' },
                    bottom: { xs: '' },
                    left: { xs: '', md: '279px', lg: '437px', xl: '588px' },
                    right: { xs: '1px' },
                    width: { xs: '47px', md: '62px', lg: '87px', xl: '109px' },
                    height: {
                      xs: '74px',
                      md: '96px',
                      lg: '111px',
                      xl: '170px',
                    },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamond_triangle.png)`,
                  },
                  '::after': {
                    ...defaultStylesBgEl,
                    display: { md: 'none' },
                    top: { xs: '', md: '-10px' },
                    bottom: { xs: '2px' },
                    left: { xs: '1px', md: '-10px' },
                    right: { xs: '' },
                    width: { xs: '20px', md: '58px' },
                    height: { xs: '14px', md: '58px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                    transform: 'rotateZ(270deg)',
                  },
                }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: {
                      xs: '320px',
                      md: '344px',
                      lg: '450px',
                      xl: '549px',
                    },
                    height: {
                      xs: '320px',
                      md: '376px',
                      lg: '450px',
                      xl: '549px',
                    },
                    borderRadius: { xs: '320px', md: '0 323px 309px 300px' },
                    background: theme.palette.colors.circle,
                    opacity: '0.9',
                  }}>
                  <Box
                    sx={{
                      color: 'white',
                      padding: {
                        xs: '37px 50px 0 50px',
                        md: '54px 34px 0 34px',
                        lg: '75px 41px 0 42px',
                        xl: '148px 62px 0 65px',
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
                    <ContainedButton
                      btnName="btnContainedWhite"
                      text="Долучитися"
                      wider
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
      <section id="team" className="scroll-section">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ marginBottom: { xs: '47px', md: '72px', xl: '129px' } }}>
          <Typography sx={sectionTitleStyles}>Команда</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                xs: '0 1.28rem 0 1.38rem',
                md: '0 2.3rem 0 2.2rem',
                xl: '0 2.3rem 0 3.2rem',
              },
              marginTop: { xs: '20px', md: '49px' },
            }}>
            <Stack
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginBottom: { xs: '26px', md: '0', lg: '50px', xl: '25px' },
              }}>
              <Box sx={{ maxWidth: { md: '500px', lg: '650px', xl: '820px' } }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '1.125rem',
                      md: '1.5rem',
                      lg: '1.8rem',
                      xl: '2rem',
                    },
                    marginBottom: { xs: '7px', xl: '0' },
                    lineHeight: 'normal',
                  }}>
                  Олександр Синько
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
                    fontWeight: theme.typography.const.fontWeight.bold,
                    marginBottom: { xs: '8px', xl: '2px' },
                    lineHeight: 'normal',
                  }}>
                  Засновник фонду
                </Typography>
                <Box
                  sx={{
                    marginBottom: { xs: '25px' },
                  }}>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                      lineHeight: 'normal',
                    }}>
                    Режисер, продюсер, спортивний тренер, менеджер спортивного
                    клубу.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
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
                  position: 'relative',
                  bottom: { md: '30px', xl: '13px' },
                  marginLeft: { md: '20px', xl: '26px' },
                  '::before': {
                    ...defaultStylesBgEl,
                    top: {
                      xs: '',
                      md: '205px',
                      xl: '145px',
                    },
                    bottom: { xs: '-50px' },
                    left: {
                      xs: '',
                      md: '108px',
                      xl: '245px',
                    },
                    right: { xs: '-73px' },
                    width: {
                      xs: '48px',
                      md: '61px',
                      lg: '78px',
                      xl: '128px',
                    },
                    height: {
                      xs: '68px',
                      md: '86px',
                      lg: '138px',
                      xl: '182px',
                    },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_3triangles.png)`,
                  },
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
                justifyContent: 'flex-start',
              }}>
              <Box
                sx={{
                  maxWidth: { md: '500px', lg: '650px', xl: '753px' },
                }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '1.125rem',
                      md: '1.5rem',
                      lg: '1.8rem',
                      xl: '2rem',
                    },
                    marginBottom: { xs: '8px', xl: '0' },
                    lineHeight: 'normal',
                  }}>
                  Катерина Синько
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
                    fontWeight: theme.typography.const.fontWeight.bold,
                    marginBottom: { xs: '8px', xl: '7px' },
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
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                      lineHeight: 'normal',
                    }}>
                    Адептка сімейного бізнесу, більше 15 років в PR, маркетингу,
                    продажах.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
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
                  position: 'relative',
                  marginRight: { md: '24px', xl: '78px' },
                  right: { xs: '21px', xl: '0' },
                  bottom: { md: '20px', xl: '15px' },
                  '::before': {
                    ...defaultStylesBgEl,
                    top: {
                      xs: '',
                      md: '226px',
                      lg: '-260px',
                      xl: '-219px',
                    },
                    bottom: { xs: '95px' },
                    left: {
                      xs: '-65px',
                      md: '538px',
                      lg: '-34px',
                      xl: '-217px',
                    },
                    width: {
                      xs: '52px',
                      md: '56px',
                      lg: '78px',
                      xl: '124px',
                    },
                    height: {
                      xs: '71px',
                      md: '87px',
                      lg: '106px',
                      xl: '151px',
                    },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_2blue_yellow_triangles.png)`,
                    transform: {
                      xs: 'rotateZ(270deg)',
                      md: 'rotateZ(0deg)',
                      lg: 'rotateZ(270deg)',
                    },
                  },
                  '::after': {
                    ...defaultStylesBgEl,
                    top: { xs: '', md: '198px', lg: '92px', xl: '80px' },
                    bottom: { xs: '3px' },
                    left: {
                      xs: '-45px',
                      md: '-2px',
                      lg: '-52px',
                      xl: '-190px',
                    },
                    right: { xs: '' },
                    width: { xs: '19px', md: '29px', xl: '41px' },
                    height: { xs: '19px', md: '29px', xl: '41px' },
                    backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_blueTriangle90deg.png)`,
                    transform: { md: 'rotateZ(270deg)', lg: 'rotateZ(0deg)' },
                  },
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
      <section id="news" className="scroll-section">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ marginBottom: { xs: '50px', md: '100px', xl: '82px' } }}>
          <Typography sx={sectionTitleStyles}>Новини</Typography>
          <Box
            sx={{
              padding: { xs: '0 1.25rem 0 1.25rem', md: '0 3.2rem 0 3.2rem' },
              marginTop: { xs: '20px', md: '30px', lg: '50px' },
            }}>
            <Carousel
              items={data}
              showPagination={false}
              isLoading={loading}
              renderContent={(item) => <CardNewsItem item={item} />}
            />
          </Box>
        </Container>
      </section>
      <section id="donate" className="scroll-section">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            marginBottom: { xs: '39px', md: '163px', xl: '249px' },
            position: 'relative',
            '::before': {
              ...defaultStylesBgEl,
              top: { md: '20px', lg: '-1px', xl: '14px' },
              left: { lg: '7px', xl: '133px' },
              width: { md: '147px', lg: '174px', xl: '251px' },
              height: { md: '145px', lg: '174px', xl: '248px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_leaves.png)`,
              transform: { md: 'rotateZ(224deg)', lg: 'rotateZ(192deg)' },
            },
            '::after': {
              ...defaultStylesBgEl,
              bottom: { md: '-83px', lg: '-61px', xl: '-56px' },
              right: {
                md: '169px',
                lg: '2px',
                xl: '208px',
              },
              width: { md: '147px', lg: '174px', xl: '227px' },
              height: { md: '145px', lg: '174px', xl: '224px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_leaves.png)`,
              transform: { md: 'rotateZ(99deg)', lg: 'rotateZ(0deg)' },
            },
          }}>
          <Typography sx={sectionTitleStyles}>Донати</Typography>
          <Box
            sx={{
              padding: {
                md: '0 2.5rem 0 2.3rem',
                lg: '0 5.5rem 0 5.3rem',
                xl: '0 19rem',
              },
            }}>
            <Box
              sx={{
                position: 'relative',
                backgroundColor: 'white',
                zIndex: '1',
                padding: {
                  xs: '0 1.25rem 0 1.25rem',
                  md: '1.7rem 3.6rem 2.12rem 3.6rem',
                  xl: '3.7rem 6.7rem 2.12rem 6.6rem',
                },
                marginTop: { xs: '16px', md: '68px', lg: '50px' },
                borderRadius: { md: '60px' },
                border: { md: ` 4px solid ${theme.palette.colors.mainfirst}` },
                height: { md: '450px', xl: '485px' },
                '::before': {
                  ...defaultStylesBgEl,
                  top: {
                    xs: '-88px',
                    md: '-118px',
                    lg: '-135px',
                    xl: '-118px',
                  },
                  right: {
                    xs: '19px',
                    md: '-4px',
                    lg: '-73px',
                    xl: '-182px',
                  },
                  width: { xs: '48px', md: '50px', lg: '80px', xl: '95px' },
                  height: { xs: '68px', md: '75px', lg: '112px', xl: '135px' },
                  backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_3triangles.png)`,
                },
                '::after': {
                  ...defaultStylesBgEl,
                  display: { xs: 'none', xl: 'block' },
                  bottom: '-52px',
                  left: '-216px',
                  width: '135px',
                  height: '114px',
                  backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_2diamonds_triangle_blue.png)`,
                  transform: { md: 'rotateZ(99deg)', lg: 'rotateZ(0deg)' },
                },
              }}>
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', md: '1.25rem' },
                  lineHeight: 'normal',
                  marginBottom: { xs: '30px', md: '35px', xl: '61px' },
                }}>
                Допомогти дитині зрозуміти її вподобання та таланти, і створити
                необхідну атмосферу для її розвитку.
              </Typography>
              <DonateTab />
            </Box>
          </Box>
        </Container>
      </section>
      <section id="partners" className="scroll-section">
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            position: 'relative',
            '::before': {
              ...defaultStylesBgEl,
              top: {
                xs: '-17px',
                md: '19px',
                lg: '-48px',
                xl: '-22px',
              },
              left: {
                xs: '29px',
                md: '39px',
                lg: '137px',
                xl: '226px',
              },
              width: { xs: '13px', md: '16px', lg: '26px' },
              height: { xs: '13px', md: '16px', lg: '26px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_yellow_triangle.png)`,
              transform: 'rotateZ(270deg)',
            },
            '::after': {
              ...defaultStylesBgEl,
              top: {
                xs: '9px',
                md: '47px',
                lg: '33px',
                xl: '40px',
              },
              left: {
                xs: '79px',
                md: '177px',
                lg: '287px',
                xl: '451px',
              },
              width: { xs: '16px', md: '20px', lg: '32px' },
              height: { xs: '16px', md: '20px', lg: '32px' },
              backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_diamnd_blue_darkblue.png)`,
              transform: 'rotateZ(90deg)',
            },
          }}>
          <Typography sx={sectionTitleStyles}>Партнери</Typography>
          <Box
            sx={{
              position: 'relative',
              padding: { xs: '0 1.25rem', sm: '0 2.25rem', md: '0 2.25rem' },
              margin: { xs: '20px 0 50px 0', md: '50px 0 100px 0' },
              '::before': {
                ...defaultStylesBgEl,
                top: {
                  xs: '-23px',
                  md: '-41px',
                  lg: '-50px',
                  xl: '-46px',
                },
                right: {
                  xs: '33px',
                  md: '39px',
                  lg: '101px',
                  xl: '240px',
                },
                width: { xs: '20px', md: '27px', lg: '41px' },
                height: { xs: '20px', md: '27px', lg: '41px' },
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_yellow_triangle.png)`,
                transform: 'rotateZ(180deg)',
              },
              '::after': {
                ...defaultStylesBgEl,
                top: {
                  xs: '-46px',
                  md: '-66px',
                  lg: '-78px',
                  xl: '-75px',
                },
                right: {
                  xs: '93px',
                  md: '203px',
                  lg: '310px',
                  xl: '482px',
                },
                width: {
                  xs: '10px',
                  md: '13px',
                  lg: '20px',
                },
                height: {
                  xs: '8px',
                  md: '10px',
                  lg: '14px',
                },
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgElements/bg_light_blue_triangle.png)`,
                transform: 'rotateZ(270deg)',
              },
            }}>
            <Grid
              container
              columns={15}
              spacing={{ xs: 5, sm: 3, md: 3, lg: 6 }}
              sx={{ padding: { sm: '0 1.125rem' } }}
              zeroMinWidth="true">
              <RenderPartners />
            </Grid>
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default HomeContent;

HomeContent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      imagePath: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};
