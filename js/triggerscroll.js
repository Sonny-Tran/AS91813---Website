gsap.registerPlugin(ScrollTrigger);
viewPortWidth = window.innerWidth + "px";
viewPortHeight = window.innerHeight + "px";

const showAnim = gsap
  .from("#navbar", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

function ScrollDown(element, margin) {
  console.log(element);
  dims = element.getBoundingClientRect();
  marginPercent = (margin / 100) * window.innerHeight;
  offset = window.pageYOffset + dims.top;

  window.scrollTo({
    top: offset + marginPercent,
    behavior: "smooth",
  });
  console.log("ran2");
}

gsap.to(".about-us", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-us",
    start: "-25% 0%",
    end: "-20% 0%",
    markers: true,
    toggleActions: "play none reverse none",
  },
});

gsap.from("#kakapo", {
  opacity: 0,
  xPercent: 20,
  duration: 0.5,
  ease: Elastic.easeOut.config(1, 0.75),
  scrollTrigger: {
    trigger: "#kakapo",
    start: "110% 100%",
    markers: true,
    once: true,
  },
});

gsap.from("#kereru", {
  opacity: 0,
  xPercent: 20,
  duration: 0.5,
  ease: Elastic.easeOut.config(1, 0.75),
  scrollTrigger: {
    trigger: "#kereru",
    start: "110% 100%",
    markers: true,
    once: true,
  },
});

gsap.from("#pukeko", {
  opacity: 0,
  xPercent: 20,
  duration: 0.5,
  ease: Elastic.easeOut.config(1, 0.75),
  scrollTrigger: {
    trigger: "#pukeko",
    start: "110% 100%",
    markers: true,
    once: true,
  },
});

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
  console.log(imagesrc);

  var delay = 1000;

  if (n == 1) {
    galleryanimation(imagesrc, -60);
  } else {
    galleryanimation(imagesrc, 60);
  }
  autoscroll(n, delay);
}

var auto = setInterval(() => {
  autoscrollanimation(1);
}, 2000);

function autoscrollanimation() {
  i += 1;
  if (i >= images.length) {
    i = 0;
  }
  if (i < 0) {
    i = images.length - 1;
  }

  var imagesrc = "img/" + images[i] + ".jpg";
  console.log(imagesrc);
  console.log("sus");

  galleryanimation(imagesrc, -60);

  delay = 2000;
  clearInterval(auto);
  auto = setInterval(autoscrollanimation, delay);
}

function autoscroll(n, delay) {
  clearInterval(auto);
  console.log(n);
  delay = 3000;
  auto = setInterval(autoscrollanimation, delay);
}
