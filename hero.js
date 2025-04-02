// Simple terminal typing effect for the hero section
document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        "Linux system administrator",
        "Kubernetes enthusiast",
        "Python developer",
        "Go programmer",
        "Infrastructure as Code fanatic",
        "Bash scripting wizard"
    ];
    let currentPhrase = 0;
    const element = document.querySelector('.typewriter');
    
    function typeNextPhrase() {
        const phrase = phrases[currentPhrase];
        element.innerHTML = `<span class="text-green">$</span> <span class="text-peach">echo "${phrase}"</span>`;

        // Reset animation
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
        
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeNextPhrase, 4000);
    }
    
    // Start the typing effect after initial animation completes
    setTimeout(typeNextPhrase, 3500);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});