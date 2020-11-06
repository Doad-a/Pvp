$.fn.paihangbang = function(){
	$(this).css("height","90px");
	$(this).children("p").css("display","none")
	$(this).children(".pai_show").css("display","block");
	$(this).siblings().css("height","16px");
	$(this).siblings().children("p").css("display","block")
	$(this).siblings().children(".pai_show").css("display","none");
}