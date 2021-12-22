// window.addEventListener("beforeunload", () => {
//   window.scrollTo(0, 0);
// });

// 커서-

const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");

const cursor1Rect = cursor1.getBoundingClientRect();
const cursor1Height = cursor1Rect.height / 2;
const cursor1Width = cursor1Rect.width / 2;

const cursor2Rect = cursor2.getBoundingClientRect();
const cursor2Height = cursor2Rect.height / 2;
const cursor2Width = cursor2Rect.width / 2;

window.addEventListener("mousemove", (e) => {
  const positionX = e.clientX;
  const positionY = e.clientY;

  cursor1.style.transform = `translate(${positionX - cursor1Width}px,${
    positionY - cursor1Height
  }px)`;
  cursor2.style.transform = `translate(${positionX - cursor2Width}px,${
    positionY - cursor2Height
  }px)`;
});

// 커서호버

const aTag = document.querySelectorAll("a");
const spanTag = document.querySelectorAll(".nav li");

function cursorHover() {
  aTag.forEach((a) => {
    a.addEventListener("mouseenter", () => {
      cursor1.classList.add("active");
      cursor2.classList.add("active");
    });
  });
  aTag.forEach((a) => {
    a.addEventListener("mouseleave", () => {
      cursor1.classList.remove("active");
      cursor2.classList.remove("active");
    });
  });

  spanTag.forEach((b) => {
    b.addEventListener("mouseenter", () => {
      cursor1.classList.add("active");
      cursor2.classList.add("active");
    });
  });
  spanTag.forEach((b) => {
    b.addEventListener("mouseleave", () => {
      cursor1.classList.remove("active");
      cursor2.classList.remove("active");
    });
  });
}
cursorHover();

// 카드이미지
const card = document.querySelector(".section5__img");
const cardRect = card.getBoundingClientRect();
const cardHalfHeight = cardRect.height / 2;

// 마우스 무브
function mouseMonve() {
  card.addEventListener("mousemove", (e) => {
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    card.style.transform = `rotateX(${
      -(offsetY - cardHalfHeight) / 50
    }deg) rotateY(${(offsetX - cardHalfHeight) / 50}deg)`;
  });
}
// 마우스 아웃
function mouseLeave() {
  card.addEventListener("mouseleave", () => {
    card.style.trnasform = `rotate(0)`;
  });
}

function cardEvent() {
  mouseMonve();
  mouseLeave();
}
cardEvent();

// footer
const section6 = document.querySelector(".section6");
const footer = document.querySelector("footer");
const footerRect = footer.getBoundingClientRect();
const body = document.querySelector("body");
const bodyRect = body.getBoundingClientRect();
const bodyHeight = bodyRect.height;

const tl4 = gsap.timeline();

//footer 타임라인
// pc
function footerTimeline() {
  tl4
    .to(".left__ul-list", {
      translateX: 0,
      stagger: 0.3,
      opacity: 1,
    })
    .to(
      ".footer__right-img img",
      {
        translateX: 0,
        opacity: 1,
      },
      "-=1"
    )
    .to(
      ".footer__right-text-text",
      {
        translateX: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "-=0.5"
    );
}
//mob
function mobFooterTimeline() {
  tl4
    .to(".left__ul-list", {
      xPercent: 110,
      stagger: 0.3,
      opacity: 1,
    })
    .to(
      ".footer__right-img img",
      {
        opacity: 1,
      },
      "-=1"
    )
    .to(
      ".footer__right-text-text",
      {
        opacity: 1,
        stagger: 0.2,
      },
      "-=0.5"
    );
}
// cover생략
const cover = document.querySelector(".cover");
const coverBtn = document.querySelector(".close__btn");

coverBtn.addEventListener("click", () => {
  cover.classList.toggle("active");
  tl1.seek();
});
// footer 나타나기
function footerEvent() {
  window.addEventListener("wheel", () => {
    if (bodyHeight < window.scrollY + 20) {
      footer.classList.add("active");
      footerTimeline();
    } else {
      footer.classList.remove("active");
    }
  });
}
function mobFooterEvent() {
  window.addEventListener("wheel", () => {
    if (bodyHeight < window.scrollY + 40) {
      footer.classList.add("active");
      mobFooterTimeline();
    } else {
      footer.classList.remove("active");
    }
  });
}
// footer 이미지 체인지
const footerImg = document.querySelector(".footer__right-img img");
let imgNub = 1;

function imgChange() {
  if (imgNub < 6) {
    footerImg.setAttribute("src", `img/slide0${imgNub}.jpg`);
    imgNub++;
    console.log("1");
  } else {
    imgNub = 1;
  }
}
function imgChanger() {
  setInterval(imgChange, 1000);
}
// 이미지 바꾸기

// 스크롤트리거

gsap.registerPlugin(ScrollTrigger);

gsap.to("header", {
  scrollTrigger: {
    trigger: ".section2",
    start: "0 50%",
    toggleActions: "play reset play reset",
  },
  backgroundColor: "var(--font-black-color)",
  borderRight: "1px solid white",
});
gsap.to(".logo, .nav li", {
  scrollTrigger: {
    trigger: ".section2",
    start: "0 50%",
    toggleActions: "play reset play reset",
  },
  color: "var(--font-white-color)",
});
gsap.from(".ht10 span ,.ht11 span, .ht12 span", {
  scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play reset play reset",
  },

  yPercent: 100,
  stagger: 0.1,
});

//구름
const tl2 = gsap.timeline();

gsap.to(".section3__cloud", {
  scrollTrigger: {
    trigger: ".section3",
    scrub: 3,
    pin: true,
  },
  transformX: 10,
});

tl2
  .to(".section3__airplaine", {
    scrollTrigger: {
      trigger: ".section3",
      scrub: 3,
      pin: true,
    },
    yPercent: -300,
  })
  .to(
    ".section3__airplaine",
    {
      scrollTrigger: {
        trigger: ".section3",
        pin: true,
        scrub: 1,
      },
      rotate: 0,
    },
    "-=0.5"
  )
  .to(
    ".section3__airplaine",
    {
      scrollTrigger: {
        trigger: ".section3",
        pin: true,
        scrub: 5,
      },
      right: 0,
    },
    5
  );

tl2
  .to(".section3__text", {
    scrollTrigger: {
      trigger: ".section3",
      pin: true,
      scrub: 1,
    },

    top: 0,
  })
  .to(".section3__text", {
    scrollTrigger: {
      trigger: ".section3",
      pin: true,
      scrub: 1,
    },
    opacity: 0,
  });

//   slick

$(document).ready(function () {
  $(".section4__slideContainer").slick({
    dots: true,
    dotsClass: "slide__dots",
    arrows: false,
    autoplay: true,
    pauseOnHover: true,

    customPaging: function (slide, i) {
      let slideMenu = "";

      if (i == 0) {
        slideMenu = "MU";
      }
      if (i == 1) {
        slideMenu = "JODOR";
      }
      if (i == 2) {
        slideMenu = "posco";
      }
      if (i == 3) {
        slideMenu = "Binggrae";
      }
      if (i == 4) {
        slideMenu = "pik-a-fla";
      }
      return `<button class="slideMenu slideMenu${i}"><span>${slideMenu}</span></button>`;
    },
  });
  $(".slideMenu0").addClass("active");
  $(".section4__slideContainer").on(
    "beforeChange",
    function (event, slide, currentSlide, nextSlide) {
      $(".slideMenu").removeClass("active");
      $(".slideMenu").eq(nextSlide).addClass("active");
    }
  );
});
// 메뉴이동
const leftUl = document.querySelector(".left__ul");
const nav = document.querySelector(".nav");

const move = function move(selector) {
  const scrollSelector = document.querySelector(selector);
  scrollSelector.scrollIntoView({ behavior: "smooth" });
  footer.classList.remove("active");
};

leftUl.addEventListener("click", (event) => {
  const leftULTarget = event.target;
  const leftData = leftULTarget.dataset.link;
  console.log(leftULTarget);
  move(leftData);
});

function navSelector(selector) {
  const Selector = document.querySelector(selector);
  Selector.scrollIntoView({ behavior: "smooth" });
}
nav.addEventListener("click", (e) => {
  const navTarget = e.target;
  const navTargetData = navTarget.dataset.link;

  navSelector(navTargetData);
});

// 반응형
if (window.innerWidth > 1201) {
  imgChanger();
  footerEvent();
  //1200~
} else if (window.innerWidth >= 635 && 1200 >= window.innerWidth) {
  //635~1200
  footerEvent();
  imgChanger();
} else if (window.innerWidth <= 634) {
  footerEvent();
  imgChanger;
  //~634
}
