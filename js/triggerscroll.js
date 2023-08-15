gsap.registerPlugin(ScrollTrigger);
viewPortWidth = window.innerWidth + "px";
viewPortHeight = window.innerHeight + "px";

gsap.from(".parallax", { opacity: 0, xPercent: 5, duration: 0.5 });

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

var slides = document.querySelectorAll(".panel");

var action = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.3,
      start: "center center",
      end: "+=3000",
      markers: true,
    },
  })
  .to({}, { duration: 0.5 })
  .to(slides, { xPercent: -100, duration: 2, ease: "none", stagger: 5 })
  .to({}, { duration: 0.5 }); // an empty tween to generate a pause at the end
