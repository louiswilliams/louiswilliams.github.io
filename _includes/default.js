$(document).ready(function() {
	color = "#{{page.color}}"
	$(".navitem").mouseenter(function() {
		if (!isCurrentPage($(this).parent("a").attr("href"))) {
			slideOut(this,100,35,250,25);
			$(this).mouseleave(function(){
				slideIn(this,100,1000);
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
		slideOut(this,620,135,500,0);
		// $(this).animate({"width": 755,},500);
		$(this).mouseleave(function(){
			slideIn(this,620,1000);
		});
	});

	$(".contact-tile").mouseenter(function(){
		slideOut(this,300,30,250,10);
		// $(this).animate({"width": 755,},500);
		$(this).mouseleave(function(){
			slideIn(this,300,250);
		});
	});

	$(".project-tile").mouseenter(function(){
		slideOut(this,400,50,250,10);
		// $(this).animate({"width": 755,},500);
		$(this).mouseleave(function(){
			slideIn(this,400,250);
		});
	});
});

function slideOut(navLi,w,amt,t,jump){
	$(navLi).stop().animate({
		"width": w + amt,
		"margin-left": jump,
	},t);
}
function slideIn(navLi,w,t){
	$(navLi).stop().animate({
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