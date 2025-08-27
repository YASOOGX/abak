// start basic
// // //////load
let load = document.querySelector(".load");
window.onload = function () {
  load.style.display = "none";
  document.body.style.overflowY = "auto";
};
// head.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };
// window.onscroll = function () {
//   if (scrollY >= 650) {
//     header.classList.add("header-fixed");
//   } else {

//     header.classList.remove("header-fixed");
//   }
// };
// end basic

// start signin
$(".autoplay")
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl:true
  }).slickAnimation();

let signin = document.querySelector(" .sign-in-btn");
let login = document.querySelector(" .log-in-btn");
let page_sign = document.querySelector(".box .sign");
let page_log = document.querySelector(".box .login");
let sign = document.querySelector(".btn-sign");
let email = document.querySelector(".email input");
let password = document.querySelector(".password input");
let bar = document.querySelector(".bars");
let links = document.querySelector("header .bottom-head .links");
let closes = document.querySelector("header .bottom-head .closes");
let links_phone = document.querySelector("header .bottom-head .links-phone");
let verify_done = document.querySelector(".verify");
let  correct = document.querySelector(".verify .box-verify .correct");
let  vector = document.querySelector(".verify .box-verify .vector");
let  verify_done_p = document.querySelector(".verify .box-verify .done");
let verify_email_p = document.querySelector(".verify .box-verify .email-wrong");
let verify_password_p= document.querySelector(".verify .box-verify .pas-wrong ");
let verify_error = document.querySelector(".verify .box-verify button a");
let verify_con = document.querySelector(".verify .box-verify .continue");
let verify_re = document.querySelector(".verify .box-verify .relod");

// function stoperrror(){
//   return true;
// }
// window.onerror =stoperrror;
signin.onclick = () => {
  // page_sign.style.display="none";
  page_sign.classList.add("left-0");
  page_sign.classList.remove("left-100");
  page_log.classList.add("right-100");
  signin.classList.add("bg-btn");
  login.classList.remove("bg-btn");
};
login.onclick = () => {
  // page_sign.style.display="none";
  page_log.classList.add("right-0");
  page_log.classList.remove("right-100");
  page_sign.classList.add("left-100");
  login.classList.add("bg-btn");
  signin.classList.remove("bg-btn");
};
sign.onclick = () => {
  if (email.value == "yousef" && password.value == "12345678") {
    // window.location.replace("site.html");
    verify_done.classList.add("flex")
    vector.classList.add("none")
    verify_email_p.classList.add("none")
    verify_password_p.classList.add("none")
    document.body.style.overflowY = "hidden";
    verify_con.classList.add("block")
    verify_re.classList.add("none")
  }
  else if (email.value != "yousef" && password.value == "12345678") {
    verify_done.classList.add("flex")
    correct.classList.add("none")
    verify_done_p.classList.add("none")
    vector.classList.add("flex")
    verify_email_p.classList.add("block")
    verify_password_p.classList.add("none")
    verify_con.classList.add("none")
    verify_re.classList.add("block")
    document.body.style.overflowY = "hidden";
  }
 else  if (email.value == "yousef" && password.value != "12345678") {
    verify_done.classList.add("flex")
    correct.classList.add("none")
    vector.classList.add("flex")
    verify_done_p.classList.add("none")
    verify_email_p.classList.add("none")
    verify_password_p.classList.add("bock")
    verify_con.classList.add("none")
    verify_re.classList.add("block")
    document.body.style.overflowY = "hidden";
  }
 else  if (email.value != "yousef" && password.value != "12345678") {
    verify_done.classList.add("flex")
    correct.classList.add("none")
    vector.classList.add("flex")
    verify_done_p.classList.add("none")
    verify_email_p.classList.add("block")
    verify_password_p.classList.add("bock")
    verify_con.classList.add("none")
    verify_re.classList.add("block")
    document.body.style.overflowY = "hidden";
  }
};
//  else {
    // window.location.replace( 'https://www.google.com/')
//   }
// ///// bars
bar.onclick = () => {
  console.log("done")
    setTimeout(() => {
        links.classList.add("left-0");
        links.classList.remove("left--100");
    }, 1);
  links_phone.classList.add("block")
  links_phone.classList.remove("none")
};
closes.onclick = () => {
    setTimeout(() => {
        links_phone.classList.remove("block")
        links_phone.classList.add("none")
    }, 1000);
    links.classList.add("left--100");
};

// window.open("site.html");
// window.open( 'https://www.google.com/')
// window.location.href="site.html";
// end sign in

// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });


// // ////autoplay 2
// (function($){
//     "use strict";

//     if (screen.width <= 350) {
//       $(".autoplay2").slick({
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2300,
//         rtl:true
//       });
//     }
//      else if (screen.width <= 768) {
//       $(".autoplay2").slick({
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2300,
//         rtl:true
//       });
//     }
//     else if (screen.width <= 991) {
//       $(".autoplay2").slick({
//         dots: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2300,
//         rtl:true
//       });
//     }
//     else if (screen.width >= 991) {
//       $(".autoplay2").slick({
//         dots: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2300,
//         rtl:true
//       });
//     }

// })(jQuery);

// // end slider
// ////////////////////////
// // start animation scroll
// AOS.init();
// // end animation scroll
// //////////////////////////////
// // // start auto type
// document.addEventListener("DOMContentLoaded", function() {
//   const exampleText = ['عميد الكليه'];
//   const exampleTyping = new AutoTyping('.auto', exampleText, {
//       typeSpeed: 50,
//       deleteSpeed: 50,
//       waitBeforeDelete: 2000,
//       waitBetweenWords: 500,
//   });
//   exampleTyping.start()
// });
// // ///////////////////////////////

// // start counter
//      // count in who us slide

// // end count in who us slide

// // end counter
