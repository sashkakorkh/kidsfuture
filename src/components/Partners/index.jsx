import React from 'react';
import { Box, Grid, Link, useTheme } from '@mui/material';
import './styles.scss';
import { images } from '../../assets/images';

function RenderPartners() {
  const theme = useTheme();
  const partners = [
    {
      alt: 'logos_school_logo',
      imgUrl: images.logosLogo,
      imgUrlWebp: images.logosLogoWebp,
      href: 'https://www.logos-school.com/',
      className: 'logos',
    },
    {
      alt: 'usaid_logo',
      imgUrl: images.usaidLogo,
      imgUrlWebp: images.usaidLogoWebp,
      href: 'https://www.usaid.gov/ukraine',
      className: 'usaid',
    },
    {
      alt: 'zagoriy_logo',
      imgUrl: images.zagoriyLogo,
      imgUrlWebp: images.zagoriyLogoWebp,
      href: 'https://zagoriy.foundation/',
      className: 'zagoriy',
    },
    {
      alt: 'paragraph_logo',
      imgUrl: images.paragraphLogo,
      imgUrlWebp: images.paragraphLogoWebp,
      href: 'https://www.prgrf.com/',
      className: 'paragraph',
    },
    {
      alt: 'kiyanochka_logo',
      imgUrl: images.kiyanochkaLogo,
      imgUrlWebp: images.kiyanochkaLogoWebp,
      href: 'https://kiyanochka.kiev.ua/',
      className: 'kiyanochka',
    },
    {
      alt: 'molochniy_alians_logo',
      imgUrl: images.molochniyAliansLogo,
      imgUrlWebp: images.molochniyAliansLogoWebp,
      href: 'https://milkalliance.com.ua/',
      className: 'molochniy',
    },
    {
      alt: '100idei_logo',
      imgUrl: images.stoIdei,
      imgUrlWebp: images.stoIdeiWebp,
      href: 'https://100idey.com.ua/',
      className: 'stoIdei',
    },
    {
      alt: 'italiec_z_beirutu_logo',
      imgUrl: images.italianLogo,
      imgUrlWebp: images.italianLogoWebp,
      href: 'https://izb.com.ua/',
      className: 'italiec',
    },
    {
      alt: 'ednannia_logo',
      imgUrl: images.ednanniaLogo,
      imgUrlWebp: images.ednanniaLogoWebp,
      href: 'https://ednannia.ua/',
      className: 'ednannia',
    },
    {
      alt: 'vano-ivano_logo',
      imgUrl: images.vanoIvanoLogo,
      imgUrlWebp: images.vanoIvanoLogoWebp,
      href: 'https://www.facebook.com/vanoivanorestoran/',
      className: 'vanoivano',
    },
    {
      alt: 'ayurveda_logo',
      imgUrl: images.ayurvedaLogo,
      imgUrlWebp: images.ayurvedaLogoWebp,
      href: 'https://ayurveda-center.com.ua/',
      className: 'ayurveda',
    },
    {
      alt: 'rud_logo',
      imgUrl: images.rudLogo,
      imgUrlWebp: images.rudLogoWebp,
      href: 'https://rud.ua/',
      className: 'rud',
    },
    {
      alt: 'dpm_logo',
      imgUrl: images.dpmLogo,
      imgUrlWebp: images.dpmLogoWebp,
      href: 'https://museum.kpi.ua/',
      className: 'dpm',
    },
    {
      alt: 'satori_logo',
      imgUrl: images.satorilogo,
      imgUrlWebp: images.satorilogoWebp,
      href: 'https://www.instagram.com/satori.kyiv/',
      className: 'satori',
    },
    {
      alt: 'milkbar_logo',
      imgUrl: images.milkbarLogo,
      imgUrlWebp: images.milkbarLogoWebp,
      href: 'https://milkbar.com.ua/',
      className: 'milkbar',
    },
    {
      alt: 'danit_logo',
      imgUrl: images.danitLogo,
      imgUrlWebp: images.danitLogoWebp,
      href: 'https://dan-it.com.ua/uk/',
      className: 'danit',
    },
    {
      alt: 'united_ukrainians_logo',
      imgUrl: images.unitedUkrainiansLogo,
      imgUrlWebp: images.unitedUkrainiansLogoWebp,
      href: 'https://www.facebook.com/profile.php?id=100090775001194',
      className: 'united_ukrainians',
    },
    {
      alt: 'ranok_logo',
      imgUrl: images.ranokLogo,
      imgUrlWebp: images.ranokLogoWebp,
      href: 'https://www.ranok.com.ua/',
      className: 'ranok',
    },
    {
      alt: 'genesis_logo',
      imgUrl: images.genesisLogo,
      imgUrlWebp: images.genesisLogoWebp,

      href: 'https://www.gen.tech/',
      className: 'genesis',
    },
    {
      alt: 'naukma_logo',
      imgUrl: images.naukmaLogo,
      imgUrlWebp: images.naukmaLogoWebp,
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
                border: `2px solid ${theme.palette.colors.mainfirst}`,
                width: {
                  xs: '93px',
                  sm: '120px',
                  md: '130px',
                  lg: '170px',
                  xl: '281px',
                },
                height: {
                  xs: '63px',
                  sm: '90px',
                  md: '108px',
                  lg: '120px',
                  xl: '234px',
                },
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                  border: `3px solid ${theme.palette.colors.mainfirst}`,
                },
              }}>
              <picture>
                <source srcSet={partner.imgUrlWebp.srcSet} type="image/webp" />
                <img
                  src={partner.imgUrl.src}
                  srcSet={partner.imgUrl.srcSet}
                  alt={partner.alt}
                  style={{ filter: 'grayscale(100%)' }}
                  height="auto"
                  loading="lazy"
                />
              </picture>
            </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
}

export default RenderPartners;
