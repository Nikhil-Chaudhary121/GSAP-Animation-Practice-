// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   borderRadius: 100,
//   rotate: 720,
//   backgroundColor: "blue",
// });
// gsap.from("#box2", {
//   x: 1200,
//   height: 200,
//   borderRadius: 50,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "lime",
// });

// gsap.from("h1", {
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,
// });

// gsap.to("#box", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: Infinity,
//   yoyo: true,
//   borderRadius: 80,
// });

// let tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
//   borderRadius: 100,
//   rotate: 720,
//   backgroundColor: "blue",
// });

// tl.to("#box2", {
//   x: 1200,
//   duration: 1.5,
//   backgroundColor: "purple",
// });

// tl.to("#box3", {
//   x: 1200,
//   duration: 1.5,
//   scale: 0.8,
//   backgroundColor: "pink",
// });
let a = gsap.timeline();

a.from("h2", {
  y: -20,
  opacity: 0,
  delay: 0.5,
  duration: 1,
});

a.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

a.from("h1", {
  opacity: 0,
  scale: 0.2,
  duration: 1,
});
