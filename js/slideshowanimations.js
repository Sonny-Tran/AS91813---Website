gsap.registerPlugin(ScrollTrigger);

var item = document.getElementById("images");
let i = 0;
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

function galleryanimation(imagesrc, x1) {
  var tl = gsap.timeline();
  tl.to(item, {
    xPercent: x1,
    opacity: 0,
    ease: Power1.easeInOut,
    duration: 0.4,
  });
  tl.to(item, {
    xPercent: -x1,
    duration: 0,
  });
  tl.set(item, { attr: { src: imagesrc } });
  tl.to(item, {
    xPercent: 0,
    opacity: 1,
    duration: 0.4,
    ease: Power1.easeInOut,
  });
}

function galleryonclick(n) {
  i += n;
  if (i >= images.length) {
    i = 0;
  }
  if (i < 0) {
    i = images.length - 1;
  }

  var imagesrc = "img/" + images[i] + ".jpg";

  if (n == 1) {
    galleryanimation(imagesrc, -60);
  } else {
    galleryanimation(imagesrc, 60);
  }
  autoscroll(n);
}

var auto = setInterval(() => {
  autoscrollanimation();
}, 2500);

function autoscrollanimation() {
  i += 1;
  if (i >= images.length) {
    i = 0;
  }
  if (i < 0) {
    i = images.length - 1;
  }

  var imagesrc = "img/" + images[i] + ".jpg";

  galleryanimation(imagesrc, -60);

  delay = 2500;
  clearInterval(auto);
  auto = setInterval(autoscrollanimation, delay);
}

function autoscroll(n) {
  clearInterval(auto);
  delay = 6000;
  auto = setInterval(autoscrollanimation, delay);
}
