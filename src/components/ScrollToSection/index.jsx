import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* function ScrollToHashElement() {
  const location = useLocation();
  const navigate = useNavigate();

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
} */

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

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Scroll to hash element when the component mounts
    if (hash) {
      setTimeout(scrollToHashElement, 100);
    }

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return null;
}

export default ScrollToHashElement;
