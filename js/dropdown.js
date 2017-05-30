$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
});

$('.menuitem').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('slide-down');
});

$('.menuitem').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('slide-down');
});

$(window).resize(function() {
	if ($(window).width() > 605) {
		$('.menu').removeClass('slide-down');
	}
});