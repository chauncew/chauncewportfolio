gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline()
tl
.from(".about-section", {yPercent: -100})
.from(".green", {xPercent: 100})
.from(".blue", {yPercent: -100})

ScrollTrigger.create({
    animation: tl,
    trigger: ".container",
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: true,
})



// Hamburger Menu Animations
const closeContainer = document.querySelector('.close-button')

closeContainer.addEventListener('click', () => {
    closeContainer.classList.toggle('active')
})