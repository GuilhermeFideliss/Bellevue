/* =========================================
   BELLEVUE
========================================= */


/* HEADER */

const header = document.querySelector("#header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================
   REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   GALERIA — FILTROS
========================================= */

const filters = document.querySelectorAll(".filter");

const galleryCards = document.querySelectorAll(".gallery-card");


filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        const category = filter.dataset.filter;


        filters.forEach((item) => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        galleryCards.forEach((card) => {

            const cardCategory = card.dataset.category;


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "";

                requestAnimationFrame(() => {

                    card.style.opacity = "1";

                    card.style.transform = "translateY(0)";

                });

            } else {

                card.style.opacity = "0";

                card.style.transform = "translateY(20px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});


/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.querySelector(".menu-button");

const nav = document.querySelector("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });


    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-open");

        });

    });

}
