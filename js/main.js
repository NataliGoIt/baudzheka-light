const images = ["1gfdnfgn", "2jgnoihwsgo", "3fgjasdngsd"];
let index = 0;

const img = document.querySelector(".slider img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showImage() {
  img.src = images[index];
}

prev.onclick = () => {
  index = (index - 1 + images.length) % images.length;
  showImage();
};

next.onclick = () => {
  index = (index + 1) % images.length;
  showImage();
};