import "./index.less";
import "./media.less";
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
// 首页使用的js

const bannerSwiper = new Swiper(".banner-container", {
    loop: true,
    autoplay:{
        delay: 6000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

$(".menu-header").on("click",function(){
    $(".mobile-nav").toggleClass("active");
})