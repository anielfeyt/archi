const openBtn = document.getElementById('open-icon');
const closeBtn = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-nav');

gsap.registerPlugin(ScrollTrigger);

gsap.from('.a1', {
    scrollTrigger: {
        trigger: '.a1',
        start: "top center",
    },
    duration: 2,
    opacity: 0,
    x: -100
})

gsap.from('.a2', {
    scrollTrigger: {
        trigger: '.a2',
        start: "top center",
    },
    duration: 2,
    opacity: 0,
    x: -100
})

gsap.from('.a3', {
    scrollTrigger: {
        trigger: '.a3',
        start: "top center",
    },
    duration: 2,
    opacity: 0,
    x: -100
})

gsap.from('.anim-2', {
    scrollTrigger: {
        trigger: '.anim-2',
        start: "top center",
    },
    duration: 0.6,
    y: -200,
    opacity: 0,
    stagger: 0.3
})

gsap.from('.anim-3', {
    duration: 1,
    opacity: 0,
    x: -1000
})

gsap.from('.anim-4', {
    duration: 1,
    opacity: 0
})

gsap.from('.anim-5', {
    scrollTrigger: {
        trigger: '.anim-5',
        start: "top bottom",
    },
    duration: 0.6,
    y: -200,
    opacity: 0,
    stagger: 0.3
})

gsap.from('.anim-6', {
    scrollTrigger: {
        trigger: '.anim-6',
        start: "top bottom",
    },
    duration: 0.6,
    y: -200,
    opacity: 0,
    stagger: 0.3
})

openBtn.addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.to(mobileMenu, {
        duration: 0.5,
        right: "0"
    })
    tl.from(closeBtn, {
        duration: 1,
        opacity: 0,
        stagger: 1
    })
});

const closeMenu = () => {
    gsap.to(mobileMenu, {
        duration: 0.5,
        right: "-100%"
    });
}

closeBtn.addEventListener('click', () => {
    closeMenu();
});

// Scroll anchors

const intro = document.getElementById('intro-tag');
const about = document.getElementById('about-tag');
const services = document.getElementById('services-tag');
const contact = document.getElementById('contact-tag');


const aboutAnchor = document.getElementById('about-anchor');
const servicesAnchor = document.getElementById('services-anchor');
const contactAnchor = document.getElementById('contact-anchor');

const aboutAnchorM = document.getElementById('about-anchor-m');
const servicesAnchorM = document.getElementById('services-anchor-m');
const contactAnchorM = document.getElementById('contact-anchor-m');
const toTop = document.querySelector('.toTop');

toTop.addEventListener('click', (e) => {
    e.preventDefault();
    intro.scrollIntoView({
        behavior: 'smooth'
    });
});


aboutAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    about.scrollIntoView({
        behavior: 'smooth'
    });
});

servicesAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    services.scrollIntoView({
        behavior: 'smooth'
    });
});

contactAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    contact.scrollIntoView({
        behavior: 'smooth'
    });
});

aboutAnchorM.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    about.scrollIntoView({
        behavior: 'smooth'
    });
});

servicesAnchorM.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    services.scrollIntoView({
        behavior: 'smooth'
    });
});

contactAnchorM.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    contact.scrollIntoView({
        behavior: 'smooth'
    });
});

