// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.querySelector(".nav-menu");
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("active");
    mobileMenuBtn?.classList.remove("active");
  });
});

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Function to update active link
function setActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust for sticky header
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", setActiveLink);

// Run on initial load
setActiveLink();

// Set active on click (in case of fast click before scroll)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})
