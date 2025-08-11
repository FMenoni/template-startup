import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollPosition = () => {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  // Sauvegarder la position de scroll
  const saveScrollPosition = () => {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY;
      
      // Sauvegarder la position globale pour la restaurer sur la nouvelle page
      localStorage.setItem('lastScrollPosition', scrollPosition.toString());
    }
  };

  // Restaurer la position de scroll
  const restoreScrollPosition = () => {
    if (typeof window !== 'undefined') {
      const globalPosition = localStorage.getItem('lastScrollPosition');
      
      if (globalPosition) {
        const positionToRestore = parseInt(globalPosition);
        
        // Restaurer la position après un court délai pour s'assurer que la page est chargée
        setTimeout(() => {
          window.scrollTo(0, positionToRestore);
        }, 100);
      }
    }
  };

  // Ajouter l'écouteur de scroll pour sauvegarder la position en continu
  useEffect(() => {
    const handleScroll = () => {
      saveScrollPosition();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Restaurer la position lors du changement de page
  useEffect(() => {
    if (!isInitialMount.current) {
      restoreScrollPosition();
    } else {
      isInitialMount.current = false;
    }
  }, [pathname]);

  return {
    saveScrollPosition,
    restoreScrollPosition
  };
};
