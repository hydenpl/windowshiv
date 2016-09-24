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


        
        $('.button.improve').on('click',function(){
            $('#gra-drzewko').removeClass('with-result');
        });
        
        $('#gra-zabezpiecz .next').on('click',function(){
            $('#gra-drzewko').removeClass('with-result');
        });
        
        $('.my-left').on('click', function(){
            if(gd_my_val > 1){
                gd_my_val--;
                refreshVals();
            }
        });
        $('.my-right').on('click', function(){
            if(gd_my_val < 20){
                gd_my_val++;
                refreshVals();
            }
        });
        $('.their-left').on('click', function(){
            if(gd_their_val > 0){
                gd_their_val--;
                refreshVals();
            }
        });
        $('.their-right').on('click', function(){
            if(gd_their_val < 20){
                gd_their_val++;
                refreshVals();
            }
        });
    });
}
