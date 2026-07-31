document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : '';
            if (!navLinks.classList.contains('active') && window.innerWidth > 968) {
                navLinks.style.display = 'flex';
            }
        });
    }

    // FAQ Dropdown Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;

            // Optional: Close other items
            // document.querySelectorAll('.faq-item').forEach(other => {
            //     if(other !== item) other.classList.remove('active');
            // });

            item.classList.toggle('active');
        });
    });

    // Scroll Animations
    // Standardized Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('visible'); // For footer
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements
    const revealElements = document.querySelectorAll('.card, .project-card, .hero-text, .hero-img, .step-card, .card-glass, .footer-content, .reveal');

    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Contact Form Handling (Mailto Fallback)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Construct nice mailto link
            const subject = `Portfolio Inquiry from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

            const mailtoLink = `mailto:gokulck2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open email client
            window.location.href = mailtoLink;
        });
    }

    // Initialize Vanta.js 3D Waves Background
    if (typeof window.VANTA !== 'undefined') {
        window.VANTA.WAVES({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x050505,
            shininess: 65.00,
            waveHeight: 18.00,
            waveSpeed: 0.40,
            zoom: 0.85
        });
    }
    // Permanent Ambient Glow for Top Menu Pill
    const headerGlow = document.createElement('div');
    headerGlow.classList.add('header-glow');
    document.body.appendChild(headerGlow);

    // Dynamic Luxury Aura for Liquid Glass Refraction
    const luxuryAura = document.createElement('div');
    luxuryAura.classList.add('luxury-aura');
    document.body.appendChild(luxuryAura);

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            luxuryAura.style.left = `${e.clientX}px`;
            luxuryAura.style.top = `${e.clientY}px`;
        });
    }
});
