// Цвет хедера при скроле ***************************
let header = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.5)";
  } else {
    header.style.background = "rgb(9, 15, 29)";
  }
};

// Бургер ***************************
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".header").classList.remove("open");
  }
});

document.getElementById("menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".header").classList.remove("open");
});

// Модальное окно ***************************
document
  .querySelector(".open-modal-btn")
  .addEventListener("click", function () {
    document.querySelector(".my-modal").classList.add("open");
  });

document
  .querySelector(".close-my-modal-btn")
  .addEventListener("click", function () {
    document.querySelector(".my-modal").classList.remove("open");
  });

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".my-modal").classList.remove("open");
  }
});

document
  .querySelector(".my-modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector(".my-modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
