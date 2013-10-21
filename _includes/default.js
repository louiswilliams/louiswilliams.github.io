$(document).ready(function() {
	$(".navitem").mouseenter(function() {
		var width = $(this).width();
		if (!isCurrentPage($(this).parent("a").attr("href"))) {
			slideOut(this,width,35,250,25);
			$(this).mouseleave(function(){
				slideIn(this,width,250);
			});
		}
	});

	$(".navitem").each(function(){
		url = $(this).parent("a").attr("href");
		if (isCurrentPage(url)){
			slideOut(this,100,35,250,25);
		}
	});

	$("#title").mouseenter(function(){
		var width = $(this).width()
		slideOut(this,width,150,500,0);
		// $(this).animate({"width": 755,},500);
		$(this).mouseleave(function(){
			slideIn(this,width,500);
		});
	});

	$(".contact-tile").mouseenter(function(){
		var width = $(this).width()
		slideOut(this,width,30,250,0);
		// $(this).animate({"width": 755,},500);
		$(this).mouseleave(function(){
			slideIn(this,width,250);
		});
	});
});

function slideOut(navLi,w,amt,t,jump){
	$(navLi).stop().animate({
		"border-left-width": 0,
		"width": w + amt,
		"margin-left": jump,
	},t);
}
function slideIn(navLi,w,t){
	$(navLi).stop().animate({
		"border-left-width": 25,
		"margin-left": 0,
		"width": w
	},t);
}
function isCurrentPage(uri){
	if (uri == document.location.pathname) {
		return true;
	}
	else{
		return false;
	}
}