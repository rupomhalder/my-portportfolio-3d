 // Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

// Typed Text Effect
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  "Front-End Developer",
  "Creative Coder",
  "UI/UX Enthusiast",
  "coding Lover",
];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 1500; // Delay between texts

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Initialize typed effect on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Contact Form submission simulation + popup
const contactForm = document.getElementById('contact-form');
const popup = document.getElementById('popup');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simulate sending message
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
  contactForm.reset();
});
