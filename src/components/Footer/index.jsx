import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Container,
  Icon,
  IconButton,
  Link,
  Stack,
  TableFooter,
  Typography,
  useTheme,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import logo from './logo-white.png';
import { RowMenu } from '../Menu/index';

/*
const AdressText = styled(Link)`
`;
*/

function Footer() {
  const theme = useTheme();
  return (
    <TableFooter
      component="footer"
      style={{
        height: 'auto',
        backgroundColor: theme.palette.colors.mainsecond,
        padding: {
          xs: '44px',
          md: '105px',
          lg: '1.4rem 6.2rem 3.12rem 8.38rem',
        },
      }}>
      <Container maxWidth="xl" sx={{ padding: '0' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <NavLink to="/">
            <Box
              sx={{
                height: { xs: '44px', md: '105px', lg: '113px' },
                width: { xs: '44px', md: '105px', lg: '113px' },
              }}>
              <img src={logo} alt="Logo" height="100%" width="100%" />
            </Box>
          </NavLink>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              md: '6fr',
              lg: 'repeat(2, 1fr)',
            }}
            gridTemplateRows={{ xs: '1fr', md: '1fr', lg: 'repeat(2, 1fr)' }}>
            <RowMenu />
          </Box>
          <Stack display="column">
            <Box display="flex" alignItems="center" gap="1rem">
              <Icon style={{ color: 'white' }}>
                <MailOutlineIcon />
              </Icon>
              <Link
                to="mailto:info@kidsfuture.org.ua"
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
            <Box display="flex" alignItems="center" gap="1rem">
              <Icon style={{ color: 'white' }}>
                <CallOutlinedIcon />
              </Icon>
              <Link
                to="tel:+38093 549 8057"
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
          </Stack>
        </Stack>
      </Container>
      <Box
        style={{
          backgroundColor: theme.palette.colors.footercontrast,
          height: '53px',
        }}>
        <Typography
          color="white"
          style={{
            textAlign: 'center',
            fontWeight: theme.typography.const.fontWeight.bold,
          }}>
          © 2022-2023 БФ «Kids Future»
        </Typography>
      </Box>
    </TableFooter>
  );
}

export default Footer;
