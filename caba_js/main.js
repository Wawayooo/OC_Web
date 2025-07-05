document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  } else {
    console.error("Navigation elements not found!");
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;

      if (target) {
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      } else {
        console.error("Target anchor not found:", this.getAttribute("href"));
      }
    });
  });
});
