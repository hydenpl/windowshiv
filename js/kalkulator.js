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
                $('#kalk-title').text('ZABEZPIECZENIE');
            }
        });

        $('#kalk-left').on('click', function() {
            if ($(this).hasClass('active')) {
                $('#kalkulator-content').removeClass('shifted');
                $('#kalk-right').addClass('active');
                $(this).removeClass('active');
                $('#kalk-title').text('CZYNNOŚĆ');
            }
        });
        var key;
        for(key in protect_calc){
            $('#kalk-zabezpieczenia').append(
                '<div class="protection '+key+'"><div class="check"><div class="check-outer"></div><div class="check-inner"></div></div><div class="name"></div><canvas class="protect-canvas" id="'+key+'"></canvas><canvas class="protect-canvas-selected" id="'+key+'_selected"></canvas></div>'
                            );
            $('#kalk-zabezpieczenia .'+key+' .name').text(protect_calc[key].label);
            var size = $('.protection').first().outerHeight();

            drawProtection(key, key, size, '#fff');
            drawProtection(key+'_selected', key, size, '#e5007d');

            $('#kalk-zabezpieczenia .'+key).on('click', function(){
                console.log('blah');
               if( ! $(this).hasClass('disabled')){
                   $(this).toggleClass('selected')
               }
            });
        }


        function disableProtections( key ){
            return function(){

                $('.czynnosc').each(function(){
                    $('#kalk-czynnosci .czynnosc').removeClass('selected');
                });
                $('#kalk-czynnosci .'+key).addClass('selected');
                $("#kalk-zabezpieczenia .protection").each(function(){
                    $(this).addClass("disabled");
                });
                console.log("disabling: "+czynnosci_calc[key].label);
                var i;
                var protections = czynnosci_calc[key].available;
                for(i in protections){
                    $('#kalk-zabezpieczenia .protect-'+protections[i]).removeClass("disabled");
                }
            }
        }

        for(key in czynnosci_calc){
            $('#kalk-czynnosci').append(
                '<div class="czynnosc '+key+'"><div class="radio"><div class="radio-outer"></div><div class="radio-inner"></div></div><div class="name"></div><canvas class="czynnosc-canvas" id="'+key+'"></canvas><canvas class="czynnosc-canvas-selected" id="'+key+'_selected"></canvas></div>'
            );
            $('#kalk-czynnosci .'+key+' .name').text(czynnosci_calc[key].label);
            var size = $('.czynnosc').first().outerHeight();

            drawCzynnosc(key, key, size, '#fff');
            drawCzynnosc(key+'_selected', key, size, '#e5007d');

            $('#kalk-czynnosci .'+key).on('click', disableProtections(key));
        }




    });
}
