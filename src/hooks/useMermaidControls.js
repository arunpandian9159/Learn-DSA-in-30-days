import { useEffect } from "react";

export default function useMermaidControls(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const mermaidElement = container.querySelector('.mermaid');
    if (!mermaidElement) return;
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    let isTouch = false;
    let touchStartTime = 0;
    let initialDistance = 0;
    let initialScale = 1;
    let isPinching = false;

    function updateTransform() {
      mermaidElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      if (scale > 1) {
        container.classList.add('zoomed');
      } else {
        container.classList.remove('zoomed');
      }
      mermaidElement.style.cursor = isDragging ? 'grabbing' : 'grab';
    }

    // Zoom controls
    const zoomInBtn = container.querySelector('.zoom-in');
    const zoomOutBtn = container.querySelector('.zoom-out');
    const resetBtn = container.querySelector('.reset-zoom');
    const fullscreenBtn = container.querySelector('.fullscreen');

    if (zoomInBtn) zoomInBtn.onclick = () => { scale = Math.min(scale * 1.25, 4); updateTransform(); };
    if (zoomOutBtn) zoomOutBtn.onclick = () => { scale = Math.max(scale / 1.25, 0.3); if (scale <= 1) { translateX = 0; translateY = 0; } updateTransform(); };
    if (resetBtn) resetBtn.onclick = () => { scale = 1; translateX = 0; translateY = 0; updateTransform(); };
    if (fullscreenBtn) fullscreenBtn.onclick = () => {
      if (container.requestFullscreen) container.requestFullscreen();
      else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
      else if (container.msRequestFullscreen) container.msRequestFullscreen();
    };

    // Mouse Events
    mermaidElement.addEventListener('mousedown', (e) => {
      if (isTouch) return;
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      mermaidElement.style.cursor = 'grabbing';
      updateTransform();
      e.preventDefault();
    });
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseUp);
    function onMouseMove(e) {
      if (isDragging && !isTouch) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
      }
    }
    function onMouseUp() {
      if (isDragging && !isTouch) {
        isDragging = false;
        mermaidElement.style.cursor = 'grab';
        updateTransform();
      }
    }
    // Touch Events
    function getTouchDistance(touch1, touch2) {
      return Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
    }
    mermaidElement.addEventListener('touchstart', (e) => {
      isTouch = true;
      touchStartTime = Date.now();
      if (e.touches.length === 1) {
        isPinching = false;
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX - translateX;
        startY = touch.clientY - translateY;
      } else if (e.touches.length === 2) {
        isPinching = true;
        isDragging = false;
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = getTouchDistance(touch1, touch2);
        initialScale = scale;
      }
      e.preventDefault();
    }, { passive: false });
    mermaidElement.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && isDragging && !isPinching) {
        const touch = e.touches[0];
        translateX = touch.clientX - startX;
        translateY = touch.clientY - startY;
        updateTransform();
      } else if (e.touches.length === 2 && isPinching) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = getTouchDistance(touch1, touch2);
        if (initialDistance > 0) {
          const newScale = Math.min(Math.max(initialScale * (currentDistance / initialDistance), 0.3), 4);
          scale = newScale;
          updateTransform();
        }
      }
      e.preventDefault();
    }, { passive: false });
    mermaidElement.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        isDragging = false;
        isPinching = false;
        initialDistance = 0;
        setTimeout(() => { isTouch = false; }, 100);
      } else if (e.touches.length === 1 && isPinching) {
        isPinching = false;
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX - translateX;
        startY = touch.clientY - translateY;
      }
      updateTransform();
    });
    mermaidElement.addEventListener('touchcancel', (e) => {
      isDragging = false;
      isPinching = false;
      initialDistance = 0;
      setTimeout(() => { isTouch = false; }, 100);
      updateTransform();
    });
    // Wheel zoom
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.min(Math.max(scale * delta, 0.3), 4);
      if (newScale !== scale) {
        const scaleDiff = newScale / scale;
        translateX = translateX * scaleDiff;
        translateY = translateY * scaleDiff;
        scale = newScale;
        if (scale <= 1) {
          translateX = 0;
          translateY = 0;
        }
        updateTransform();
      }
    }, { passive: false });
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseUp);
    };
  }, [containerRef]);
} 