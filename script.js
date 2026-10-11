const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open or close the navigation menu on small screens.
menuButton.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "Close ✕" : "Menu ☰";
});

// Close the menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu ☰";
  });
});

// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();
