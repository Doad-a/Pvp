function loadJsonData(){
    $.getJSON("json/hero.json",function(data){
        $("#hero_int>ul").empty()//清空内容 
        $.each(data.hero_all,function(i,item){
        $("#hero_int>ul").append("<li><a href=''><img src='"+item.img+"' alt='"+item.name+"'>"+item.name+"</a></li>")
        })
    })
}
$(function(){
    // $("#btn").click(loadJsonData)
    //加载时直接出数据的方法
    loadJsonData()
})