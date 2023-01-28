import "./index.less";
import "./media.less";

$(".return-top").on("click", function(){
    $('body,html').animate({scrollTop:0},1200)
})