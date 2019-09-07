(function ($) {

    'use strict';

    var site = $('#site');

    var sels = {
        ref: '.js-hover-project',
        target: '.imageProjet_list',
        state: 'data',
        href: 'href',
        src: 'src',
        extLink: 'is-ext-link'
    };

    var onMouseMove = function (e) {

        // find image
        var img = $(this).find(sels.target);

        // find src
        var data_src = img.attr(sels.state + sels.src);

        $(this).mousemove(function (e) {

            if (!!img.length) {

                img.attr('src', data_src);

                img.show();

                $(sels.target).offset({
                    top: e.pageY + img.outerHeight() / 10,
                    left: e.pageX + (img.outerWidth() / 6)
                });


                $(this).on('click', function () {
                    if ($(this).attr(sels.extLink) === true) {
                        window.open($(this).attr(sels.state + sels.href), '_blank');
                    } else {
                        window.location = $(this).attr(sels.state + sels.href)
                    }
                });

            }

        }).mouseleave(function () {
            img.hide();

        });
    }

    var init = function () {
        site.on('mouseenter', sels.ref, onMouseMove);
    };

    init();

})(jQuery);
