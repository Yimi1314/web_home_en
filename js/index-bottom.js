$(function() {
 	/*$(".return_top").click(function(){
 		$("html,body").animate({scrollTop:0},1000);
 	});*/
 	$(window).resize(function(){
 		init_size();
 	})
 	$(".five_start").attr("src","./img/2-12.jpg");
 	$(".yin").attr("src","./img/2-13.jpg");
 	$(".cup_img").attr("src","./img/2-11.jpg");
 	$(".img_1").attr("src","./img/2-06.jpg");
 	$(".img_2").attr("src","./img/2-07.jpg");
 	$(".img_3").attr("src","./img/2-14.jpg");
});

function init_size(){
	var w = $(window).width();
	if(w <= 768){
		$(".star_text1,.star_text2").css({"text-align":"center","font-size":"12px"});
		$(".start_user").css({"font-size":"12px"});
		$(".cup_container").css({"margin":"0"});
	}else{
		$(".cup_container").css({"margin":"auto 15%"});
	}
}

