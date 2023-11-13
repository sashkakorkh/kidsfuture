import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import banner from './boy_and_girl.png';
import { ContainedButton } from '../../components/Button';
import diamond from './bg_diamond.png';
import triangle from './bg_triangle.png';
import square from './bg_square.png';

function HomeContent() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" disableGutters>
      <section>
        <Stack
          sx={{
            flexDirection: { xs: 'column', lg: 'row' },
            padding: { xs: '0 1rem', md: '0 6rem', lg: '0 5rem 0 12rem' },
            marginTop: { xs: '15px', md: '40px', lg: '54px' },
          }}>
          <Stack sx={{ padding: { xs: '', md: '', lg: '' } }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: theme.typography.const.fontFamily.secondary,
                fontWeight: theme.typography.const.fontWeight.bold,
                fontSize: { xs: '2.25rem', md: '3.25rem', lg: '4rem' },
                maxWidth: { md: '457px', lg: '567px' },
              }}>
              Розвиток. Діти. Майбутнє.
            </Typography>
            <Typography
              sx={{
                lineHeight: '1.2',
                textAlign: 'left',
                fontFamily: theme.typography.const.fontFamily.primary,
                fontSize: { xs: '1rem', md: '1.25rem' },
                margin: { xs: '8px 0 16px 0', lg: '22px 0 51px 0' },
                padding: { xs: '0 1.5rem 0 0', md: '0 7rem 0 0' },
              }}>
              Ми - сімейний благодійний фонд, який розробляє та підтримує
              проєкти, що спрямовані на всебічний розвиток дітей та підлітків.
            </Typography>
            <ContainedButton textColorBlack={false} text="Долучитися" />
          </Stack>
          <Box
            sx={{
              top: '-63px',
              height: {
                xs: '264px',
                md: '456px',
                lg: '100%',
              },
              width: {
                xs: '310px',
                md: '544px',
                lg: '129%',
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
    </Container>
  );
}

export default HomeContent;
