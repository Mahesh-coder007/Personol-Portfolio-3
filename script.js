function init(){
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
init();


document.querySelectorAll(".work").forEach(function(elem){
  var rotate = 0;
  var dif = 0;
  elem.addEventListener("mouseleave", function(dets){
      gsap.to(elem.querySelector(".work img"),{
          opacity: 0,
          ease: Power4,
          duration:.5,
      });
  });
  elem.addEventListener("mousemove", function(dets){
  var diff = dets.clientY - elem.getBoundingClientRect().top;
  dif = dets.clientX - rotate;
  rotate = dets.clientX;
      gsap.to(elem.querySelector(".work img"),{
          opacity: 1,
          ease: Power4,
          top: diff ,
          left:dets.clientX,
          rotate: gsap.utils.clamp(-20,20, dif *1)
      })
  });
}); 


var load=gsap.timeline({});
function time(){
    let 
    a=0;
    setInterval(function(){
        a= a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector(".pre-loader h1").innerHTML=a+"%"
        }
        else{
            a=100
            document.querySelector(".pre-loader h1").innerHTML=a+"%"
    
        }
    },180)
}
time();

load.to(".pre-loader", 0.25,{
    delay:3.2,
    // height:"0",
    opacity:0,
    // ease: Circ.easeInOut

},"im");

load.to(".bar", 1.5,{
    delay:3.2,
    height:0,
    stagger:{
        amount:0.5
    },
    ease:"power4,inOut",
},"im");

function cursor(){
  var cursur = document.querySelector(".cursur");
  window.addEventListener("mousemove",function(dets){
    gsap.to(cursur,{
        x:dets.clientX,
        y:dets.clientY,
        duration:.4,
        ease:Expo
    })
})

}
cursor();

var tl = gsap.timeline({
 delay:4.2,
},"ani");

tl.from("nav",{
 opacity:0,
 y:-50,
 duration:1
},"ani")

tl.to(".bound-elem",1.5,{
  y:0,
  duration:1,
  stagger:.3,
  ease:"back.out",
},"ani")



var tl2 = gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".about-page",
    start:"top 80%",
    end:"top -20%",
    scrub:3
  },
});

tl2.to(".circular",{
  top:"80%",
  duration:1,
  scrub:3
},"a")

tl2.to(".anim",1.5,{
  y:0,
  duration:1,
  stagger:.3,
  ease:"back.out",
},"a")

var tl3=gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".gallary",
    start:"-10% 80%",
    end:"top -60%",
    scrub:2
  }
})

tl3.to(".gallary-top",{
  x:"-10%",
  duration:1,
},"at")

tl3.to(".gallary-bottom",{
  x:"10%",
  duration:1,
},"at")


var tl4=gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".social-page",
    start:"top 20%",
    end:"top 50%",
    scrub:true
  }
})

tl4.to(".main",{
  backgroundColor:"#1C1D20"
},"n")


document.querySelectorAll(".social").forEach(function(ele){
  ele.addEventListener("mouseleave", function(det){
      gsap.to(ele.querySelectorAll(".social h1"),{
          color:"#999",
          fontWeight:600,
      });
      gsap.to(ele.querySelectorAll(".social img"),{
        opacity:0,
        ease:"back.out",
        duration:1,
    });
  });
  ele.addEventListener("mouseenter", function(det){
    gsap.to(ele.querySelectorAll(".social h5"),{
      color:"#fff",
  })
      gsap.to(ele.querySelectorAll(".social h1"),{
          color:"#fff",
          fontWeight:300,
      })
      gsap.to(ele.querySelectorAll(".social img"),{
        opacity:.7,
        ease:"back.out",
        duration:1,
    });
  });
});





