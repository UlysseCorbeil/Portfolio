(function ($) {

    'use strict';

    $('.js-hover-project').mouseenter(function () {

        // find image
        var img = $(this).find('.imageProjet_list');
        var name = $(this).find('.name');

        // find src
        var data_src = img.data('src');

        $(this).mousemove(function (e) {

            if (!!img.length) {

                $(this).find('div > span').css('color', 'black');

                img.attr('src', data_src);

                img.show();

                $('.imageProjet_list').offset({
                    top: e.pageY + img.outerHeight() / 10,
                    left: e.pageX + (img.outerWidth() / 6)
                });


                $(this).on('click', function () {
                    if ($(this).data('is-ext-link') === true) {
                        window.open($(this).data('href'), '_blank');
                    } else {
                        window.location = $(this).data('href');
                    }
                });

            }

        }).mouseleave(function () {
            $(this).find('div > span').css('color', '#5f6472');
            img.hide();

        });
    });

})(jQuery);