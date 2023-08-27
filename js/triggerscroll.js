gsap.registerPlugin(ScrollTrigger);
viewPortWidth = window.innerWidth + "px";
viewPortHeight = window.innerHeight + "px";

window.onload = function () {
  window.scrollTo(0, 0);
  html.style.overflowY = "scroll";
};

// Navigation Bar animation
const showAnim = gsap
  .from("#navbar", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

// Navigation Bar animation based on scroll direction
ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

// Function to scroll down vertically
function ScrollDown(element, margin) {
  dims = element.getBoundingClientRect();
  marginPercent = (margin / 100) * window.innerHeight;
  offset = window.pageYOffset + dims.top;

  window.scrollTo({
    top: offset + marginPercent,
    behavior: "smooth",
  });
}

gsap.to(".about-us", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-us",
    start: "-25% 0%",
    end: "-20% 0%",
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
    once: true,
  },
});
