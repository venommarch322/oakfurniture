// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, article');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 50) {
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.navbar a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// CTA Button Scroll Animation
document.querySelector('.cta-btn').addEventListener('click', function() {
    const contactSection = document.querySelector('.contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

console.log('Oak Furniture website loaded successfully!');