$(document).ready(function() {
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling");
		}
	})
	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
});

$(document).on('click','a',function(evt){
	var w=$(window).width();
	var target= $(this).attr("href");
	if(w >= 961){
		$('html,body').animate({
	    	scrollTop: $(target).offset().top
		},800);
	}
});
