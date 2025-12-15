// scripts/index.js
document.addEventListener('DOMContentLoaded', () => {
    // Staggered Fade-in for the Cards
    const cards = document.querySelectorAll('.identity-card');
    
    // Animate Cards with staggered entrance
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 1s cubic-bezier(0.2, 0, 0, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Animate SVG connections
    const connectorLines = document.querySelectorAll('.connector-line');
    const connectionDots = document.querySelectorAll('.connection-dot');
    
    connectorLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.transition = 'opacity 0.8s ease';
            line.style.opacity = '1';
        }, 500 + (index * 200));
    });
    
    connectionDots.forEach((dot, index) => {
        dot.style.opacity = '0';
        setTimeout(() => {
            dot.style.transition = 'opacity 0.6s ease';
            dot.style.opacity = '1';
        }, 700 + (index * 100));
    });

    // Typewriter effect for "Connecting..." text
    const integrationText = document.querySelector('.integration-text');
    if (integrationText && integrationText.textContent === 'Connecting...') {
        const finalText = 'Seamlessly Integrated for Special Care';
        let currentIndex = 0;
        integrationText.textContent = '';
        
        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (currentIndex < finalText.length) {
                    integrationText.textContent += finalText[currentIndex];
                    currentIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, 1500);
    }

    // CTA button click handlers
    document.querySelectorAll('.btn-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.identity-card');
            console.log(`User clicked CTA for: ${card.dataset.audience}`);
            
            // Add ripple effect on click
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            btn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Animate authority logos on scroll into view
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.authority-logo').forEach(logo => {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = 'all 0.6s ease';
        observer.observe(logo);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);