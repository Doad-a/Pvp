$(function(){
    $("#FreeHeros>li").mouseenter(function () { 
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    // $("#FreeHeros>li").mouseleave(function () { 
    //     $(this).removeClass("active");
    // });
    $("#select_top>li").click(function(){
        $(this).addClass("radio");
        $(this).siblings().removeClass("radio");
    })
    $("#select_zhiye>li").click(function(){
        $(this).addClass("radio");
        $(this).siblings().removeClass("radio");
    })
    $("#hero_serch>input").focus(function (e) { 
        e.preventDefault();
        $(this).val("");
    });
    $("#hero_serch>input").blur(function (e) { 
        e.preventDefault();
        if($(this).val()==""){
            $(this).val("输入想要搜索的英雄名");
        }
    });
})