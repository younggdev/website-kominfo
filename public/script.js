// Images Slider
let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

setInterval(next, 5000);

let profil = document.querySelectorAll(".profil-container");
let index_profil = 0;

function lanjut() {
  profil[index_profil].classList.remove("active");
  index_profil = (index_profil + 1) % profil.length;
  profil[index_profil].classList.add("active");
}

function ulang() {
  profil[index_profil].classList.remove("active");
  index_profil = (index_profil - 1 + profil.length) % profil.length;
  profil[index_profil].classList.add("active");
}
// Berita
// let container = document.querySelector(".grid-cols-2");
// let content = `<a class="block" href="#"> <img src="IMG/bg3.jpeg" alt="" class="w-[28%] float-left mr-4" />
// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, temporibus!</p>
// <a href="">Baca Selengkapnya</a>
// <hr class="my-2" /></a>`;

// Galeri
// let containerGaleri = document.querySelector(".congaleri");
// let contentGaleri = `<div class="h-15 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] bg-sky-400 rounded-lg overflow-hidden group relative">
// <div class="w-full h-full bg-[url('img/bg2.png')] bg-cover bg-center group-hover:scale-110 transition-all duration-300"></div>
// <div class="bg-[#339BEB] w-full bg-opacity-75 text-white p-5 block invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 absolute -bottom-8 group-hover:-bottom-0">
//   <p class="text-sm">Lorem ipsum dolor sit amet.</p>
// </div>
// </div>`;

// for (let i = 0; i < 4; i++) {
//   // container.innerHTML += content;
//   containerGaleri.innerHTML += contentGaleri;
// }

// Logo
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

// Navbar
// const nav = document.querySelector(".fa-bars");
// const navbar = document.querySelector(".navbar");

// nav.addEventListener("click", () => {
//   navbar.classList.toggle("invisible");
// });

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("bg-[#0082e6]", window.scrollY > 5);
});

const bgnav = document.querySelector(".dropnav");
window.addEventListener("scroll", function () {
  bgnav.classList.toggle("droplink", window.scrollY > 5);
});
const bgnav2 = document.querySelector(".dropnav2");
window.addEventListener("scroll", function () {
  bgnav2.classList.toggle("droplink2", window.scrollY > 5);
});
