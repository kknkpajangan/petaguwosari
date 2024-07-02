document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll smooth ke elemen target
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Tutup navbar jika dibuka
    const navbar = document.getElementById("navbar-sticky");
    if (!navbar.classList.contains("hidden")) {
      navbar.classList.add("hidden");
    }
  });
});
