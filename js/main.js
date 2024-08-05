// Цвет хедера при скролле ***************************
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

// Модальное окно для видео ***************************
const modalVideo = document.querySelectorAll("[data-modal-video]");
const video = document.querySelectorAll(".my-video");
const body = document.body;

document.querySelectorAll("[data-open-video]").forEach((button, index) => {
  button.addEventListener("click", () => {
    modalVideo[index].classList.add("open");
    video[index].play();
    body.classList.add("disable-scroll");
  });
});

document.querySelectorAll("[data-close-video]").forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target.closest("[data-modal-video]");
    if (target) {
      const index = Array.from(modalVideo).indexOf(target);
      modalVideo[index].classList.remove("open");
      video[index].pause();
      body.classList.remove("disable-scroll");
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalVideo.forEach((element) => {
      if (element.classList.contains("open")) {
        const index = Array.from(modalVideo).indexOf(element);
        modalVideo[index].classList.remove("open");
        video[index].pause();
        body.classList.remove("disable-scroll");
      }
    });
  }
});

modalVideo.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) return;
    const index = Array.from(modalVideo).indexOf(element);
    modalVideo[index].classList.remove("open");
    video[index].pause();
    body.classList.remove("disable-scroll");
  });
});

// Модальное окно для картины ***************************
const modalImg = document.querySelectorAll("[data-modal-img]");
const bodes = document.body;

document.querySelectorAll("[data-open-img]").forEach((button, index) => {
  button.addEventListener("click", () => {
    modalImg[index].classList.add("open");
    bodes.classList.add("disable-scroll");
  });
});

document.querySelectorAll("[data-close-img]").forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target.closest("[data-modal-img]");
    if (target) {
      const index = Array.from(modalImg).indexOf(target);
      modalImg[index].classList.remove("open");
      bodes.classList.remove("disable-scroll");
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalImg.forEach((element) => {
      if (element.classList.contains("open")) {
        const index = Array.from(modalImg).indexOf(element);
        modalImg[index].classList.remove("open");
        bodes.classList.remove("disable-scroll");
      }
    });
  }
});

modalImg.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) return;
    const index = Array.from(modalImg).indexOf(element);
    modalImg[index].classList.remove("open");
    bodes.classList.remove("disable-scroll");
  });
});
