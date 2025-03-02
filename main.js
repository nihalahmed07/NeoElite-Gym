const menuBtn = document.getElementById("menu-btn");
const navTabs = document.getElementById("nav-tabs");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navTabs.classList.toggle("open");

  const isOpen = navTabs.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navTabs.addEventListener("click", (e) => {
  navTabs.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".title h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".title p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".title a", {
  ...scrollRevealOption,
  delay: 1000,
});
// ScrollReveal().reveal(".title a", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

ScrollReveal().reveal(".about_card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog_card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
