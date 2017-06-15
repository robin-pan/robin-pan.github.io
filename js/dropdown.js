$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
  $('.hamburger').toggleClass('change');
});

$('.menuitem').on('click', function(e) {
  $('.menu').toggleClass('slide-down');
  $('.hamburger').toggleClass('change');
});

$(window).resize(function() {
	if ($(window).width() < 605) {
		$('.menu').removeClass('slide-down');
		$('.hamburger').removeClass('change');
	}
});