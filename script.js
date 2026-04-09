// Smooth page transitions and simple micro-interactions
document.addEventListener("DOMContentLoaded", () => {
    // Add subtle hover tracking on glass cards
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Subtle glow follow effect
            card.style.background = `rgba(255, 255, 255, 0.03) radial-gradient(
                circle at ${x}px ${y}px, 
                rgba(255,255,255,0.06) 0%, 
                transparent 50%
            )`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = `rgba(255, 255, 255, 0.03)`;
        });
    });
});
