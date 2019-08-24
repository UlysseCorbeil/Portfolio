(function ($) {

	'use strict';

	var site = $('#site');

	var sels = {
		element: '.js-element-hover'
	};

	var moveElement = function (e) {
		var pageX = e.clientX;
		var pageY = e.clientY;

		site.find(sels.element).css('transform', 'translateX(-' + (pageX / 50) + '%) translateY(-' + (pageY / 50) + '%)');
	};

	site.on('mousemove', moveElement);

})(jQuery);