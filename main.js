let bars = document.querySelector(".bars");
let ul = document.querySelector(".nav-menu");

bars.addEventListener("click", function () {
    ul.classList.toggle("active-rotate")
});

document.addEventListener('click', (event) => {
  if (ul.classList.contains('active-rotate') && !bars.contains(event.target)) {
    ul.classList.remove('active-rotate');
  }
});