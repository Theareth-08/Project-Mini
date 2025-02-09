// TOGGLE BUTTON
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll("nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]")
  hamburger.classList.toggle('ri-close-large-line')
})
navLink.forEach(link=>{
    link.addEventListener("click", () => {
      navMenu.classList.remove("left-[0]")
      hamburger.classList.remove('ri-close-large-line')
    })
})


// SHOW SCROLL UP
const scrollup = () => {
  const scrollup = document.getElementById("scrollup")	
  if (this.scrollY >=250){
    scrollupBtn.classList.remove("-bottom-1/2")
    scrollupBtn.classList.add("-bottom-1/2")
  } else {
    scrollupBtn.classList.add("-bottom-1/2")
    scrollupBtn.classList.remove("-bottom-1/2")
  }
}

// CHANGE BACKGROUND HEADER

// SWIPER
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

// SCROLL SECTIONS ACTIVE LINK

// SCROLL REVEAL ANIMATION