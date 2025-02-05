


const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const closeMenu = document.getElementById("close-menu")
let isMenuOpen = false

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen
  if (isMenuOpen) {
    mobileMenu.classList.add("fixed", "open")
    document.body.style.overflow = "hidden"
  } else {
    mobileMenu.classList.remove("fixed", "open")
    document.body.style.overflow = "auto"
  }
}

menuToggle.addEventListener("click", toggleMobileMenu)
closeMenu.addEventListener("click", toggleMobileMenu)


window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && isMenuOpen) {
    toggleMobileMenu()
  }
})


function initializeCarousel() {
  let currentSlide = 0
  const slides = document.querySelectorAll(".carousel-item")
  const thumbnails = document.querySelectorAll(".flex.space-x-2 img")

  if (!slides.length) return

  function showSlide(n) {
    
    slides.forEach((slide) => slide.classList.remove("active"))
    thumbnails.forEach((thumb) => thumb.classList.remove("border-red-600"))

   
    currentSlide = (n + slides.length) % slides.length

    
    slides[currentSlide].classList.add("active")
    thumbnails[currentSlide].classList.add("border-red-600")

    
    const currentImage = slides[currentSlide].src
    thumbnails[currentSlide].src = currentImage
  }

  
  slides.forEach((slide, index) => {
    thumbnails[index].src = slide.src
  })

  window.changeSlide = (n) => {
    showSlide(currentSlide + n)
  }

  window.setActiveSlide = (n) => {
    showSlide(n)
  }

  window.openModal = (imageSrc) => {
    const modal = document.getElementById("imageModal")
    const modalImage = document.getElementById("modalImage")
    modal.classList.remove("hidden")
    modalImage.src = imageSrc
    document.body.style.overflow = "hidden"
  }

  window.closeModal = () => {
    const modal = document.getElementById("imageModal")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
  }

  
  document.querySelector("#mainCarousel").addEventListener("click", () => {
    const activeImage = document.querySelector(".carousel-item.active")
    if (activeImage) {
      openModal(activeImage.src)
    }
  })

  
  document.getElementById("imageModal")?.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal()
    }
  })


  showSlide(0)
}


document.addEventListener("DOMContentLoaded", initializeCarousel)

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})


window.addEventListener("load", () => {
  const video = document.querySelector("video")
  if (video) {
    video.play()
  }
})



document.addEventListener("DOMContentLoaded", (event) => {
  const mainContent = document.querySelector("main")
  if (mainContent) {
    mainContent.style.opacity = "0"
    mainContent.style.transform = "translateY(20px)"
    mainContent.style.transition = "opacity 0.5s ease, transform 0.5s ease"

    setTimeout(() => {
      mainContent.style.opacity = "1"
      mainContent.style.transform = "translateY(0)"
    }, 100)
  }
})


function updateWhatsAppLink() {
  const whatsappLink = document.getElementById("whatsapp-link")
  if (whatsappLink) {
    const vehicleTitle = document.querySelector("h1").textContent
    const message = encodeURIComponent(`Hola, vengo de la web y estoy interesado en: ${vehicleTitle}`)
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`

    
    whatsappLink.href = whatsappUrl

    
    whatsappLink.addEventListener("click", (e) => {
      e.preventDefault() 
      window.open(whatsappUrl, "_blank") 
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateWhatsAppLink()
  initializeCarousel()
})

