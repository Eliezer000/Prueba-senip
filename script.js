// Header scroll effect
const header = document.getElementById("main-header")
let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop) {
    header.classList.add("header-scrolled")
  } else {
    header.classList.remove("header-scrolled")
  }
  lastScrollTop = scrollTop
})

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
let isMenuOpen = false

menuToggle.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen
  if (isMenuOpen) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px"
  } else {
    mobileMenu.style.maxHeight = "0"
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.style.maxHeight = "0"
    isMenuOpen = false
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Auto-play video on load
window.addEventListener("load", () => {
  const video = document.querySelector("video")
  if (video) {
    video.play()
  }
})

