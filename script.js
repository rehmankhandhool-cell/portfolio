/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


/* =========================
   SCROLL ANIMATIONS
========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


hiddenElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Rehman Babar Portfolio loaded successfully."
);