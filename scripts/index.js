// scripts/index.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Staggered Fade-in for the CTAs (High-end entry animation)
    const cards = document.querySelectorAll('.identity-card');
    const links = document.querySelectorAll('.neuron-link-visual');
    
    // Animate Cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 1s cubic-bezier(0.2, 0, 0, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Subtle Link Animation
    links.forEach((link, index) => {
        link.style.width = '0%';
        link.style.opacity = '0';
        
        setTimeout(() => {
            link.style.transition = 'width 1.5s cubic-bezier(0.2, 0, 0, 1), opacity 1s ease';
            // Set final width based on class (CSS defines the actual visual connections)
            if (link.classList.contains('link-2')) { link.style.width = '35%'; }
            else if (link.classList.contains('link-3')) { link.style.width = '70%'; }
            else { link.style.width = '30%'; }
            
            link.style.opacity = '0.7';
        }, 800 + (index * 300));
    });

    // CTA button click log (for demonstration)
    document.querySelectorAll('.btn-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.identity-card');
            console.log(`User clicked CTA for: ${card.dataset.audience}`);
        });
    });
});