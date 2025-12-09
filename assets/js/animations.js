// Scroll animations with Intersection Observer

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Observe stagger-children containers
    const staggerContainers = document.querySelectorAll('.stagger-children');
    staggerContainers.forEach(container => observer.observe(container));

    console.log('Animations.js loaded - observing', animatedElements.length, 'elements');
});
```