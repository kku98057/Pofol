const tl1 = gsap.timeline();
// window.addEventListener("resize", () => {
//   if (window.innerWidth > 1201) {
//     //1200~
//     coverAni();
//   } else if (window.innerWidth >= 635 && 1200 >= window.innerWidth) {
//     //635~1200
//     // tabCoverAni();
//   } else if (window.innerWidth <= 634) {
//     //~634
//     mobCoverAni();
//   }
// });
function coverAni() {
  tl1
    .from(".cover__icon i", {
      scale: 10,
      duration: 1,
    })
    .to(".cover__icon i", {
      left: 0,
      xPercent: 100,
      duration: 0.5,
    })
    .to(
      ".ht1 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
      },
      "-=0.5"
    )
    .to(
      ".cover__icon i",
      {
        rotate: 360,
        delay: 0.5,
      },
      "-=1"
    )
    .to(".ht1 span", {
      yPercent: -200,
      opacity: 0.5,
      duration: 0.5,
      delay: 1,
    })
    .to(
      ".ht2 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 1,
      },
      "-=1.5"
    )
    .to(
      ".cover__icon i",
      {
        rotate: 360,
        delay: 0.5,
      },
      "-=1"
    )
    .to(".ht1 span", {
      yPercent: -300,
      duration: 0.5,
      delay: 0.5,
    })
    .to(
      ".ht2 span",
      {
        yPercent: -200,
        duration: 0.5,
        delay: 0.5,
        opacity: 0.5,
      },
      "-=1"
    )
    .to(
      ".ht3 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(".ht2 span", {
      yPercent: -300,
      duration: 0.5,
      delay: 0.5,
    })
    .to(
      ".ht3 span",
      {
        yPercent: -200,
        duration: 0.5,
        delay: 0.5,
        opacity: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(
      ".ht4 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(".ht3 span", {
      yPercent: -300,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    })
    .to(
      ".ht4 span",
      {
        yPercent: -200,
        duration: 0.5,
        opacity: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(
      ".ht5 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(".ht4 span", {
      yPercent: -300,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    })
    .to(
      ".ht5 span",
      {
        yPercent: -200,
        duration: 0.5,
        opacity: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(
      ".ht6 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(".ht5 span", {
      yPercent: -300,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    })
    .to(
      ".ht6 span",
      {
        yPercent: -200,
        duration: 0.5,
        opacity: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(
      ".ht7 span",
      {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      },
      "-=1"
    )
    .to(".cover", {
      yPercent: -100,
      duration: 0.4,
      delay: 1,
      overflow: "visible",
    })
    .to(".ht8 span", {
      yPercent: -100,
      duration: 0.5,
      stagger: 0.1,
    })
    .to(
      ".ht9 span",
      {
        yPercent: -100,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.2"
    )
    .to(
      ".ht1 span",
      {
        yPercent: -100,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.2"
    )
    .to(
      ".cover__next i",
      {
        top: 100,
        duration: 0.5,
      },
      "-=0.5"
    )
    .to(".cover__next i", {
      translateX: 100,
      opacity: 0,
    })
    .to(".cover", {
      yPercent: -300,
      duration: 1.5,
    })
    .to(
      ".logo",
      {
        translateY: 0,
      },
      "-=1"
    )
    .from(
      ".section1__text h3",
      {
        yPercent: -200,
        stagger: 0.2,
      },
      "-=1"
    )
    .from(
      ".nav",
      {
        xPercent: -200,
      },
      "-=0.5"
    )
    .to(".cover", {
      display: "none",
    });
}

function mobCoverAni() {
  tl1
    .from(".cover__icon i", {
      scale: 10,
      duration: 1,
    })
    .to(".cover__icon i", {
      yPercent: -200,
      duration: 0.5,
    })
    .to(
      ".cover__icon i",
      {
        rotate: 360,
        delay: 0.5,
      },
      "-=1"
    )
    .to(
      ".cover__icon i",
      {
        rotate: 360,
      },
      "-=1"
    )
    .to(
      ".cover",
      {
        yPercent: -100,
        duration: 0.4,
        delay: 1,
        overflow: "visible",
      },
      "-=1"
    )
    .to(".ht8 span", {
      yPercent: -100,
      duration: 0.5,
      stagger: 0.1,
    })
    .to(
      ".ht9 span",
      {
        yPercent: -100,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.2"
    )
    .to(".cover__next i", {
      translateX: 400,
      opacity: 0,
    })
    .to(".cover", {
      yPercent: -300,
      duration: 1.5,
    })
    .from(
      ".logo",
      {
        translateX: -200,
      },
      "-=1"
    )
    .from(
      ".section1__text h3",
      {
        yPercent: -200,
        stagger: 0.2,
      },
      "-=1"
    )
    .from(
      ".nav",
      {
        xPercent: -200,
      },
      "-=0.5"
    )
    .to(".cover", {
      display: "none",
    });
}
function tabCoverAni() {
  tl1
    .from(".cover__icon i", {
      scale: 10,
      duration: 1,
    })
    .to(".cover__icon i", {
      yPercent: -200,
      duration: 0.5,
    })
    .to(
      ".cover__icon i",
      {
        rotate: 360,
        delay: 0.5,
      },
      "-=1"
    )
    .to(
      ".cover__icon i",
      {
        rotate: 360,
      },
      "-=1"
    )
    .to(
      ".cover",
      {
        yPercent: -100,
        duration: 0.4,
        delay: 1,
        overflow: "visible",
      },
      "-=1"
    )
    .to(".ht8 span", {
      yPercent: -100,
      duration: 0.5,
      stagger: 0.1,
    })
    .to(
      ".ht9 span",
      {
        yPercent: -100,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.2"
    )
    .to(".cover__next i", {
      translateX: 400,
      opacity: 0,
    })
    .to(".cover", {
      yPercent: -300,
      duration: 1.5,
    })
    .from(
      ".logo",
      {
        xPercent: -200,
      },
      "-=1"
    )
    .from(
      ".section1__text h3",
      {
        yPercent: -200,
        stagger: 0.2,
      },
      "-=1"
    )
    .from(
      ".nav",
      {
        xPercent: -200,
      },
      "-=0.5"
    )
    .to(".cover", {
      display: "none",
    });
}
if (window.innerWidth > 1201) {
  //1200~
  coverAni();
} else if (window.innerWidth >= 635 && 1200 >= window.innerWidth) {
  //635~1200
  tabCoverAni();
} else if (window.innerWidth <= 634) {
  //~634
  mobCoverAni();
}
// footer aniamtion
