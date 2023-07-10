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

// Berita
let container = document.querySelector(".grid-cols-2");
let content = `<a class="block" href="#"> <img src="IMG/bg3.jpeg" alt="" class="w-[28%] float-left mr-4" />
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, temporibus!</p>
<a href="">Baca Selengkapnya</a>
<hr class="my-2" /></a>`;

// Galeri
let containerGaleri = document.querySelector(".congaleri");
let contentGaleri = `<img src="img/bg2.png" alt="" class="rounded-md hover:scale-110 transition-all duration-500" />`;

for (let i = 0; i < 4; i++) {
  container.innerHTML += content;
  containerGaleri.innerHTML += contentGaleri;
}
