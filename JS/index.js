$(document).ready(function(){
	
				//顶部小插曲
				$(".chengzhang_bg").mouseover(function(){
					$(this).children("a").css("color","red")
				})
				$(".chengzhang_bg").mouseout(function(){
					$(this).children("a").css("color","#000000")
				})
				$(".header-li2").mouseenter(function(){
					$("#header_image").stop().fadeIn();
				})
				$(".header-li2").mouseleave(function(){
					$("#header_image").stop().hide();
				})
				$("#pai_h3").mouseenter(function(){
					$("#paihangbang").fadeIn("800");
				})
				$("#pai_h3").mouseleave(function(){
					$("#paihangbang").hide();
				})
				//导航条
				$("#nav").mouseenter(function(){
					$(this).children("#nav-2").stop().slideDown(300);
				})
				//鼠标离开
				$("#nav").mouseleave(function(){
					$(this).children("#nav-2").stop().slideUp(300);
				})
				//创建轮播函数
				function show(){
					var x = -3020;
					var px = $("#left-top>ul").css("marginLeft");		
					// alert(px)
					var n = parseInt(px);
					n = n-604;
					n = Math.round(n);
					i = n/-604;
					i = Math.round(i);
					n = i*-604;	
					if(n==x){
						n=0;
						i=0;
					}
					// alert(n);
					$("#left-top>ul").css({
						"marginLeft":n+"px",
						"transitionDuration": "800ms"
					})
					$("#left-bottom>span:eq("+i+")").css({"backgroundColor":"rgba(255,255,255,0.15)","color":"#f3c258"})
					$("#left-bottom>span:eq("+i+")").siblings().css({"backgroundColor":"rgba(0,0,0,0)","color":"#b1b2be"})
					// Time = setTimeout(show,4000);
				}
				var Time = setInterval(show,4000);
				//清除定时器
				function cleanTime(){
				    clearInterval(Time);
				}
				//自动轮播图部分
				$("#left-bottom>span").mouseover(function(){
					cleanTime()
					var i = $(this).index()
					// alert(i)
					var s = (i)*-604;
					show();
					$("#left-top>ul").css("marginLeft",s)
					$(this).css({"backgroundColor":"rgba(255,255,255,0.15)","color":"#f3c258"})
					$(this).siblings().css({"backgroundColor":"rgba(0,0,0,0)","color":"#b1b2be"})
					Time = setInterval(show,4000);
				})
				$("#left-bottom>span").mouseout(function(){
					cleanTime()
					Time = setInterval(show,4000);
					// $(this).css({"backgroundColor":"rgba(0,0,0,0)","color":"#b1b2be"})
				})
				
				
				
				// 轮播新闻连接部分
				function centerShow(){
					var x = -1625;
					var px = $("#center-bottom").css("marginLeft");					
					var n = parseInt(px);
					n = n-325;
					n = Math.round(n);
					i = n/-325;
					i = Math.round(i);
					n = i*-325
					if(n==x){
						n=0;
						i=0;
					}
					// alert(n);
					$("#center-bottom").css({
						"marginLeft":n+"px",
						"transitionDuration": "800ms"
					})
					$("#center-ul>ul>li:eq("+i+")").children("a").css({"color":"#f3c258"})
					$("#center-ul>ul>li:eq("+i+")").siblings().children("a").css({"color":"#b1b2be"})
					$("#center-ul>ul>li:eq("+i+")").addClass("border-center")
					$("#center-ul>ul>li:eq("+i+")").siblings().removeClass("border-center")
					
				}
				//轮播新闻鼠标触发
				$("#center-ul>ul>li").mouseover(function(){
					cleanTime1()
					var i = $(this).index()
					// alert(i)
					var s = (i)*-325;
					centerShow();
					$("#center-bottom").css("marginLeft",s)
					$(this).children("a").css({"color":"#f3c258"})
					$(this).siblings().children("a").css({"color":"#b1b2be"})
					$(this).addClass("border-center")
					$(this).siblings().removeClass("border-center")
					Time1 = setInterval(centerShow,6000);
				})
				$("#center-ul>ul>li").mouseout(function(){
					cleanTime1()
					Time1 = setInterval(centerShow,6000);
					// $(this).css({"backgroundColor":"rgba(0,0,0,0)","color":"#b1b2be"})
				})
				var Time1 = setInterval(centerShow,6000);
				//清除定时器2
				function cleanTime1(){
				    clearInterval(Time1);
				}
				//轮播新闻超链接加下划线
				$("#center-bottom>ul>li").mouseover(function(){
					$(this).children("a").css("text-decoration","underline")
					$(this).siblings().children("a").css("text-decoration","none")
				})
				$("#center-bottom>ul>li").mouseout(function(){
					$(this).children("a").css("text-decoration","none")
				})
				//鼠标悬停图片放大效果
				$("#bottom>a>img").mouseover(function(){
					$(this).css({"transform":"scale(1.1)"});
				})
				$("#bottom>a>img").mouseout(function(){
					$(this).css({"transform":"scale(1)"});
				})
				
				//左边定位
				//微博
				$(".r_weibo").mouseover(function(){
					$(this).css("background-position-y","-240px")
				})
				$(".r_weibo").mouseout(function(){
					$(this).css("background-position-y","-120px")
				})
				//公众号
				$(".r_gzh").mouseenter(function(){
					$(this).css("background-position-y","-200px")
					$(this).children("div").stop(true,true).fadeIn("slow");
				})
				$(".r_gzh").mouseleave(function(){
					$(this).css("background-position-y","-160px")
					$(this).children("div").css("display","none");
				})
				//身份卡
				$(".r_sfz").mouseenter(function(){
					$(this).css("background-position-y","-460px")
					$(this).children("div").stop(true,true).fadeIn("slow");
				})
				$(".r_sfz").mouseleave(function(){
					$(this).css("background-position-y","-420px")
					$(this).children("div").css("display","none");
				})
				
				//排行榜部分
				$("#pai_left>ul>li").mouseenter(function(){
					// $(this).css("height","90px");
					// $(this).children("p").css("display","none")
					// $(this).children(".pai_show").css("display","block");
					// $(this).siblings().css("height","16px");
					// $(this).siblings().children("p").css("display","block")
					// $(this).siblings().children(".pai_show").css("display","none");
					$(this).paihangbang()
				})
				$("#pai_left>ul>li:lt(3)").children(".pai_span").css("backgroundColor","red")
				// var h = $(".pai_bottom_a").text();
				// alert(h);
				$("#pai_content>ul>li").mouseenter(function(){
					$(this).css("height","90px");
					$(this).children("p").css("display","none")
					$(this).children(".pai_show").css("display","block");
					$(this).siblings().css("height","16px");
					$(this).siblings().children("p").css("display","block")
					$(this).siblings().children(".pai_show").css("display","none");
				})
				$("#pai_content>ul>li:lt(3)").children(".pai_span").css("backgroundColor","red")
				
				
				$("#pai_right_top>ul>li").mouseenter(function(){
					$(this).css("height","90px");
					$(this).children("p").css("display","none")
					$(this).children(".pai_show").css("display","block");
					$(this).siblings().css("height","16px");
					$(this).siblings().children("p").css("display","block")
					$(this).siblings().children(".pai_show").css("display","none");
					$(this).parent("ul").siblings().children("li").css("height","16px");
					$(this).parent("ul").siblings().children("li").children(".pai_show").css("display","none");
					$(this).parent("ul").siblings().children("li").children("p").css("display","block")
				})
				$(".pai_div_xiazai").mouseenter(function(){
					$(this).children(".pai_div_xiazai_span").css("display","none");
					$(this).children(".pai_xia-a").css("display","block");
				})
				$(".pai_div_xiazai").mouseleave(function(){
					$(this).children(".pai_div_xiazai_span").css("display","block");
					$(this).children(".pai_xia-a").css("display","none");
				})
				$(".color_paiming>li:lt(3)").children(".pai_span").css("backgroundColor","red")
				$(".color_paiming1>li:lt(3)").children(".pai_span").css("backgroundColor","red")
				
				
				// 内容中心
				$("#main_lanmu-top>a").mouseenter(function(){
					$(this).css({"color":"#000000","border-bottom":"3px #f3c258 solid"})
					$(this).siblings().css({"color":"#999","border-bottom": "3px solid #f5f5f5"})
					
					var i = $(this).index()
					// alert(i)
					if(i<5){
						$("#lanmu_show>div:eq("+i+")").stop().fadeIn()
						$("#lanmu_show>div:eq("+i+")").siblings().css("display","none")
						$("#main_lanmu_content>div:eq("+i+")").stop().fadeIn()
						$("#main_lanmu_content>div:eq("+i+")").siblings().css("display","none")
					}
					$("#main_lanmu_content>div:eq("+i+")").stop().fadeIn()
					$("#main_lanmu_content>div:eq("+i+")").siblings().css("display","none")
				})
				
				
				//选择英雄
				$("#xuanzeyingxiong").mouseenter(function(){
					$("#lanmu_content3_content").fadeIn()
				})
				$("#lanmu_content3_content").mouseleave(function(){
					$("#lanmu_content3_content").css("display","none")
				})
				
				//栏目切换
				$("#lanmu_cont1>a").mouseenter(function(){
					$(this).css({"border-color":"#f3c258","background":"#f3c258","color":"#fff"})
					$(this).siblings().css({"border-color":"#e5e5e5","background":"#f5f5f5","color":"#333"})
					
					var i = $(this).index()
					// alert(i)
					$(".lanmu_content_main1>ul:eq("+i+")").stop().fadeIn()
					$(".lanmu_content_main1>ul:eq("+i+")").siblings().css("display","none")
				})
				$("#lanmu_cont2>a").mouseenter(function(){
					$(this).css({"border-color":"#f3c258","background":"#f3c258","color":"#fff"})
					$(this).siblings().css({"border-color":"#e5e5e5","background":"#f5f5f5","color":"#333"})
					
					var i = $(this).index()
					$(".lanmu_content_main2>ul:eq("+i+")").stop().fadeIn()
					$(".lanmu_content_main2>ul:eq("+i+")").siblings().css("display","none")
				})
				$("#lanmu_cont3>a").mouseenter(function(){
					$(this).addClass(".yingxiong")
					$(this).siblings().removeClass(".yingxiong")
					
					// var i = $(this).index()
					// $(".lanmu_content_main1>ul:eq("+i+")").fadeIn()
					// $(".lanmu_content_main1>ul:eq("+i+")").siblings().css("display","none")
				})
				
				//栏目模块
				$(".lanmu_ul>li").mouseenter(function(){
					$(this).children(".lanmu_ul_a").children(".lanmu_ul_a_top").children(".cover").fadeIn()
					// $(".cover").fadeIn()
				})
				$(".lanmu_ul_li").mouseleave(function(){
					$(".cover").css("display","none")
				})
				$("#lanmu_content3_ul>ul>li").mouseenter(function(){
					$(this).css({"backgroundColor":"#f3c258","color":"#ffffff"})
					$(this).siblings().css({"backgroundColor":"#f5f5f5","color":"#000000"})
					
					var x = $(this).index()
					$("#lanmu_content3_div>div:eq("+x+")").stop().fadeIn()
					$("#lanmu_content3_div>div:eq("+x+")").siblings().css("display","none")
				})
				//第八个边框为0
				$(".hero_div>a:nth-child(8n)").css("margin-right","0px")
				//第四个边框为0
				$(".lanmu_content_main1>ul>li:nth-child(4n)").css("margin-right","0px")
				$(".lanmu_content_main2>ul>li:nth-child(4n)").css("margin-right","0px")
				
				//英雄/皮肤
				//内容切换
				$("#main_lanmu-top1>a").mouseenter(function(){
					$(this).css({"color":"#000000","border-bottom":"3px #f3c258 solid"})
					$(this).siblings().css({"color":"#999","border-bottom": "3px solid #f5f5f5"})
					
					var a = $(this).index()
					var A = 0;
					var X =100/3;
					var Y =0;
					if(a==0){
						A=0;
						Y = A*X;	
					}
					if(a==2){
						A=1;
						Y = A*X;
					}
					if(a==4){
						A=2;
						Y = A*X;
					}
					$("#main_right_show").css("transform","translate(-"+Y+"%, 0px)")
					
				})
				$(".pifu_bottom>ul>li").mouseenter(function(){
					$(this).children("a").children(".hero_cover").fadeIn("fast")
				})
				$(".pifu_bottom>ul>li").mouseleave(function(){
					$(this).children("a").children(".hero_cover").css("display","none")
				})
				$(".pifu_bottom>ul>li:nth-child(4n)").css("margin-right","0px")
				
				$(".show_pifu>ul>li").mouseenter(function(){
					$(this).children("a").children(".hero_cover").fadeIn("fast")
				})
				$(".show_pifu>ul>li").mouseleave(function(){
					$(this).children("a").children(".hero_cover").css("display","none")
				})
				$(".show_pifu>ul>li:nth-child(4n)").css("margin-right","0px")
				//赛事中心
				$("#left_nav>a").mouseenter(function(){
					$(this).css({"color":"#000000","border-bottom":"3px #f3c258 solid"})
					$(this).siblings().css({"color":"#999","border-bottom": "3px solid #f5f5f5"})
					
					var s = $(this).index()
					var h = s/2;
					// alert(h)
					$("#match_show>div:eq("+h+")").fadeIn()
					$("#match_show>div:eq("+h+")").siblings().css("display","none")
				})
				$(".lanmu_ul>li:nth-child(4n)").css("margin-right","0px")
			})
			