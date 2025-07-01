//import { initApp } from './app.js';
import { handleIntroAnimation } from "animation.js";

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Start the intro animation
  handleIntroAnimation();

  // Initialize the main app
  initApp();
});
