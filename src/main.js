document.getElementById('get-started-btn').addEventListener('click', function() {
    document.getElementById('body').scrollIntoView({ behavior: 'smooth' });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const navbarSticky = document.getElementById('navbar-sticky');
    const links = navbarSticky.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) { // check if screen width is less than 768px (mobile view)
          navbarSticky.classList.add('hidden');
        }
      });
    });

    document.getElementById('hamburger-button').addEventListener('click', function() {
      navbarSticky.classList.toggle('hidden');
    });
  });

  // Smooth scroll behavior for internal links
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen <a> dalam daftar
    const navLinks = document.querySelectorAll('ul > li > a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Hapus kelas aktif dari semua link
        navLinks.forEach(nav => {
          nav.classList.remove('text-white', 'bg-default', 'md:text-default', 'md:bg-transparent');
          nav.classList.add('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-700');
        });
  
        // Tambahkan kelas aktif ke link yang diklik
        this.classList.remove('text-gray-900', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-700');
        this.classList.add('text-white', 'bg-default', 'md:text-default', 'md:bg-transparent');
      });
    });
  });
 
  

  document.addEventListener("DOMContentLoaded", function() {
    // List of all section IDs
    const sections = ["home", "masjid", "makam", "tentang"];

    // Hide all sections except the 'home' section
    sections.forEach(function(id) {
        if (id !== "home") {
            document.getElementById(id).style.display = "none";
        }
    });

    // Add event listeners to all elements with href="#<nama-id>"
    document.querySelectorAll("[href^='#']").forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Get the target section ID
            const targetId = this.getAttribute("href").substring(1);

            // Hide all sections
            sections.forEach(function(id) {
                document.getElementById(id).style.display = "none";
            });

            // Show the target section
            document.getElementById(targetId).style.display = "block";
        });
    });
});
