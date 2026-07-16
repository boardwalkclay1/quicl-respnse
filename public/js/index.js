// Mobile menu toggle
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Background slideshow
const slides = document.querySelectorAll(".bg-slideshow img");
let index = 0;

setInterval(() => {
  slides.forEach(img => img.style.opacity = 0);
  index = (index + 1) % slides.length;
  slides[index].style.opacity = 1;
}, 6000);
