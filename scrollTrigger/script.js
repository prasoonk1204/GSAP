

gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})
gsap.from("#page2 #circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 720,
  
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: 2, // either true or from 1 to 5
  },
});
gsap.from("#page3 #circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 720,
  //   scrollTrigger: "#page3 #circle",

  scrollTrigger: {
    trigger: "#page3 #circle",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 50%",
    scrub: 2, // either true or from 1 to 5
  },
});