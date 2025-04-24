function changeImgSize() {
  document.getElementById("imgMinji").style.transform = "scale(1.5)";
}
function resetImgSize() {
  document.getElementById("imgMinji").style.transform = "scale(1)";
}
let index = 0;
setInterval(() => {
  const images = ["src/assets/minji.jpg", "src/assets/minji2.jpg"];

  const img = document.getElementById("slideImg");
  index = (index + 1) % images.length;

  img.classList.remove("slide-effect");
  void img.offsetWidth;

  img.src = images[index];
  img.classList.add("slide-effect");
}, 3000);
