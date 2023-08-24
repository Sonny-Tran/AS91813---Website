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
  "maunga_club_cabin",
  "mountain_view_1",
  "kakapo/bunk_room",
  "kakapo/cabin_exterior",
  "kakapo/cabin_view",
  "kakapo/hallway",
  "kereru/adult_bedroom",
  "kereru/cabin_exterior",
  "kereru/kids_bedroom",
  "kereru/kitchen",
  "pukeko/adult_bedroom",
  "pukeko/bathroom",
  "pukeko/chalet_exterior",
  "pukeko/chalet_view",
];

var image = document.getElementById("images");
let i = 0;
moving = false;

function MoveSlides(n) {
  i += n;
  if (i >= images.length) {
    i = 0;
  }
  if (i < 0) {
    i = images.length - 1;
  }
  moving = true;

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

  image.src = "img/" + images[i] + ".jpg";
  image.classList.remove("show");
}
var isPaused = false;
delay = 3000;

function temppause() {
  delay = 5000;
}

var interval;

function f1() {
  clearInterval(interval);
  if (!moving) {
    MoveSlides(1);
  }

  interval = setInterval(f1, delay);
  delay = 3000;
  moving = false;
}

f1();
