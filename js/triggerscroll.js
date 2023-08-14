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

  gsap.to("#kakapo", {
    opacity: 1,
    x: window.innerWidth * 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#kakapo",
      start: "0% 75%",
      end: "100% 20%",
      markers: true,
      toggleActions: "play none none none",
    },
  });

  gsap.to("#kereru", {
    opacity: 1,
    x: window.innerWidth * 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#kereru",
      start: "0% 75%",
      end: "100% 20%",
      markers: true,
      toggleActions: "play none none none",
    },
  });

  gsap.to("#pukeko", {
    opacity: 1,
    x: window.innerWidth * 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#pukeko",
      start: "0% 75%",
      end: "100% 20%",
      markers: true,
      toggleActions: "play none none none",
    },
  });
}

window.addEventListener("load", function () {
  init();
});
