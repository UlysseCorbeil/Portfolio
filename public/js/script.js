(function ($) {

    'use strict';

    $.getJSON('js/js.json', function (data) {
        for (let i = 0; i < data.modules.length; i++) {
            let script = document.createElement("script");
            script.setAttribute('type', 'text/javascript');
            script.setAttribute("src", data.modules[i]);
            document.getElementsByTagName("head")[0].appendChild(script);
        };
    });

})(jQuery);