function handleIntroAnimation() {
  const introContainer = document.getElementById("intro-container");
  const mainContent = document.querySelector("nav");
  const sections = document.querySelectorAll("section");
  const footer = document.querySelector("footer");

  // Initially hide all content
  mainContent.style.opacity = "0";
  sections.forEach((section) => (section.style.opacity = "0"));
  footer.style.opacity = "0";

  const animationDuration = 3500;

  setTimeout(() => {
    introContainer.style.opacity = "0";
    introContainer.style.visibility = "hidden";
    introContainer.style.display = "none";

    mainContent.style.transition = "opacity 1s ease";
    mainContent.style.opacity = "1";

    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.transition = "opacity 1s ease";
        section.style.opacity = "1";
      }, index * 200);
    });

    setTimeout(() => {
      footer.style.transition = "opacity 1s ease";
      footer.style.opacity = "1";
    }, sections.length * 200);

    setTimeout(() => {
      introContainer.remove();
    }, 1000);
  }, animationDuration);
}

// Run on load
window.addEventListener("DOMContentLoaded", handleIntroAnimation);
