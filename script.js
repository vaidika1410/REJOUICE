function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()

function cursorEffect() {
  var page1Content = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page1Animation() {
  gsap.from(".page1-content .rejouice span", {
    y: -10,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
      trigger: ".page1-content .rejouice span",
      scroller: ".main",
    },
  });
}
page1Animation();

function page2Animation(){
    gsap.from(".page2top .elements", {
        y:20,
        // duration:2,
        opacity:0,
        scrollTrigger:{
            trigger: ".page2top .elements",
            scroller: ".main",
            // markers:true,
            start:"top 80%",
            scrub:2,
            end:"top 79%"
        }
    })
    
    gsap.from(".page2top .line", {
        x:-1800,
        scrollTrigger:{
            trigger: ".page2top .line",
            scroller: ".main",
            // markers:true,
            start:"top 80%",
            scrub:3,
            end:"top 77%"
        }
    })
    
    gsap.from(".page2bottom .lines h2", {
        y:80,
        opacity:0,
        // stagger:0.3,
        scrollTrigger:{
            trigger:".page2bottom .lines h2",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            scrub:2,
            end:"top 77%"
        }
    })
}
page2Animation()

function page3Animation(){
  gsap.from(".page3 .page3-lower .lines h2", {
    y:200,
    opacity:0,
    scrollTrigger:{
      trigger:".page3 .page3-lower .lines h2",
      scroller:".main",
      scrub:2,
      // markers:true,
      start:"top 120%",
      end:"top 100%"
    }
  })
}
page3Animation()

function page5Animation(){
  gsap.from(".page5top .elements h3", {
    y:15,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger: ".page5top .elements h3",
        scroller: ".main",
        // markers:true,
        start:"top 85%",
        scrub:2,
        end:"top 83%"
  }
})

gsap.from(".page5top .line", {
  x:-1800,
  scrollTrigger:{
      trigger: ".page5top .line",
      scroller: ".main",
      // markers:true,
      start:"top 80%",
      scrub:3,
      end:"top 77%"
  }
})

gsap.from(".page5bottom .lines h2", {
  y:50,
  // stagger:0.2,
  opacity:0,
  scrollTrigger:{
      trigger:".page5bottom .lines h2",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      scrub:3,
      end:"top 79%"
  }
})
}
page5Animation()

function page6Cursor(){
  var page6Content = document.querySelector(".page6");
  var cursor = document.querySelector(".page6 .cursor6");

  page6Content.addEventListener("mousemove", function(dets){
    gsap.to(".page6 .cursor6", {
      // x:dets.x-700,
      // y:dets.y-310.5

      x:dets.x,
      y:dets.y
    })
  })
  page6Content.addEventListener("mouseenter", function(){
    gsap.to(".page6 .cursor6", {
      scale:1,
      opacity:1
    })
  })
  page6Content.addEventListener("mouseleave", function(){
    gsap.to(".page6 .cursor6", {
      scale:0,
      opacity:0
    })
  })
}
page6Cursor()

function page7Animation(){
  gsap.from(".page7top .elements .lines h3", {
    y:20,
    // duration:2,
    opacity:0,
    scrollTrigger:{
        trigger: ".page7top .elements .lines h3",
        scroller: ".main",
        // markers:true,
        start:"top 85%",
        scrub:3,
        end:"top 80%"
  }
})

gsap.from(".page7top .line", {
  x:-1800,
  scrollTrigger:{
      trigger: ".page7top .line",
      scroller: ".main",
      // markers:true,
      start:"top 80%",
      scrub:3,
      end:"top 77%"
  }
})

gsap.from(".page7bottom .lines h2", {
  y:50,
  opacity:0,
  scrollTrigger:{
      trigger:".page7bottom .lines h2",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      scrub:3,
      end:"top 79%"
  }
})
}
page7Animation()

function page8Animation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
}
page8Animation()

function page9Animation(){
  gsap.from(".page9 .page9-lower h2", {
    y:200,
    rotate: 10,
    opacity:0,
    scrollTrigger:{
      trigger:".page9 .page9-lower h2",
      scroller:".main",
      scrub:2,
      // markers:true,
      start:"top 120%",
      end:"top 1150%"
    }
  })
}
page9Animation()

function page10Scroller(){
  gsap.to(".page10 .scrollingdiv", {
    y:250,
    opacity:1,
    duration:3,
    scrollTrigger:{
      trigger:".page10 .scrollingdiv",
      scroller:".main",
      scrub:2,
      // markers:true,
      start:"top 80%",
    }
  })
}
page10Scroller()

function page10bottomScroller(){
  gsap.from(".page10bottom-upper", {
    opacity:0.5,
    scrollTrigger:{
      trigger:".page10bottom-upper",
      scroller:".main",
      scrub:2,
      start:"top 90%"
    }
  })
}
page10bottomScroller()

function page10bottomScrollerRejouice(){
  gsap.from(".page10bottom-lower .rejouice h1 span", {
    y:-85,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
      trigger:".page10bottom-lower .rejouice h1 span",
      scroller:".main",
      // markers:true,
      start:"top 30%",
      end:"top 28%",
      scrub:2
    }
  })
}
page10bottomScrollerRejouice()



function loaderAnimation(){
  var tl = gsap.timeline()
  tl.from(".main .loader h2",{
    x:80,
    delay:1,
    stagger:0.1,
    opacity:0,
    duration:1,
  })
  tl.to(".main .loader h2",{
    x:-10,
    stagger:0.2,
    opacity:0,
    duration:1,
    delay:-.5
  })
  tl.to(".loader",{
    y:-710,
    display:"none"
  })
}
loaderAnimation()
