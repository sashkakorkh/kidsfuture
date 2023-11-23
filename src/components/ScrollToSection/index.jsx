import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const { hash } = location;
    const removeHashCharacter = (str) => str.slice(1);

    if (hash) {
      return document.getElementById(removeHashCharacter(hash));
    }
    return null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: 'smooth',
        // block: "end",
        inline: 'nearest',
      });
    }
  }, [hashElement]);

  return null;
}

export default ScrollToHashElement;
