$(document).ready(function(){ 
	$('a[href^="#"]').on('click',function(e) { 
		e.preventDefault(); 
		
		var target = this.hash; 
		var $target = $(target); // scroll and dont show hash 
		$('html, body').animate({ 
			'scrollTop': $target.offset().top 
		}, 500,'swing'); 
	}); 
});