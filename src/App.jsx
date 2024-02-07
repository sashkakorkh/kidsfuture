import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import HomeContent from './pages/Home';
import Header from './components/Header';
import theme from './theme/theme';
import News from './pages/News';
import ScrollToHashElement from './components/ScrollToSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/news.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error('Error fetching or parsing JSON:', error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<Header />}>
              <Route
                index
                element={<HomeContent data={data} loading={loading} />}
              />
              <Route
                path="/news/:title"
                element={<News data={data} loading={loading} />}
              />
            </Route>
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
