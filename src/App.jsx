import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import HomeContent from './pages/Home';
import Header from './components/Header';
import theme from './theme/theme';
import News from './pages/News';
import ScrollToHashElement from './components/ScrollToSection';

function App() {
  const [newsItem, setNewsItem] = useState({});
  console.log(newsItem);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomeContent setNewsItem={setNewsItem} />} />
            <Route path="/news" element={<News item={newsItem} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
