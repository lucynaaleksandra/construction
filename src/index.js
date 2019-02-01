import "./index.scss"

// LAZY LOADING
document.addEventListener("DOMContentLoaded", function() {
  var sections = [].slice.call(document.querySelectorAll(".la-animatable"))

  if ("IntersectionObserver" in window) {
    let sectionObserver = new IntersectionObserver(
      function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("la-animatable--animate")
            //sectionObserver.unobserve(entry.target)
          } else {
            entry.target.classList.remove("la-animatable--animate")
          }
        })
      },
      {
        rootMargin: "0px 0px -500px 0px",
      }
    )

    sections.forEach(function(section) {
      sectionObserver.observe(section)
    })
  }
})

// MENU
window.openNav = () => {
  document
    .querySelector(".la-nav__menu-tabs")
    .classList.add("la-nav__menu--visible")
}

window.closeNav = () => {
  document
    .querySelector(".la-nav__menu-tabs")
    .classList.remove("la-nav__menu--visible")
}

// // STICKY NAV
// $(document).ready(function() {
//   $("#la-nav__navbar").sticky({
//     topSpacing: 0,
//     zIndex: 15,
//   })
// })
