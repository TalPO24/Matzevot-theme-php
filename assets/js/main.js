/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_q4d72ny",
      "template_xczcj19",
      "#contact-form",
      "9qwrG_bfw1qE9dWS0"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animation repeat
});

sr.reveal(
  ".home__data, .home__socials, .contact__container, .footer__container"
);
sr.reveal(".home__image", { origin: "bottom" });
sr.reveal(".about__data, .skills__data", { origin: "left" });
sr.reveal(".about__image, .skills__content", { origin: "right" });
sr.reveal(".services__card, .projects__card", { interval: 100 });

/*=============== CAROUSEL ===============*/
function setupCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  const container = carousel.querySelector(".carousel__container");
  const images = container.querySelectorAll("img");
  const prevButton = carousel.querySelector(".carousel__prev");
  const nextButton = carousel.querySelector(".carousel__next");

  let index = 0;

  function slideNext() {
    index = (index + 1) % images.length;
    const translateValue = -index * 100;
    container.style.transform = `translateX(${translateValue}%)`;
  }

  function slidePrev() {
    index = (index - 1 + images.length) % images.length;
    const translateValue = -index * 100;
    container.style.transform = `translateX(${translateValue}%)`;
  }

  prevButton.addEventListener("click", slidePrev);
  nextButton.addEventListener("click", slideNext);
}

setupCarousel(".carousel-1");
// Call setupCarousel for each carousel

/*=============== Q&A ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const toggle = item.querySelector(".faq__toggle");

    toggle.addEventListener("click", function () {
      const answer = item.querySelector(".faq__answer");
      answer.classList.toggle("active");

      const icon = toggle.querySelector("i");
      if (answer.classList.contains("active")) {
        icon.classList.remove("ri-add-line");
        icon.classList.add("ri-subtract-line");
      } else {
        icon.classList.remove("ri-subtract-line");
        icon.classList.add("ri-add-line");
      }
    });
  });
});

/*===============  Articles Section ===============*/
// JavaScript to toggle the article content visibility
const articlesCards = document.querySelectorAll(".articles__card");

articlesCards.forEach((card) => {
  const readMoreButton = card.querySelector(".articles__read-more");
  const articleSummary = card.querySelector(".articles__summary");

  readMoreButton.addEventListener("click", () => {
    if (
      articleSummary.style.display === "none" ||
      !articleSummary.style.display
    ) {
      articleSummary.style.display = "block";
      readMoreButton.textContent = "פחות";
    } else {
      articleSummary.style.display = "none";
      readMoreButton.textContent = "קרא עוד";
    }
  });
});
