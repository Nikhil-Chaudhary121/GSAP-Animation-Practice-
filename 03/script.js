let initialPath = "M 10 100 Q 480 100 950 100";

let finalPath = "M 10 100 Q 480 100 950 100";

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dots) {
  initialPath = `M 10 100 Q ${dots.x} ${dots.y} 950 100`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.3,
  });
});
string.addEventListener("mouseleave", function (dots) {
  // initialPath = `M 10 100 Q ${dots.x} ${dots.y} 950 100`;
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 2,
    ease: "elastic.out(1,0.1)",
  });
});
