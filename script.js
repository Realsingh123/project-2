gsap.to(".home-text h1",{
    opacity:0,
    x:80,
    scrollTrigger:{
        trigger:".home",
        scroller:"body",
        // markers:true,
        start:"50% 50%",
        end:  "50% 30%",
        scrub:1,
        

    }
})

gsap.to(".home-text h5,.home-text h3",{
    x:-80,
    opacity:0,
    scrollTrigger:{
        trigger:".home",
        scroller:"body",
        // markers:true,
        start:"50% 50%",
        end:  "50% 20%",
        scrub:1,
      

    }
})

// gsap.to(".home-text h3",{
//     x:-80,
//     scrollTrigger:{
//         trigger:".home",
//         scroller:"body",
//         markers:true,
//         start:"50% 50%",
//         end:  "50% 15%",
//         scrub:1,

//     }
// })

gsap.to(".btn",{
    scale:1.2,
       scrollTrigger:{
        trigger:".home",
        scroller:"body",
        // markers:true,
        start:"50% 50%",
        end:  "50% 20%",
        scrub:1,

    }
})

gsap.to(".project-img",{
    scale:1.2,
    scrollTrigger:{
        trigger:".project",
        scroller:"body",
        // markers:true,
        start:"10% 70%",
        end:  "20% 20%",
        scrub:1,

    }
})

gsap.from("#head",{
    opacity:0.3,
    scale:0.8,
    scrollTrigger:{
        trigger:".project",
        scroller:"body",
        // markers:true,
        start:"10% 70%",
        end:  "20% 20%",
        scrub:1,

    }
})

// gsap.to(".about-img",{
//     // scale:1.2,
//     scrollTrigger:{
//         trigger:".about",
//         scroller:"body",
//         markers:true,
//         start:"10% 70%",
//         end:  "20% 20%",
//         scrub:1,

//     }
// })

gsap.from(".about-text h3",{
    opacity:0.3,
    scale:0.8,
    scrollTrigger:{
        trigger:".about-text",
        scroller:"body",
        // markers:true,
        start:"10% 70%",
        end:  "20% 20%",
        scrub:1,

    }
})




gsap.from(".text h1,h2",{
    opacity:0.3,
    scale:0.8,
    scrollTrigger:{
        trigger:".text",
        scroller:"body",
        // markers:true,
        start:"10% 70%",
        end:  "20% 70%",
        scrub:1,

    }
})

gsap.from(".logo",{
   x:100,
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        // markers:true,
        start:"10% 60%",
        end:  "20% 30%",
        scrub:1,

    }
})

gsap.from(".logo2",{
    x:-100,
     scrollTrigger:{
         trigger:"#cards",
         scroller:"body",
        //  markers:true,
         start:"10% 60%",
         end:  "20% 30%",
         scrub:1,
 
     }
 })

 gsap.to(".card h3",{
    scale:1.1,
     scrollTrigger:{
         trigger:"#cards",
         scroller:"body",
        //  markers:true,
         start:"10% 60%",
         end:  "20% 30%",
         scrub:1,
 
     }
 })

 



