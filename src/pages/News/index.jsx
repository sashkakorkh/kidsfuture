import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Carousel from '../../components/Carousel';
import CardForImage from '../../components/CardForImage';
import { TextButton } from '../../components/Button';

function News({ data, loading }) {
  const { title } = useParams();
  const theme = useTheme();
  const newsItem =
    data.length > 0 ? data.find((item) => item.title === title) : null;
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ margin: { xs: '43px 0 48px 0' } }}>
          <Box sx={{ padding: { xs: '0 3.25rem' } }}>
            <Carousel
              items={newsItem.imagePath}
              renderContent={(item) => (
                <CardForImage item={item} newsItem={newsItem} />
              )}
              isLoading={loading}
              showPagination
            />
          </Box>
          <Box sx={{ padding: { xs: '0 1.25rem' }, marginTop: { xs: '53px' } }}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: { xs: '16px' },
                fontSize: { xs: '1.125rem' },
                lineHeight: 'normal',
                fontWeight: theme.typography.const.fontWeight.bold,
              }}>
              {newsItem.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' },
                lineHeight: 'normal',
              }}>
              {newsItem.text}
            </Typography>
            <NavLink
              to="/#news"
              style={{
                textDecoration: 'none',
                display: 'block',
                marginTop: '17px',
                textAlign: 'center',
              }}>
              <TextButton text="Назад" />
            </NavLink>
          </Box>
        </Container>
      )}
    </>
  );
}
export default News;

News.propTypes = {
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
