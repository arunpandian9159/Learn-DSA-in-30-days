// Extracted from DSA.html <script> tag
// Tailwind config
 tailwind.config = {
    theme: {
        extend: {
            colors: {
                'navy': '#1e293b',
                'ivory': '#faf7f0',
                'gold': '#d4af37',
                'sage': '#87a96b',
                'charcoal': '#374151'
            },
            fontFamily: {
                'serif': ['Crimson Text', 'serif'],
                'sans': ['Inter', 'sans-serif']
            }
        }
    }
};

// Initialize Mermaid Controls for zoom and pan
function initializeMermaidControls() {
    const containers = document.querySelectorAll('.mermaid-container');

    containers.forEach(container => {
    const mermaidElement = container.querySelector('.mermaid');
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // 触摸相关状态
    let isTouch = false;
    let touchStartTime = 0;
    let initialDistance = 0;
    let initialScale = 1;
    let isPinching = false;

    // Zoom controls
    const zoomInBtn = container.querySelector('.zoom-in');
    const zoomOutBtn = container.querySelector('.zoom-out');
    const resetBtn = container.querySelector('.reset-zoom');
    const fullscreenBtn = container.querySelector('.fullscreen');

    function updateTransform() {
        mermaidElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

        if (scale > 1) {
        container.classList.add('zoomed');
        } else {
        container.classList.remove('zoomed');
        }

        mermaidElement.style.cursor = isDragging ? 'grabbing' : 'grab';
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
        scale = Math.min(scale * 1.25, 4);
        updateTransform();
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
        scale = Math.max(scale / 1.25, 0.3);
        if (scale <= 1) {
            translateX = 0;
            translateY = 0;
        }
        updateTransform();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
        });
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
        });
    }

    // Mouse Events
    mermaidElement.addEventListener('mousedown', (e) => {
        if (isTouch) return; // 如果是触摸设备，忽略鼠标事件

        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        mermaidElement.style.cursor = 'grabbing';
        updateTransform();
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging && !isTouch) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging && !isTouch) {
        isDragging = false;
        mermaidElement.style.cursor = 'grab';
        updateTransform();
        }
    });

    document.addEventListener('mouseleave', () => {
        if (isDragging && !isTouch) {
        isDragging = false;
        mermaidElement.style.cursor = 'grab';
        updateTransform();
        }
    });

    // 获取两点之间的距离
    function getTouchDistance(touch1, touch2) {
        return Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
        );
    }

    // Touch Events - 触摸事件处理
    mermaidElement.addEventListener('touchstart', (e) => {
        isTouch = true;
        touchStartTime = Date.now();

        if (e.touches.length === 1) {
        // 单指拖动
        isPinching = false;
        isDragging = true;

        const touch = e.touches[0];
        startX = touch.clientX - translateX;
        startY = touch.clientY - translateY;

        } else if (e.touches.length === 2) {
        // 双指缩放
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
        // 单指拖动
        const touch = e.touches[0];
        translateX = touch.clientX - startX;
        translateY = touch.clientY - startY;
        updateTransform();

        } else if (e.touches.length === 2 && isPinching) {
        // 双指缩放
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = getTouchDistance(touch1, touch2);

        if (initialDistance > 0) {
            const newScale = Math.min(Math.max(
            initialScale * (currentDistance / initialDistance),
            0.3
            ), 4);
            scale = newScale;
            updateTransform();
        }
        }

        e.preventDefault();
    }, { passive: false });

    mermaidElement.addEventListener('touchend', (e) => {
        // 重置状态
        if (e.touches.length === 0) {
        isDragging = false;
        isPinching = false;
        initialDistance = 0;

        // 延迟重置isTouch，避免鼠标事件立即触发
        setTimeout(() => {
            isTouch = false;
        }, 100);
        } else if (e.touches.length === 1 && isPinching) {
        // 从双指变为单指，切换为拖动模式
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

        setTimeout(() => {
        isTouch = false;
        }, 100);

        updateTransform();
    });

    // Enhanced wheel zoom with better center point handling
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const rect = container.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = Math.min(Math.max(scale * delta, 0.3), 4);

        // Adjust translation to zoom towards center
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
    });

    // Initialize display
    updateTransform();
    });
}

// Initialize Mermaid controls after page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
            primaryColor: '#faf7f0',
            primaryTextColor: '#1e293b',
            primaryBorderColor: '#1e293b',
            lineColor: '#1e293b',
            secondaryColor: '#d4af37',
            tertiaryColor: '#87a96b',
            background: '#ffffff',
            mainBkg: '#faf7f0',
            secondBkg: '#fef3c7',
            tertiaryBkg: '#ecfdf5',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px'
        },
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        },
        sequence: {
            useMaxWidth: true
        },
        gantt: {
            useMaxWidth: true
        }
    });
    
    // Initialize controls for mermaid diagrams
    initializeMermaidControls();
});

// Mobile TOC Toggle
function toggleTOC() {
    const toc = document.getElementById('toc');
    const overlay = document.getElementById('toc-overlay');
    toc.classList.toggle('open');
    overlay.classList.toggle('hidden');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active TOC link highlighting
function updateActiveTOCLink() {
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
        }
    });
    
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active TOC link on scroll
window.addEventListener('scroll', updateActiveTOCLink);

// Initialize active TOC link
updateActiveTOCLink();

// Close mobile TOC when clicking outside
document.addEventListener('click', function(e) {
    const toc = document.getElementById('toc');
    const overlay = document.getElementById('toc-overlay');
    const toggleBtn = document.querySelector('button[onclick="toggleTOC()"]');
    
    if (!toc.contains(e.target) && !toggleBtn.contains(e.target)) {
        toc.classList.remove('open');
        overlay.classList.add('hidden');
    }
});

// Handle window resize to reset TOC on large screens
window.addEventListener('resize', function() {
    const toc = document.getElementById('toc');
    const overlay = document.getElementById('toc-overlay');
    
    if (window.innerWidth >= 1024) {
        toc.classList.remove('open');
        overlay.classList.add('hidden');
    }
});

// Tamil Resource YouTube Link Handler
function initializeTamilResourceLinks() {
    const tamilResources = document.querySelectorAll('.tamil-resource[data-youtube-url]');
    
    tamilResources.forEach(resource => {
        resource.addEventListener('click', function() {
            const youtubeUrl = this.getAttribute('data-youtube-url');
            if (youtubeUrl) {
                // Open YouTube video in a new tab
                window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
            }
        });
        
        // Add keyboard accessibility
        resource.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const youtubeUrl = this.getAttribute('data-youtube-url');
                if (youtubeUrl) {
                    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
                }
            }
        });
        
        // Make it focusable for keyboard navigation
        resource.setAttribute('tabindex', '0');
        resource.setAttribute('role', 'button');
        resource.setAttribute('aria-label', 'Open Tamil resource video in YouTube');
    });
}

// Initialize Tamil resource links when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTamilResourceLinks();
});