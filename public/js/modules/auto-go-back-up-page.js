(function ($) {

	'use strict';

	var site = $('#site');

	var sels = {
		ref: '.auto-go-back-up-page'
	}

	var goBackUp = function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	};

	var init = function () {
		site.on('click', sels.ref, goBackUp);
	};

	module.export = { init }
})(jQuery);