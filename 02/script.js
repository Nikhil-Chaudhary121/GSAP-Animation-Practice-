gsap.from("#page1 #box", {
  opacity: 0,
  scale: 0,
  duration: 2,
  borderRadius: "50%",
  rotate: 720,
});
gsap.from("#page2 #box", {
  opacity: 0,
  scale: 0,
  duration: 2,
  borderRadius: "50%",
  rotate: 720,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 3,
  },
});

gsap.from("#page3 h2", {
  x: 500,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    markers: true,
    scrub: 3,
  },
});
gsap.from("#page3 h3", {
  x: -500,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h3",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    markers: true,
    scrub: 3,
  },
});
