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

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen dengan class 'menu-off' dan 'menu-on'
  const menuItems = document.querySelectorAll('a[class*="menu-"]');

  // Fungsi untuk menghapus kelas 'menu-on' dari semua menu dan menambahkan 'menu-off'
  function resetMenu() {
    menuItems.forEach((item) => {
      item.classList.remove("menu-on");
      item.classList.add("menu-off");
    });
  }

  // Fungsi untuk mengatur menu yang aktif berdasarkan href
  function setActiveMenu() {
    const currentHash = window.location.hash;
    menuItems.forEach((item) => {
      if (item.getAttribute("href") === currentHash) {
        item.classList.add("menu-on");
        item.classList.remove("menu-off");
      }
    });
  }

  // Atur menu yang aktif saat halaman pertama kali dimuat
  setActiveMenu();

  // Atur menu yang aktif saat pengguna mengklik menu
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      resetMenu();
      item.classList.add("menu-on");
      item.classList.remove("menu-off");
    });
  });

  // Atur menu yang aktif saat hash di URL berubah (misalnya, saat pengguna menggunakan tombol back/forward di browser)
  window.addEventListener("hashchange", function () {
    resetMenu();
    setActiveMenu();
  });
});
