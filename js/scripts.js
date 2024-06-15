// Custom JavaScript can be added here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded");
});

// Scroll to top functionality for "Keatas" button
document
  .getElementById("get-started-btn")
  .addEventListener("click", function () {
    const bodyElement = document.getElementById("body");
    if (bodyElement) {
      bodyElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
