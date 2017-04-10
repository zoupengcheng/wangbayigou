$(function() {
	$('.navbar .angle').click(function() {
		var direction = $('i', this).hasClass('fa-angle-left') ? 'left' : 'right';

		if (direction === 'left') {
			$('.side-bar').hide()

			$('#wrapper, .navbar-inverse').css({'padding-left': '0'})

			$('i', this).removeClass('fa-angle-left').addClass('fa-angle-right')
		} else {
			$('.side-bar').show()

			$('#wrapper, .navbar-inverse').css({'padding-left': '250px'})

			$('i', this).removeClass('fa-angle-right').addClass('fa-angle-left')
		}
	});
});