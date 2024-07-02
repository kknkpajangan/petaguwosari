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

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    // Dapatkan elemen yang memiliki kelas 'menu-on' jika ada
    let currentMenuOn = document.querySelector("a.menu-on");

    // Jika ada elemen yang memiliki kelas 'menu-on', ubah kelasnya menjadi 'menu-off'
    if (currentMenuOn) {
      currentMenuOn.classList.remove("menu-on");
      currentMenuOn.classList.add("menu-off");
    }

    // Tambahkan kelas 'menu-on' ke elemen yang ditekan
    this.classList.remove("menu-off");
    this.classList.add("menu-on");
  });
});
