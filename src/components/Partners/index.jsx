import React from 'react';
import { Box, Grid, Link, useTheme } from '@mui/material';
import './styles.scss';

function RenderPartners() {
  const theme = useTheme();
  const partners = [
    {
      alt: 'logos_school_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/logos_school_logo.png`,
      href: 'https://www.logos-school.com/',
      className: 'logos',
    },
    {
      alt: 'usaid_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/USAID_logo.png`,
      href: 'https://www.usaid.gov/ukraine',
      className: 'usaid',
    },
    {
      alt: 'zagoriy_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/zagoriy_foundation_logo.png`,
      href: 'https://zagoriy.foundation/',
      className: 'zagoriy',
    },
    {
      alt: 'paragraph_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/paragraf_logo.png`,
      href: 'https://www.prgrf.com/',
      className: 'paragraph',
    },
    {
      alt: 'kiyanochka_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/kiyanochka_logo.png`,
      href: 'https://kiyanochka.kiev.ua/',
      className: 'kiyanochka',
    },
    {
      alt: 'molochniy_alians_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/molochniy-alians_logo.png`,
      href: 'https://milkalliance.com.ua/',
      className: 'molochniy',
    },
    {
      alt: '100idei_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/100idei_logo.png`,
      href: 'https://100idey.com.ua/',
      className: 'stoIdei',
    },
    {
      alt: 'italiec_z_beirutu_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/italian_from_beirut_logo.png`,
      href: 'https://izb.com.ua/',
      className: 'italiec',
    },
    {
      alt: 'ednannia_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/ednannia_logo.png`,
      href: 'https://ednannia.ua/',
      className: 'ednannia',
    },
    {
      alt: 'vano-ivano_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/vano_ivano.png`,
      href: 'https://www.facebook.com/vanoivanorestoran/',
      className: 'vanoivano',
    },
    {
      alt: 'ayurveda_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/ayurveda_logo.png`,
      href: 'https://ayurveda-center.com.ua/',
      className: 'ayurveda',
    },
    {
      alt: 'rud_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/rud_logo.png`,
      href: 'https://rud.ua/',
      className: 'rud',
    },
    {
      alt: 'dpm_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/dpm_logo.png`,
      href: 'https://museum.kpi.ua/',
      className: 'dpm',
    },
    {
      alt: 'satori_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/satori_logo.png`,
      href: 'https://www.instagram.com/satori.kyiv/',
      className: 'satori',
    },
    {
      alt: 'milkbar_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/milkbar_logo.png`,
      href: 'https://milkbar.com.ua/',
      className: 'milkbar',
    },
    {
      alt: 'danit_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/dan_logo.png`,
      href: 'https://dan-it.com.ua/uk/',
      className: 'danit',
    },
    {
      alt: 'united_ukrainians_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/united_ukrainians_logo.jpg`,
      href: 'https://www.facebook.com/profile.php?id=100090775001194',
      className: 'united_ukrainians',
    },
    {
      alt: 'ranok_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/ranok_logo.png`,
      href: 'https://www.ranok.com.ua/',
      className: 'ranok',
    },
    {
      alt: 'genesis_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/genesis_logo.jpg`,
      href: 'https://www.gen.tech/',
      className: 'genesis',
    },
    {
      alt: 'naukma_logo',
      imgUrl: `${process.env.PUBLIC_URL}/partnersLogos/NaUKMA_logo.png`,
      href: 'https://www.ukma.edu.ua/',
      className: 'naukma',
    },
  ];
  return (
    <>
      {partners.map((partner) => (
        <Grid item key={partner.alt} xs={5} md={3}>
          <Link href={partner.href} underline="none" target="_blank">
            <Box
              className={partner.className}
              sx={{
                border: ` 2px solid ${theme.palette.colors.mainfirst}`,
                width: { xs: '93px', sm: '120px', md: '130px', xl: '281px' },
                height: { xs: '63px', sm: '90px', md: '108px', xl: '234px' },
              }}>
              <img
                src={partner.imgUrl}
                height="auto"
                alt={partner.alt}
                style={{ filter: 'grayscale(100%)' }}
              />
            </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
}

export default RenderPartners;
