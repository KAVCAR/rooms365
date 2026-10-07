/* ==================================================
   LOADING SCREEN
================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 700);

});
/* ==================================================
   HEADER SCROLL
================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ==================================================
   REVIEW SLIDER
================================================== */

const reviews = document.querySelectorAll(".review");

let reviewIndex = 0;


function showReview(index) {

    reviews.forEach(review => {
        review.classList.remove("active");
    });

    reviews[index].classList.add("active");

}


document.getElementById("nextReview").addEventListener("click", () => {

    reviewIndex++;

    if (reviewIndex >= reviews.length) {
        reviewIndex = 0;
    }

    showReview(reviewIndex);

});


document.getElementById("prevReview").addEventListener("click", () => {

    reviewIndex--;

    if (reviewIndex < 0) {
        reviewIndex = reviews.length - 1;
    }

    showReview(reviewIndex);

});


/* ==================================================
   FAQ
================================================== */

document.querySelectorAll(".faq-question").forEach(function(question) {

    question.addEventListener("click", function() {

        const item = this.closest(".faq-item");
        const icon = this.querySelector("span");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }

    });

});

/* ==================================================
   RESERVATION
================================================== */

const reservationBtn =
    document.getElementById("reservationBtn");


reservationBtn.addEventListener("click", () => {

    const checkin =
        document.getElementById("checkin").value;

    const checkout =
        document.getElementById("checkout").value;


    if (!checkin || !checkout) {

        alert(
            "Lütfen giriş ve çıkış tarihlerini seçin."
        );

        return;

    }


    if (new Date(checkout) <= new Date(checkin)) {

        alert(
            "Çıkış tarihi giriş tarihinden sonra olmalıdır."
        );

        return;

    }


    alert(
        "Seçtiğiniz tarihler için müsaitlik kontrol ediliyor..."
    );

});


/* ==================================================
   IMAGE LAZY LOADING
================================================== */

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});


/* ==================================================
   SIMPLE SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".room-card, .activity, .story-content, .restaurant-content"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});
