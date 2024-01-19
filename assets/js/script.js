'use strict'
const header = document.querySelector("[data-header]")
const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggle]")
navToggler.addEventListener("click", _ => {
  navbar.classList.toggle("active")
  navToggler.classList.toggle("active")
})
window.addEventListener("scroll", _ => header.classList[window.scrollY > 50 ? "add" : "remove"]("active"))
const toggleBtns = document.querySelectorAll("[data-toggle-btn]")
toggleBtns.forEach(toggleBtn => {
  toggleBtn.addEventListener("click", _ => {
    toggleBtn.classList.toggle("active");
  })
})





