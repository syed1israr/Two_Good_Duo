function vide(){
    var vid= document.querySelector(".video-container")
    var btn=document.querySelector(".Play")
    vid.addEventListener("mouseenter",function(){
       gsap.to(btn,{
           scale:1,
           opacity:1,
       })
   
    })
   vid.addEventListener("mouseleave",function(){
       gsap.to(btn,{
           scale:0,
           opacity:0,
       })
   })
   vid.addEventListener("mousemove",function(dets){
       gsap.to(btn,{
          left:dets.x-60,
          top:dets.y-40,
       })
   })
}
vide();
function loading(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration: 0.8,
        stagger:0.2
    })
    gsap.from(".video-container",{
        y:100,
        opacity:0,
        delay:1.5,
        duration: 0.8,
        stagger:0.2
    })
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function elem(){
  var red=   document.querySelector(".mover");

    document.addEventListener("mousemove",function(dets){
        gsap.to(".mover",{
            left:dets.x+20,
            top:dets.y,
            duration:2,
        })
    } )
    document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(1)`
        })
        red.style.backgroundColor="wheat";
    })
    document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(0)`
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(1)`
            
        })
        red.style.backgroundColor="white";
    })
    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(0)`
        })
    })
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(1)`
        })
        red.style.backgroundColor="black";
    })
    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(0)`
        })
    })
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(1)`
        })
        red.style.backgroundColor="green";
    })
    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to(".mover",{
            transform: `translate(-50%,-50%) scale(0)`
            
        })
    })
    
    
}
elem();

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()
function navbarAnimation() {
    gsap.to(".nav-1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to(".nav-2 .links", {
      transform: "translateY(-100%)",
      opacity: 0.8,
        scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
       
      },
    });
  }
  navbarAnimation()