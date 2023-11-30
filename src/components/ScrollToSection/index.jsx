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
    if (hash) {
      setTimeout(scrollToHashElement, 100);
    }
  }, [location]);

  return null;
}
export default ScrollToHashElement;
