const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




let allh = document.querySelectorAll("#page2 h1");

allh.forEach((elem) => {
  let t = elem.textContent;

  let sText1 = t.split("");

  let clutter = "";

  sText1.forEach((e) => {
    console.log(e);
    clutter += `<span>${e}</span>`;
  });

  elem.innerHTML = clutter;
});




gsap.to("#page2 h1 span", {
  color: "#bbded8",
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 3,
  },
});

// for only 1 element

// let text1 = document.querySelector("#firsth1").textContent

// let sText1 = text1.split("")
// console.log(sText1);

// let clutter = ""
// sText1.forEach((elem) => {
//     console.log(elem);
//     clutter += `<span>${elem}</span>`
// })

// console.log(clutter);
// document.querySelector("#firsth1").innerHTML= clutter;

// gsap.to("#page2 h1 span", {
//   color: "#bbded8",
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 60%",
//     end:"top 20%",
//     scrub:2,
//   },
// });
