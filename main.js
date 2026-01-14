// Daydream Ghost Masterclass Interactivity - Refined

// High-Vis Ink Cursor
const cursor = document.getElementById('ink-cursor');
const shadow = document.getElementById('ink-shadow');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 22,
        y: e.clientY - 22,
        duration: 0.2,
        ease: "power2.out"
    });

    gsap.to(shadow, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.5,
        ease: "power3.out"
    });

    // Ghost Trail
    if (Math.random() > 0.8) {
        const trail = document.createElement('div');
        trail.className = 'ghost-trail';
        trail.innerHTML = `
            <svg viewBox="0 0 100 100" width="30" height="30">
                <path d="M30,80 Q30,20 50,20 Q70,20 70,80 Q60,70 50,80 Q40,70 30,80 Z" fill="rgba(255,107,53,0.3)" stroke="var(--vibrant-orange)" stroke-width="2" />
            </svg>
        `;
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);

        gsap.to(trail, {
            y: '-=50',
            opacity: 0,
            scale: 2,
            duration: 1,
            ease: "power1.out",
            onComplete: () => trail.remove()
        });
    }
});

// Breeze Particle System
function createBreeze() {
    const p = document.createElement('div');
    p.className = 'breeze-particle';
    const size = Math.random() * 50 + 10;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '110vh';

    // Random hand-drawn shape (irregular border radius)
    p.style.borderRadius = `${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%`;

    document.body.appendChild(p);

    gsap.to(p, {
        y: '-120vh',
        x: '+=150',
        rotate: Math.random() * 360,
        opacity: 0,
        duration: Math.random() * 10 + 10,
        ease: "power1.inOut",
        onComplete: () => p.remove()
    });
}

setInterval(createBreeze, 1000); // More frequent


// Breezy Marquee
gsap.to('#breeze-text', {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: "none"
});

// Sky Entrance
gsap.from('h1', {
    y: 80,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
});

gsap.from('.daydream-asset img', {
    scale: 0.9,
    opacity: 0,
    duration: 2.5,
    stagger: 0.4,
    ease: "power2.out"
});

// Daydream Drift Idle Loops
gsap.to('.hero-media img', {
    y: 25,
    rotate: 3,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to('img[alt="Daydream Doodles"]', {
    scale: 1.15,
    rotate: -4,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Hover Swag
const btn = document.querySelector('.btn-daydream');
btn.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 1.8, rotate: 180, duration: 0.4, background: '#121212' });
    gsap.to(shadow, { scale: 3, opacity: 0.2, duration: 0.4 });
});

btn.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, rotate: 0, duration: 0.4, background: 'var(--vibrant-orange)' });
    gsap.to(shadow, { scale: 1, opacity: 0.08, duration: 0.4 });
});

// Card Hover Animation
document.querySelectorAll('.breezy-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.card-icon'), {
            scale: 1.4,
            rotate: 15,
            duration: 0.5,
            ease: "back.out(2)"
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.card-icon'), {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});


// Interactive Word-Swap Puns
const puns = {
    "engineering": "haunt-gineering",
    "background": "boo-ckground",
    "effort": "ghost-fort",
    "Logic": "Ghoulic",
    "transfers": "phantom-fers"
};

document.querySelectorAll('p, h2, h3').forEach(el => {
    let html = el.innerHTML;
    Object.keys(puns).forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        html = html.replace(regex, `<span class="word-pun" data-pun="${puns[word]}">${word}</span>`);
    });
    el.innerHTML = html;
});

document.querySelectorAll('.word-pun').forEach(span => {
    const original = span.innerText;
    const pun = span.dataset.pun;
    span.addEventListener('mouseenter', () => {
        span.innerText = pun;
        gsap.to(span, { color: 'var(--vibrant-orange)', scale: 1.1, duration: 0.2 });
    });
    span.addEventListener('mouseleave', () => {
        span.innerText = original;
        gsap.to(span, { color: 'inherit', scale: 1, duration: 0.2 });
    });
});

// Parallax Breeze
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 80;
    const y = (e.clientY / window.innerHeight - 0.5) * 80;
    gsap.to('.hero-media', { x: x, y: y, duration: 4, ease: "power2.out" });
    gsap.to('.daydream-box', { x: -x/3, y: -y/3, duration: 4, ease: "power2.out" });
    gsap.to('.hand-arrow', { x: x*1.5, y: y*1.5, duration: 3 });
});

// Premium Reveal
gsap.from('.breezy-card', {
    scrollTrigger: {
        trigger: '.breezy-grid',
        start: 'top 80%',
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power4.out"
});

// Breeze Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from(entry.target, {
                y: 60,
                opacity: 0,
                scale: 0.98,
                duration: 2,
                ease: "power2.out"
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.daydream-box, .breezy-grid').forEach(el => observer.observe(el));
