// document = html, window = 브라우저 창, 화면
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
// lodash->throttle(함수, 시간) = 이벤트 수를 시간에 따라 적절히 조절
window.addEventListener(
  "scroll",
  _.throttle(function () {
    // 배지 숨기기
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션(객체 데이터))
      gsap.to(badgeEl, 0.6, {
        opacity: 0, // 투명도가 0이라 보이지 않는거지 실제 객체는 화면에 남아있는 상태
        display: "none",
      });
      // 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to("#to-top", 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션(객체 데이터))
  gsap.to(fadeEl, 1, {
    // fadeEls의 모든 요소가 자신의 (인덱스번호+1)*0.7초를 기다렸다가 등장함
    delay: 0.7 * (index + 1),
    opacity: 1,
  });
});

// Swiper(선택자, 옵셥(객체데이터))
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  //direction: 'horizonal', <-기본값
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".awards .swiper-prev", // 이전 버튼 선택자
    nextEl: ".awards .swiper-next", // 다음 버튼 선택자
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  console.log("clicked");
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 드러냄
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션(객체 데이터))
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1 = 무한...
    yoyo: true, // 저장된 애니메이션과 반대로 한번 움직이고 종료
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15); // 1초, 15px
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 설명 다시듣기
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show") // 요소, 토글할 클래스명
    .addTo(new ScrollMagic.Controller());
});
