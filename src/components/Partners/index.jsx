import React from 'react';
import { Box, Grid, Link, useTheme } from '@mui/material';
import './styles.scss';
import logosLogo from '../../images/partnersLogos/logos_school_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes[]=1600';
import logosLogoWebp from '../../images/partnersLogos/logos_school_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes[]=1600&format=webp';
import usaidLogo from '../../images/partnersLogos/USAID_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import usaidLogoWebp from '../../images/partnersLogos/USAID_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import zagoriyLogo from '../../images/partnersLogos/zagoriy_foundation_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import zagoriyLogoWebp from '../../images/partnersLogos/zagoriy_foundation_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import paragraphLogo from '../../images/partnersLogos/paragraf_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import paragraphLogoWebp from '../../images/partnersLogos/paragraf_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import kiyanochkaLogo from '../../images/partnersLogos/kiyanochka_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import kiyanochkaLogoWebp from '../../images/partnersLogos/kiyanochka_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import molochniyAliansLogo from '../../images/partnersLogos/molochniy-alians_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import molochniyAliansLogoWebp from '../../images/partnersLogos/molochniy-alians_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import stoIdei from '../../images/partnersLogos/100idei_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import stoIdeiWebp from '../../images/partnersLogos/100idei_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import italianLogo from '../../images/partnersLogos/italian_from_beirut_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import italianLogoWebp from '../../images/partnersLogos/italian_from_beirut_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import ednanniaLogo from '../../images/partnersLogos/ednannia_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import ednanniaLogoWebp from '../../images/partnersLogos/ednannia_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import vanoIvanoLogo from '../../images/partnersLogos/vano_ivano.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import vanoIvanoLogoWebp from '../../images/partnersLogos/vano_ivano.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import ayurvedaLogo from '../../images/partnersLogos/ayurveda_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import ayurvedaLogoWebp from '../../images/partnersLogos/ayurveda_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import rudLogo from '../../images/partnersLogos/rud_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import rudLogoWebp from '../../images/partnersLogos/rud_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import dpmLogo from '../../images/partnersLogos/dpm_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import dpmLogoWebp from '../../images/partnersLogos/dpm_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import satorilogo from '../../images/partnersLogos/satori_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import satorilogoWebp from '../../images/partnersLogos/satori_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import milkbarLogo from '../../images/partnersLogos/milkbar_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import milkbarLogoWebp from '../../images/partnersLogos/milkbar_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import danitLogo from '../../images/partnersLogos/dan_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import danitLogoWebp from '../../images/partnersLogos/dan_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import unitedUkrainiansLogo from '../../images/partnersLogos/united_ukrainians_logo.jpg?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import unitedUkrainiansLogoWebp from '../../images/partnersLogos/united_ukrainians_logo.jpg?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import ranokLogo from '../../images/partnersLogos/ranok_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import ranokLogoWebp from '../../images/partnersLogos/ranok_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import genesisLogo from '../../images/partnersLogos/genesis_logo.jpg?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import genesisLogoWebp from '../../images/partnersLogos/genesis_logo.jpg?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';
import naukmaLogo from '../../images/partnersLogos/NaUKMA_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600';
import naukmaLogoWebp from '../../images/partnersLogos/NaUKMA_logo.png?sizes[]=360,sizes[]=768,sizes[]=1200,sizes=[]1600&format=webp';

function RenderPartners() {
  const theme = useTheme();
  const partners = [
    {
      alt: 'logos_school_logo',
      imgUrl: logosLogo,
      imgUrlWebp: logosLogoWebp,
      href: 'https://www.logos-school.com/',
      className: 'logos',
    },
    {
      alt: 'usaid_logo',
      imgUrl: usaidLogo,
      imgUrlWebp: usaidLogoWebp,
      href: 'https://www.usaid.gov/ukraine',
      className: 'usaid',
    },
    {
      alt: 'zagoriy_logo',
      imgUrl: zagoriyLogo,
      imgUrlWebp: zagoriyLogoWebp,
      href: 'https://zagoriy.foundation/',
      className: 'zagoriy',
    },
    {
      alt: 'paragraph_logo',
      imgUrl: paragraphLogo,
      imgUrlWebp: paragraphLogoWebp,
      href: 'https://www.prgrf.com/',
      className: 'paragraph',
    },
    {
      alt: 'kiyanochka_logo',
      imgUrl: kiyanochkaLogo,
      imgUrlWebp: kiyanochkaLogoWebp,
      href: 'https://kiyanochka.kiev.ua/',
      className: 'kiyanochka',
    },
    {
      alt: 'molochniy_alians_logo',
      imgUrl: molochniyAliansLogo,
      imgUrlWebp: molochniyAliansLogoWebp,
      href: 'https://milkalliance.com.ua/',
      className: 'molochniy',
    },
    {
      alt: '100idei_logo',
      imgUrl: stoIdei,
      imgUrlWebp: stoIdeiWebp,
      href: 'https://100idey.com.ua/',
      className: 'stoIdei',
    },
    {
      alt: 'italiec_z_beirutu_logo',
      imgUrl: italianLogo,
      imgUrlWebp: italianLogoWebp,
      href: 'https://izb.com.ua/',
      className: 'italiec',
    },
    {
      alt: 'ednannia_logo',
      imgUrl: ednanniaLogo,
      imgUrlWebp: ednanniaLogoWebp,
      href: 'https://ednannia.ua/',
      className: 'ednannia',
    },
    {
      alt: 'vano-ivano_logo',
      imgUrl: vanoIvanoLogo,
      imgUrlWebp: vanoIvanoLogoWebp,
      href: 'https://www.facebook.com/vanoivanorestoran/',
      className: 'vanoivano',
    },
    {
      alt: 'ayurveda_logo',
      imgUrl: ayurvedaLogo,
      imgUrlWebp: ayurvedaLogoWebp,
      href: 'https://ayurveda-center.com.ua/',
      className: 'ayurveda',
    },
    {
      alt: 'rud_logo',
      imgUrl: rudLogo,
      imgUrlWebp: rudLogoWebp,
      href: 'https://rud.ua/',
      className: 'rud',
    },
    {
      alt: 'dpm_logo',
      imgUrl: dpmLogo,
      imgUrlWebp: dpmLogoWebp,
      href: 'https://museum.kpi.ua/',
      className: 'dpm',
    },
    {
      alt: 'satori_logo',
      imgUrl: satorilogo,
      imgUrlWebp: satorilogoWebp,
      href: 'https://www.instagram.com/satori.kyiv/',
      className: 'satori',
    },
    {
      alt: 'milkbar_logo',
      imgUrl: milkbarLogo,
      imgUrlWebp: milkbarLogoWebp,
      href: 'https://milkbar.com.ua/',
      className: 'milkbar',
    },
    {
      alt: 'danit_logo',
      imgUrl: danitLogo,
      imgUrlWebp: danitLogoWebp,
      href: 'https://dan-it.com.ua/uk/',
      className: 'danit',
    },
    {
      alt: 'united_ukrainians_logo',
      imgUrl: unitedUkrainiansLogo,
      imgUrlWebp: unitedUkrainiansLogoWebp,
      href: 'https://www.facebook.com/profile.php?id=100090775001194',
      className: 'united_ukrainians',
    },
    {
      alt: 'ranok_logo',
      imgUrl: ranokLogo,
      imgUrlWebp: ranokLogoWebp,
      href: 'https://www.ranok.com.ua/',
      className: 'ranok',
    },
    {
      alt: 'genesis_logo',
      imgUrl: genesisLogo,
      imgUrlWebp: genesisLogoWebp,

      href: 'https://www.gen.tech/',
      className: 'genesis',
    },
    {
      alt: 'naukma_logo',
      imgUrl: naukmaLogo,
      imgUrlWebp: naukmaLogoWebp,
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
