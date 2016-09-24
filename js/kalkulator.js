//ctx_tree;
//red_dots;
//tree_w;
//tree_h;
//tree_gap;
//tree_radius;
//white_dot;
//partners

function initKalkulator(key) {
    
    $('#content').load('kalkulator.html?v='+Math.random(), function() {
        $('.header').show();
        $(".back-button").addClass("link").data("link", "main");
        $('.header-apla').addClass('invisible');

        $('#kalk-right').on('click', function(){
            if ($(this).hasClass('active')) {
                $('#kalkulator-content').addClass('shifted');
                $('#kalk-left').addClass('active');
                $(this).removeClass('active');
                $('#kalk-title').text('CZYNNOŚĆ');
            }
        });

        $('#kalk-left').on('click', function() {
            if ($(this).hasClass('active')) {
                $('#kalkulator-content').removeClass('shifted');
                $('#kalk-right').addClass('active');
                $(this).removeClass('active');
                $('#kalk-title').text('ZABEZPIECZENIE');
            }
        });
        var key;
        for(key in content_calc){
            $('#kalk-zabezpieczenia').append(
                '<div class="protection '+key+'"><div class="check"><div class="check-outer"></div><div class="check-inner"></div></div><div class="name"></div><canvas class="protect-canvas" id="'+key+'"></canvas><canvas class="protect-canvas-selected" id="'+key+'_selected"></canvas></div>'
                            );
            $('#kalk-zabezpieczenia .'+key+' .name').text(content_calc[key].label);
            var size = $('.protection').first().outerHeight();
            console.log(size);
            drawProtection(key, key, size, '#fff');
            drawProtection(key+'_selected', key, size, '#e5007d');

            $('#kalk-zabezpieczenia .'+key).on('click', function(){
                console.log('blah');
               if( ! $(this).hasClass('disabled')){
                   $(this).toggleClass('selected')
               }
            });
        }




    });
}
