import "./index.less";
import "./media.less";

$(".product-mobile-list a").on("click", function(){
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle();
})
$(".product-mobile-list .product-mobile-item > a").on("click", function(){
    return false;
})
$(".product-mobile-list .sub-porduct-item > a").on("click", function(){
    return false;
})
$(".mobile-product-cate .cate-menu").on("click", function(){
    $(".product-wrapper").addClass("active");
    $(".cate-menu").css({
        zIndex: "0"
    })
})
$(".product-mask").on("click", function(){
    $(".product-wrapper").removeClass("active");
    $(".cate-menu").css({
        zIndex: "15"
    })
})

