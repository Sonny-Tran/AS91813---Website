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

var slides = document.querySelectorAll(".panel");
const total_slides_num = gsap.utils.toArray(".panel");
var slides_width = window.innerWidth * 0.29; // width of window * viewwidth of panel + desired margin-x
let pinTarget = document.querySelector(".child");

var action = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#container",
      pin: true,
      scrub: 0.1,
      start: "center center",
      end: "=+" + window.innerHeight * total_slides_num.length,
      markers: true,
      invalidateOnRefresh: true,
      ease: "power2.inOut",
      once: true,
      // deletes pin-space after animation is finished note: record this to show how it fixed things
      onLeave: function (self) {
        self.scroll(self.start); // Scrolls back to the start
        self.disable(); // Disables scrolltrigger, removing markers and pin-space
        self.animation.progress(1); // sets the animation progress to be finished so content doesn't disappear
        ScrollTrigger.refresh(); // refreshes scrolltrigger calculations since the overall height changed
      },
      snap: {
        snapTo: 1,
        duration: 1.5,
        delay: 0.01,
        ease: "power1.inOut",
      },
    },
  })
  .to({}, { duration: 0.05 }) // an empty tween to generate a delay at the start
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

function ScrollDown(element, margin) {
  dims = element.getBoundingClientRect();
  body = element.getBoundingClientRect();
  marginPercent = (margin / 100) * window.innerHeight;
  offset = dims.bottom - body.top;

  window.scrollTo({
    top: offset + marginPercent,
    behavior: "smooth",
  });

  if (action.progress != 1) {
    setTimeout(() => {
      window.scrollTo({
        top: offset + marginPercent,
        behavior: "smooth",
      });
    }, 2443);
  }
}

let loop = horizontalLoop(".image", {
  speed: 3,
  repeat: -1,
  paddingRight: 25,
});

/*

  function setDirection(value) {
  if (loop.direction !== value) {
    gsap.to(loop, { timeScale: value, duration: 0.3, overwrite: true });
    loop.direction = value;
  }
}

Observer.create({
  target: window,
  type: "wheel,scroll,touch",
  onDown: () => setDirection(1),
  onUp: () => setDirection(-1),
});

*/

// Horizontal Loop
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
