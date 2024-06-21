document.querySelector("#switch").addEventListener("click", function (dets) {
    document.querySelector(".navtags .items").style.left = "0";
    document.querySelector("#switch").style.left = "-10%";

})
document.querySelector(".crossbtn").addEventListener("click", function (dets) {
    document.querySelector(".navtags .items").style.left = "-100%";
    document.querySelector("#switch").style.left = "0%";


})

// toplayer menu btn 
var flag = 0;
document.querySelector(".menu").addEventListener("click", function () {
    if (flag === 0) {
        document.querySelector("#toplayer").style.top = "0";
        flag = 1;
    }
    else {
        document.querySelector("#toplayer").style.top = "-100vh";
        flag = 0;
    }

})




var tl = gsap.timeline();

gsap.set("#switch",{
    opacity:0,
})



tl.from(".watch2", {
    y: 500,
    duration: 3,
    ease: "expo.out"
})
    .from(".watch1,.image1", {
        x: 300,
        delay: -1,
        opacity: 0,
        duration: 2,
        ease: "expo.out"
    })
    .from(".watch3,.image2", {
        x: -300,
        delay: -1.9,
        opacity: 0,
        duration: 2,
        ease: "expo.out"
    })

    .from(".heading a,.menu>i",{
        y:-300,
        duration: .5,
        delay:-.4,
        stagger: .2,
        rotate:"-70deg"

    })
    .from("li",{
        y:-300,
        duration:.5,
        delay: -.4,
        stagger:.2,
        rotate: "-70deg"
    })
    .from(".search a,.search i", {
        y: -300,
        duration: .5,
        delay: -.4,
        stagger: .2,
        rotate: "-70deg"

    })
    .from(".lastfloor",{
        y:300,
        duration:1
    })
    .from(".line1,.arrow>i,.line2",{
        width:0,
        opacity:0,
        duration:1
    })

    .to("#switch",{
        // left:"-10%",
        opacity:1,
        duration:.5
    })
    .from("#switch>p",{
        opacity:0,
        duration:.1
    })