document.addEventListener("DOMContentLoaded", function () {
  const sections = ["home", "pesantren", "masjid", "makam", "tentang"];

  // Function to show a specific section and hide others
  function showSection(sectionId) {
    sections.forEach(function (id) {
      const section = document.getElementById(id);
      if (section) {
        if (id === sectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      }
    });
  }

  // Initially show only the home section
  showSection("home");

  // Handle click events on links with href="#<sectionId>"
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = ["home", "pesantren", "masjid", "makam", "tentang"];

  // Function to show a specific section and hide others
  function showSection(sectionId) {
    sections.forEach(function (id) {
      const section = document.getElementById(id);
      if (section) {
        if (id === sectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      }
    });
  }

  // Function to handle navigation link clicks
  function handleNavigationClick(event) {
    event.preventDefault();

    // Toggle the mobile menu visibility
    toggleMobileMenu();

    // Remove active class from all navigation links
    const navLinks = document.querySelectorAll("ul > li > a");
    navLinks.forEach((nav) => {
      nav.classList.remove(
        "text-white",
        "bg-default",
        "md:text-default",
        "md:bg-transparent"
      );
      nav.classList.add(
        "text-gray-900",
        "hover:bg-gray-100",
        "dark:text-white",
        "dark:hover:bg-gray-700"
      );
    });

    // Add active class to the clicked navigation link
    this.classList.remove(
      "text-gray-900",
      "hover:bg-gray-100",
      "dark:text-white",
      "dark:hover:bg-gray-700"
    );
    this.classList.add(
      "text-white",
      "bg-default",
      "md:text-default",
      "md:bg-transparent"
    );

    // Hide all sections
    sections.forEach(function (id) {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = "none";
      }
    });

    // Show the target section
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.style.display = "block";
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }, 300); // Delay scrolling to ensure menu is fully closed
    }
  }

  // Function to toggle mobile menu visibility
  function toggleMobileMenu() {
    const mobileMenuButton = document.querySelector(
      "[data-collapse-toggle='navbar-sticky']"
    );
    const navbarSticky = document.getElementById("navbar-sticky");
    if (mobileMenuButton && navbarSticky) {
      const expanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
      mobileMenuButton.setAttribute("aria-expanded", String(!expanded));
      navbarSticky.classList.toggle("hidden"); // Toggle the 'hidden' class
    }
  }

  // Initially show only the home section
  showSection("home");

  // Handle click events on navigation links
  const navLinks = document.querySelectorAll("ul > li > a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      handleNavigationClick.call(this, event); // Bind event context
    });
  });

  // Handle click event on mobile menu button to toggle menu visibility
  const mobileMenuButton = document.querySelector(
    "[data-collapse-toggle='navbar-sticky']"
  );
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      toggleMobileMenu();
    });
  }

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
});
