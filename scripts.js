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

closeBtn.addEventListener('click', () => {

    gsap.to(mobileMenu, {
        duration: 0.5,
        right: "-100%"
    });

});



