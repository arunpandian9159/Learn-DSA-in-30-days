import { useCallback } from "react";

export default function useTOCMobile() {
  const openTOC = useCallback(() => {
    document.getElementById('toc').classList.remove('hidden');
    document.getElementById('toc-overlay').classList.remove('hidden');
  }, []);

  const closeTOC = useCallback(() => {
    document.getElementById('toc').classList.add('hidden');
    document.getElementById('toc-overlay').classList.add('hidden');
  }, []);

  const toggleTOC = useCallback(() => {
    document.getElementById('toc').classList.toggle('hidden');
    document.getElementById('toc-overlay').classList.toggle('hidden');
  }, []);

  return { openTOC, closeTOC, toggleTOC };
} 