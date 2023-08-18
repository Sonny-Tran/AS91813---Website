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

gsap.to(".about-us", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-us",
    start: "0% 0%",
    end: "5% 0%",
    toggleActions: "play none reverse none",
  },
});

gsap.from(".body", {
  opacity: 0,
  delay: 0.2,
  duration: 0.4,
});
var slides = document.querySelectorAll(".panel");
const total_slides_num = gsap.utils.toArray(".panel");
var slides_width = window.innerWidth * 0.29; // width of window * viewwidth of panel + desired margin-x
let pinTarget = document.querySelector(".child");

var action = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.1,
      start: "center center",
      end: "=+" + window.innerHeight * total_slides_num.length,
      markers: true,
      invalidateOnRefresh: true,
      ease: "power2.inOut",
      once: true,
      onLeave: function (self) {
        self.scroll(self.start);
        self.disable();
        self.animation.progress(1);
        ScrollTrigger.refresh();
      },
      snap: {
        snapTo: 1,
        duration: 1.5,
        delay: 0,
        ease: "power2.inOut",
      },
    },
  })
  .to("#kakapo", {
    left: window.innerWidth * (1 / total_slides_num.length) - slides_width, // Used to animate the divs and decide where they're placed.
    duration: 1, // relative unit with the 'end' variable in gsap.timeline, decides how far user has to scroll to finsih the animation.
    ease: "none", // no acceleration and deacceleration in the animation
    stagger: 2, // relative unit with the 'end' variable in gsap.timeline, decides how far user has to scroll to trigger next animation.
  })
  .to("#kereru", {
    left: window.innerWidth * (2 / total_slides_num.length) - slides_width, //formula: window.innerWidth * (slide-number / total-number-of-slides.length) - slides_width
    duration: 1,
    ease: "none",
    stagger: 2,
  })
  .to("#pukeko", {
    left: 1 * window.innerWidth * (3 / total_slides_num.length) - slides_width,
    duration: 1,
    ease: "none",
    stagger: 2,
  })
  .to({}, { duration: 0.5 }); // an empty tween to generate a pause at the end

function deletePinSpacing() {
  const spacing = document.querySelector(".pin-spacer");
  if (spacing) spacing.remove();
}
