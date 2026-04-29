// CampusFunda - Clean Bundle JS (No WebSockets, No Dev Noise)

document.addEventListener("DOMContentLoaded", () => {
  console.log("CampusFunda loaded ✅");

  // Example: Smooth scroll (optional)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Example: Simple button feedback (optional)
  document.querySelectorAll("button, .btn-cf").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.opacity = "0.8";
      setTimeout(() => (btn.style.opacity = "1"), 150);
    });
  });
});
