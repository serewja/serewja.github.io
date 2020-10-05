"use strict";

const link = document.querySelector("#write-us");
const popup = document.querySelector(".pop-up-send-form");
const close = document.querySelector(".write-us__close");
const nameinput = document.querySelector("#write-us__name");
const emailinput = document.querySelector("#write-us__email");
const form = document.querySelector(".write-us");
const textarea = document.querySelector("#write-us__text");
const sendbtn = document.querySelector('#send-btn');

link.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("modal-show");
    nameinput.focus();
  });

close.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

sendbtn.addEventListener("click", function (e) {
  if (!nameinput.checkValidity()) {
    e.preventDefault();
    popup.classList.remove("modal-error");
    setTimeout(function () {
      popup.classList.add("modal-error");
    }, 0);
    nameinput.focus();
  } else if (!emailinput.checkValidity()) {
    e.preventDefault();
    popup.classList.remove("modal-error");
    setTimeout(function () {
      popup.classList.add("modal-error");
    }, 0);
    emailinput.focus();
  } else if (!textarea.checkValidity()) {
    e.preventDefault();
    popup.classList.remove("modal-error");
    setTimeout(function () {
      popup.classList.add("modal-error");
    }, 0);
    textarea.focus();
  }
});
window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      e.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
