module.exports = (function ($) {

	'use strict';

	var site = $('#site');

	var sels = {
		element: '.progressbar'
	};

	var progressBar = function () {

		var t = $(this);

		var posTop = $(window).scrollTop();
		var winPosHeight = $(window).height();
		var docPosHeight = $(document).height();
		var trackLength = docPosHeight - winPosHeight;
		var scrollPercent = Math.floor(((posTop / trackLength) * 100));

		var position = scrollPercent;

		t.closest(sels.element).attr('value', position);

	};

	var init = function () {
		site.on('scroll', progressBar);
	}

})(jQuery);