//! Цвет хедера при скролле ***************************
const headerBlur = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY > 8) {
    headerBlur.style.background = "rgba(0, 0, 0, 0.5)";
  } else {
    headerBlur.style.background = "rgb(9, 15, 29)";
  }
};

//! Бургер ***************************
document.addEventListener("DOMContentLoaded", () => {
  const headerBurger = document.querySelector(".header");
  const bodyBurger = document.body;

  document.querySelector(".burger").addEventListener("click", () => {
    if (headerBurger.classList.contains("open")) {
      headerBurger.classList.remove("open");
      bodyBurger.classList.remove("disable-scroll");
      window.scrollTo(0, parseInt(bodyBurger.dataset.position));
      bodyBurger.style.top = "";
      bodyBurger.dataset.position = "";
    } else {
      headerBurger.classList.add("open");
      const pagePositionBurger = window.scrollY;
      bodyBurger.classList.add("disable-scroll");
      document.querySelector(".logo").style.pointerEvents = "none";
      bodyBurger.dataset.position = pagePositionBurger;
      bodyBurger.style.top = `-${pagePositionBurger}px`;
    }
  });

  document.querySelector(".menu").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.querySelector(".burger").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      headerBurger.classList.remove("open");
      bodyBurger.classList.remove("disable-scroll");
      document.querySelector(".logo").style.pointerEvents = "";
      window.scrollTo(0, parseInt(bodyBurger.dataset.position));
      bodyBurger.style.top = "";
      bodyBurger.dataset.position = "";
    }
  });
});

//! Модальное окно для видео ***************************
const modalVideo = document.querySelectorAll(".js-modal-video");
const video = document.querySelectorAll(".my-video");
const bodyVideo = document.body;

document.querySelectorAll(".js-open-video").forEach((button, index) => {
  button.addEventListener("click", () => {
    modalVideo[index].classList.add("open");
    video[index].play();
    const pagePositionVideo = window.scrollY;
    bodyVideo.classList.add("disable-scroll");
    bodyVideo.dataset.position = pagePositionVideo;
    bodyVideo.style.top = `-${pagePositionVideo}px`;
  });
});

document.querySelectorAll(".js-close-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.closest(".js-modal-video");
    if (target) {
      const index = Array.from(modalVideo).indexOf(target);
      modalVideo[index].classList.remove("open");
      video[index].pause();
      bodyVideo.classList.remove("disable-scroll");
      window.scrollTo(0, parseInt(bodyVideo.dataset.position));
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
        bodyVideo.classList.remove("disable-scroll");
        window.scrollTo(0, parseInt(bodyVideo.dataset.position));
      }
    });
  }
});

modalVideo.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    const index = Array.from(modalVideo).indexOf(element);
    modalVideo[index].classList.remove("open");
    video[index].pause();
    bodyVideo.classList.remove("disable-scroll");
    window.scrollTo(0, parseInt(bodyVideo.dataset.position));
  });
});

//! Модальное окно для картины ***************************
const modalImg = document.querySelectorAll(".js-modal-img");
const bodyImg = document.body;

document.querySelectorAll(".js-open-img").forEach((button, index) => {
  button.addEventListener("click", () => {
    modalImg[index].classList.add("open");
    const pagePositionImg = window.scrollY;
    bodyImg.classList.add("disable-scroll");
    bodyImg.dataset.position = pagePositionImg;
    bodyImg.style.top = `-${pagePositionImg}px`;
  });
});

document.querySelectorAll(".js-close-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.closest(".js-modal-img");
    if (target) {
      const index = Array.from(modalImg).indexOf(target);
      modalImg[index].classList.remove("open");
      bodyImg.classList.remove("disable-scroll");
      window.scrollTo(0, parseInt(bodyImg.dataset.position));
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalImg.forEach((element) => {
      if (element.classList.contains("open")) {
        const index = Array.from(modalImg).indexOf(element);
        modalImg[index].classList.remove("open");
        bodyImg.classList.remove("disable-scroll");
        window.scrollTo(0, parseInt(bodyImg.dataset.position));
      }
    });
  }
});

modalImg.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    const index = Array.from(modalImg).indexOf(element);
    modalImg[index].classList.remove("open");
    bodyImg.classList.remove("disable-scroll");
    window.scrollTo(0, parseInt(bodyImg.dataset.position));
  });
});
