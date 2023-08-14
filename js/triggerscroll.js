gsap.registerPlugin(ScrollTrigger);
viewPortWidth = window.innerWidth + "px";
viewPortHeight = window.innerHeight + "px";

function init() {
  gsap.to("#navbar", {
    opacity: 0,
    y: window.innerHeight * 0.15,
    scrollTrigger: {
      trigger: "#navbar",
      start: "5% 0%",
      scrub: true,
      markers: true,
      toggleActions: "play none reverse none",
    },
  });

  gsap.to(".about-us", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-us",
      start: "0% 0%",
      end: "5% 0%",
      markers: true,
      toggleActions: "play none reverse none",
    },
  });
}

window.addEventListener("load", function () {
  init();
});

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    markers: true,
    start: "50% 50%",
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: 0.2,
      delay: 0.01,
      ease: Power0.easeNone,
      snap: 0.1,
    },
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: window.innerHeight * 2 + "px",
  },
});
