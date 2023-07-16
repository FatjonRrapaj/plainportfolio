// Load the header
document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
      const navMenu = document.querySelector(".nav-menu");
      const hamburgerSpan1 = document.querySelector(
        ".nav-toggle span:nth-child(1)"
      );
      const hamburgerSpan2 = document.querySelector(
        ".nav-toggle span:nth-child(2)"
      );
      const hamburgerSpan3 = document.querySelector(
        ".nav-toggle span:nth-child(3)"
      );

      const main = document.querySelector("main");

      const pageLogo = document.querySelector(".logo");
      pageLogo.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
        navMenu.classList.remove("active");
      });

      const navToggle = document.querySelector(".nav-toggle");
      navToggle.addEventListener("click", (e) => {
        e.preventDefault();
        navMenu.classList.toggle("active");
        main.classList.toggle("hidden");
        document.body.classList.toggle("no-scroll");
        hamburgerSpan1.classList.toggle("rotate-down");
        hamburgerSpan2.classList.toggle("opacity-0");
        hamburgerSpan3.classList.toggle("rotate-up");
      });

      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((element) => {
        element.addEventListener("click", (e) => {
          navMenu.classList.remove("active");
        });
        if (
          window.location.href.includes(
            element.innerHTML.toLowerCase().split(" ")[0]
          )
        ) {
          element.classList.add("active-link");
        } else {
          element.classList.remove("active-link");
        }
      });
    });

  // Load the footer
  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
});
