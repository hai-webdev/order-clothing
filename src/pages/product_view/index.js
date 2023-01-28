// 引入公共css
import "../common/reset.css";
import "./index.less";
import "./media.less";
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/aside";
// swiper
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
const productSwiper = new Swiper(".swiper-product", {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el: ".swiper-pagination",
        type: "fraction"
    }
})
// 弹窗部分
$("button.inquiry").on("click", () => {
    $(".alert-form").fadeIn();
})
$(".alert-form .form-wrapper .close").on("click", () => {
    $(".alert-form").fadeOut();
})
$(".mask-bg").on("click", () => {
    $(".alert-form").fadeOut();
})
