$(function(){
	$("#item_int>ul>li").mouseenter(function(){
		$("#item_wuqi").css({"display": "block"})
		})
	$("#item_int>ul>li").mousemove(function(e){
		var divX = e.pageX+50;
		var divY = e.pageY;
		$("#item_wuqi").css({
			"top": e.pageY,
			"left": divX,
		})
	})
	$("#item_int>ul>li").mouseleave(function(){
		$("#item_wuqi").css({"display": "none"})
	})
})