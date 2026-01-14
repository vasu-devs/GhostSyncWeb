// Register Plugins
gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor Logic
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

// Initial center
gsap.set(dot, { xPercent: -50, yPercent: -50 });
gsap.set(ring, { xPercent: -50, yPercent: -50 });

document.addEventListener('mousemove', (e) => {
    // Fast tracker
    gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
    // Smooth follower
    gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out"
    });
});

// Cursor Interactions
const interactiveElements = document.querySelectorAll('a, button, .feature-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(ring, { scale: 2, borderColor: 'var(--accent-orange)', duration: 0.3 });
        gsap.to(dot, { scale: 0.5, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(ring, { scale: 1, borderColor: 'var(--accent-orange)', duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
    });
});

// 2. Hero Animations
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from('.nav-logo, .nav-btn', {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})
    .from('.fade-in', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.5")
    .from('.floating-dude', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)"
    }, "-=1");

// Idle Floating Animation
gsap.to('.floating-dude', {
    y: 15,
    rotation: 2,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// 3. Scroll Reveal for Features
gsap.utils.toArray('.content-section, .feature-card, .step-card, .manifesto-item').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// 4. Parallax Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    const xFn = gsap.utils.mapRange(0, window.innerWidth, -20, 20);
    const yFn = gsap.utils.mapRange(0, window.innerHeight, -20, 20);

    gsap.to('.blob-bg', {
        x: xFn(e.clientX),
        y: yFn(e.clientY),
        duration: 2,
        ease: "power1.out"
    });
});
