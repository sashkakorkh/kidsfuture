import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    const scrollToHashElement = () => {
      const removeHashCharacter = (str) => str.slice(1);
      const hashElement = document.getElementById(removeHashCharacter(hash));

      if (hashElement) {
        hashElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest',
        });
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          const newHash = `#${section.id}`;
          if (newHash !== hash) {
            window.history.replaceState(null, null, newHash);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    if (hash) {
      setTimeout(scrollToHashElement, 100);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return null;
}

export default ScrollToHashElement;
