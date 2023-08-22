let expanded = false;
const button = document.querySelectorAll(".img_expand");

button.forEach((button) => {
  let panel = button.closest(".panel");
  let img_container = panel.querySelector(".image-container");
  let textbox = panel.querySelector(".text-box");
  console.log("ran");
  console.log(expanded);

  button.addEventListener("click", function (event) {
    if (expanded == false) {
      textbox.classList.add("text-box-hide");
      img_container.classList.add("image-container-expand");
      console.log("ran2");
      expanded = !expanded;
      button.textContent = "> \n > \n >";
    } else {
      textbox.classList.remove("text-box-hide");
      img_container.classList.remove("image-container-expand");

      console.log("ran3");
      expanded = false;
      button.textContent = "< \n < \n <";
    }
  });
});

const imgs = document.querySelectorAll(".fullscreen-img");
const fullPage = document.querySelector("#fullpage");
const html = document.querySelector("html");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    setDirection(0);
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
    html.style.overflowY = "hidden"; // Prevents User from scrolling while image expanded
  });
});

const gallery_scrollbar = document.querySelector(
  "#imgcontainer::-webkit-scrollbar"
);

addEventListener("mouseover", function () {
  setDirection(0);
});

const images = [
  "bridge1",
  "bridge2",
  "bridge3",
  "bungee_general1",
  "bungee_general2",
  "canyon1",
  "canyon2",
  "canyon3",
  "tower1",
  "tower2",
  "ultra-bungee-hero",
];

var image = document.getElementById("images");
let i = 0;

function MoveSlides(n) {
  i += n;
  if (i >= images.length) {
    i = 0;
  }
  if (i < 0) {
    i = images.length - 1;
  }

  image.classList.remove("prev-animation");
  image.classList.remove("next-animation");

  if (n < 0) {
    setTimeout(() => {
      image.classList.add("prev-animation");
    }, 50);
    setTimeout(() => {
      image.classList.remove("prev-animation");
    }, 1050);
  }

  if (n > 0) {
    setTimeout(() => {
      image.classList.add("next-animation");
    }, 50);
    setTimeout(() => {
      image.classList.remove("next-animation");
    }, 1050);
  }

  setTimeout(() => {
    image.src = "img/" + images[i] + ".jpg";
    image.classList.remove("show");
  }, 375);
}

var auto = setInterval(() => {
  MoveSlides(1);
}, 2500);

function slideshow_autostop() {
  clearInterval(auto);

  setTimeout(() => {
    setInterval(() => {
      MoveSlides(1);
    }, 2500);
  }, 7500);
}
