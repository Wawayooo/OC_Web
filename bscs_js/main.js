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

function openModal() {
  var modal = document.getElementById("myModal");
  var img = document.querySelector(".event1");
  var modalImg = document.getElementById("img01");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function openModal2() {
  var modal = document.getElementById("myModal2");
  var img = document.querySelector(".event2");
  var modalImg = document.getElementById("img02");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

function openModal3() {
  var modal = document.getElementById("myModal3");
  var img = document.querySelector(".event3");
  var modalImg = document.getElementById("img03");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

function openModal4() {
  var modal = document.getElementById("myModal4");
  var img = document.querySelector(".event4");
  var modalImg = document.getElementById("img04");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

function openModal5() {
  var modal = document.getElementById("myModal5");
  var img = document.querySelector(".event5");
  var modalImg = document.getElementById("img05");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}
