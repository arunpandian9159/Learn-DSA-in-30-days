import { useEffect } from "react";

export default function useTamilResourceLinks() {
  useEffect(() => {
    function handleClick(e) {
      const target = e.target.closest('.tamil-resource');
      if (target && target.dataset.youtubeUrl) {
        window.open(target.dataset.youtubeUrl, '_blank');
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
} 