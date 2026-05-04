// ==========================
// Typing Animation
// ==========================
const words = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  currentWord = words[i];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, j++);
  } else {
    typingElement.textContent = currentWord.substring(0, j--);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ==========================
// Scroll Reveal Animation
// ==========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});


// ==========================
// Navbar Shadow on Scroll
// ==========================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});


// ==========================
// Active Nav Link Highlight
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ==========================
// Smooth Scroll (for nav links)
// ==========================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});