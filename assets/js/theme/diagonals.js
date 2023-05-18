// diagonals copyright by dtbaker.

jQuery(function ($) {

    var height_diff = 60;
    function do_diagonals(){
        $('.pastel-diagonal-clips').remove();
        if($(window).width() > 900 && !$('body').hasClass('elementor-editor-active')) {
            var clip_count = 1;
            $('.pastel-diagonal-left').each(function () {
                // calculate size of object. generate mask. apply mask.
                // might not work in firefox as SVG needs to be rendered first.
                // so fall back to hardcoded one anyway.
                var current_height = $(this).outerHeight();
                if (current_height > height_diff + 100) {
                    // apply diagonal to this one.
                    var percent = Math.round(( height_diff / current_height ) * 100) / 100;
                    $('#wrapper').prepend('<svg class="clip-diagonal pastel-diagonal-clips" style="width:0;height:0;"> <defs> <clipPath id="clip-diagonal-' + clip_count + '" clipPathUnits="objectBoundingBox"> <polygon points="0 ' + percent + ', 1 0, 1 1, 0 1"/> </clipPath> </defs> </svg>');
                    percent = percent * 100;
                    var coordsString = 'polygon(0 ' + percent + '%, 100% 0, 100% 100%, 0 100%)';
                    var maskString = "url('#clip-diagonal-" + clip_count + "')";
                    $(this).attr('style', '-webkit-clip-path: ' + coordsString + '; clip-path: ' + coordsString + '; -webkit-clip-path: ' + maskString + '; clip-path: ' + maskString + '; ');
                    clip_count++;
                }
            });
            $('.pastel-diagonal-right').each(function () {
                // calculate size of object. generate mask. apply mask.
                // might not work in firefox as SVG needs to be rendered first.
                // so fall back to hardcoded one anyway.
                var current_height = $(this).outerHeight();
                if (current_height > height_diff + 100) {
                    // apply diagonal to this one.
                    var percent = Math.round(( height_diff / current_height ) * 100) / 100;
                    $('#wrapper').prepend('<svg class="clip-diagonal pastel-diagonal-clips" style="width:0;height:0;"> <defs> <clipPath id="clip-diagonal-' + clip_count + '" clipPathUnits="objectBoundingBox"> <polygon points="0 0, 1 ' + percent + ', 1 1, 0 1"/> </clipPath> </defs> </svg>');
                    percent = percent * 100;
                    var coordsString = 'polygon(0 0, 100% ' + percent + '%, 100% 100%, 0 100%)';
                    var maskString = "url('#clip-diagonal-" + clip_count + "')";
                    $(this).attr('style', '-webkit-clip-path: ' + coordsString + '; clip-path: ' + coordsString + '; -webkit-clip-path: ' + maskString + '; clip-path: ' + maskString + '; ');
                    clip_count++;
                }
            });
        }else{
            $('.pastel-diagonal-left').attr('style','');
            $('.pastel-diagonal-right').attr('style','');
        }
    }

    do_diagonals();
    $( window ).load(do_diagonals);
    $( window ).resize(do_diagonals);
});
