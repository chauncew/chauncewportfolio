gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline()
tl
.from(".about-section", {yPercent: -100})
.from(".my-work", {xPercent: 100})
.from(".blue", {yPercent: 100})

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

//About section animations
gsap.to('.css', {
    duration: 0.4,
    y: 70,
    ease: 'circ.in',
    repeat: -1,
    yoyo: true,
  })
  
  gsap.to('.javaScript', {
    rotateX: 360,
    rotateY: 360,
    duration: 2,
    repeat: -1,
    yoyo: true,
  })
  
  gsap.to('.gsap', {
    rotateZ: 360,
    duration: 2,
    repeat: -1,
    yoyo: true,
  })
  
  gsap.to('.react', {
    rotateX: 180,
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
  
  gsap.to('.git', {
    rotateY: 90,
    duration: 1,
    repeat: -1,
    yoyo: true,
  })
  gsap.to('.html', {
    rotateY: 90,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
  })

  //Contact Me Form Validation
const form = document.querySelector('form')
const username = document.querySelector('#userName') 
const email = document.querySelector('#email') 
const password = document.querySelector('#password')
const message = document.querySelector('#message')
const userErrorMessage = document.querySelector('.user-error-message')
const emailErrorMessage = document.querySelector('.email-error-message')
const messageErrorMessage = document.querySelector('.message-error-message')

form.addEventListener('submit', () => {
    // e.preventDefault()
    const userNameValue = username.value.trim();
    if(userNameValue === "") {
        username.style.background = 'red'
        userErrorMessage.style.display = 'block'
    } else {
        username.style.background = 'green'
        userErrorMessage.style.display = 'none'
    }

    const emailValue = email.value.trim();
    if(emailValue === "") {
        email.style.background = 'red'
        emailErrorMessage.style.display = 'block'
    } else if (!emailValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("Please Enter A valid email")
        email.style.background = 'red'
        emailErrorMessage.style.display = 'block'

    } else {
        email.style.background = 'green' 
        emailErrorMessage.style.display = 'none'
    }

    const messageValue = message.value.trim();
    if(messageValue === "") {
        message.style.background = 'red'
        messageErrorMessage.style.display = 'block'
    } else {
        message.style.background = 'green'
        messageErrorMessage.style.display = 'none'
    }
})

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
