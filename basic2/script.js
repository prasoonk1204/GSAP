let tl = gsap.timeline()

tl.to("#box1",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1
})
tl.to("#box2",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
})
tl.to("#box3",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
})

// gsap.to("#box1",{
//     x:1000,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:1
// })
// gsap.to("#box2",{
//     x:1000,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:3
// })
// gsap.to("#box3",{
//     x:1000,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:5
// })