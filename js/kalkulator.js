//ctx_tree;
//red_dots;
//tree_w;
//tree_h;
//tree_gap;
//tree_radius;
//white_dot;
//partners

var prevProtectionId;
var currentCzynnosc = 'czynn-przytul';

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


        function isInArray(key, array){
            return $.inArray(key, array) > -1;
        }

        function getProtectionCombo(){
            var actProts = [];
            $("#kalk-zabezpieczenia .protection.selected:not(.disabled)").each(function(){
                actProts.push( $(this).attr('id'));
            });
            if(actProts.length === 0){
                return "none"
            }
            if(actProts.length === 1){
                if(isInArray("protect-none", actProts)){
                    return "none";
                }else if(isInArray("protect-prez-zwykla", actProts)){
                    return "p_zwykla"
                }else if(isInArray("protect-prez-wzmac", actProts)){
                    return "p_wzmacniana"
                }else if(isInArray("protect-prez-smak", actProts)){
                    return "p_smakowa"
                }else if(isInArray("protect-chust", actProts)){
                    return "chusteczka"
                }else if(isInArray("protect-prez-damska", actProts)){
                    return "p_damska"
                }else if(isInArray("protect-lubryk", actProts)){
                    return "lubrykant"
                }else if(isInArray("protect-wazel", actProts)) {
                    return "wazelina"
                }
            }else{
                if(isInArray("protect-lubryk", actProts)){
                    if(isInArray("protect-prez-zwykla", actProts)){
                        return "p_zwykla_lubrykant"
                    }else if(isInArray("protect-prez-wzmac", actProts)){
                        return "p_wzmacniana_lubrykant"
                    }else if(isInArray("protect-prez-smak", actProts)){
                        return "p_smakowa_lubrykant"
                    }else if(isInArray("protect-chust", actProts)){
                        return "chusteczka"
                    }else if(isInArray("protect-prez-damska", actProts)){
                        return "p_damska_lubrykant"
                    }else if(isInArray("protect-wazel", actProts)){
                        return "lubrykant"
                    }
                }else if(isInArray("protect-wazel", actProts)){
                    return "p_dowolna_wazelina"
                }
                return "dwie_gumki"
            }

        }

        function setRiskScore(){
            $('#kalkulator-results').removeClass();
            console.log("Czynnosc: "+currentCzynnosc+", protection: "+getProtectionCombo() + ", risk: " + czynnosci_calc[currentCzynnosc].risk[getProtectionCombo()].n);
            $('#kalkulator-results').addClass('result-'+czynnosci_calc[currentCzynnosc].risk[getProtectionCombo()].n)

        }

        function selectProtection( key ){
            return function(){
                var el = $('#kalk-zabezpieczenia .'+key);
                var thisId = el.attr('id');
                if( el.hasClass('disabled')){
                  return;
                }
                $('#kalk-zabezpieczenia .protect-none').removeClass('selected');
                if( key === 'protect-none'){
                    el.addClass('selected');
                    prevProtectionId = undefined;
                    $('#kalk-zabezpieczenia .protection').each(function(){
                        if($(this).attr('id') !== thisId){
                            $(this).removeClass('selected');
                        }
                    });
                    setRiskScore();
                    return;
                }
                if( ! el.hasClass('selected') && prevProtectionId!==thisId ){
                    $('#kalk-zabezpieczenia .protection').each(function(){
                        if($(this).attr('id') !== prevProtectionId){
                            $(this).removeClass('selected');
                        }
                    });
                    prevProtectionId = thisId;
                }
                el.toggleClass('selected');
                if( $('#kalk-zabezpieczenia .protection.selected').length === 0){
                    $('#kalk-zabezpieczenia .protect-none').addClass('selected');
                }
                setRiskScore();
            }
        }


        var key;
        for(key in protect_calc){
            $('#kalk-zabezpieczenia').append(
                '<div id="'+key+'" class="protection '+key+'"><div class="check"><div class="check-outer"></div><div class="check-inner"></div></div><div class="name"></div><canvas class="protect-canvas" id="'+key+'_canvas"></canvas><canvas class="protect-canvas-selected" id="'+key+'_selected"></canvas></div>'
                            );
            $('#kalk-zabezpieczenia .'+key+' .name').text(protect_calc[key].label);
            var size = $('.protection').first().outerHeight();

            drawProtection(key+'_canvas', key, size, '#fff');
            drawProtection(key+'_selected', key, size, '#e5007d');

            $('#kalk-zabezpieczenia .'+key).on('click', selectProtection(key));
        }
        $('#kalk-zabezpieczenia .protect-none').addClass('selected');


        function disableProtections( key ){
            return function(){

                currentCzynnosc = key

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
                setRiskScore();
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



        drawInfoKalkulator('kalk-info-button-canvas', $("#kalk-info-button").outerHeight() );



    });
}
