gsap.to("#page2 img", {
    width:"100%",
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,   
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})