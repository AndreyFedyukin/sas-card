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

// document.body.style.overflow = "hidden";
// document.body.style.overflow = "";

// Модальное окно для видео ***************************
const modalVideo = document.querySelector(".my-modal-video");
const video = document.getElementById("myVideo");

document
  .querySelector(".open-modal-btn-video")
  .addEventListener("click", () => {
    modalVideo.classList.add("open");
    video.play();
    document.body.style.overflow = "hidden";
  });

document
  .querySelector(".close-modal-btn-video")
  .addEventListener("click", () => {
    modalVideo.classList.remove("open");
    video.pause();
  });

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalVideo.classList.remove("open");
    video.pause();
  }
});

modalVideo.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) return;
  event.currentTarget.classList.remove("open");
  video.pause();
});

// Модальное окно для картинок ***************************
const modalImage = document.querySelector(".my-modal");

document.querySelector(".open-modal-btn").addEventListener("click", () => {
  modalImage.classList.add("open");
});

document.querySelector(".close-my-modal-btn").addEventListener("click", () => {
  modalImage.classList.remove("open");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalImage.classList.remove("open");
  }
});

modalImage.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) return;
  event.currentTarget.classList.remove("open");
});
