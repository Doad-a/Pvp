$(function(){
    $(".cont_bottom>ul>li").mouseenter(function () { 
        $(this).children("a").children(".Hero_name").css({"display":"none"});
        // $(this).siblings().remveClass("nav_sel")
        $(this).children("a").children(".hover_mask").css({"display":"block"});
        $(this).css({"border": "1px solid #c3aa68"});
        $(this).children("a").children("img").css({"transform":"scale(1.1)"});
    });
    $(".cont_bottom>ul>li").mouseleave(function () { 
        $(this).children("a").children(".Hero_name").css({"display":"block"})
        $(this).children("a").children(".hover_mask").css({"display":"none"});
        $(this).css({"border": "none"});
        $(this).children("a").children("img").css({"transform":"scale(1.0)"});
    });
})