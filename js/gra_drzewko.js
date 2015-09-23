function initGraDrzewko(key) {
    
    $('#content').load('gra_drzewko.html?v='+Math.random(), function() {
        $('.header').show();
        $(".back-button").addClass("link").data("link", "main");
        $('.header-apla').addClass('invisible');
        
        refreshVals();
        
        przygotujCanvas();
        
        $('.confirm-button').on('click', function(){
            $('#gra-drzewko').addClass('with-result');
        });
        
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

function refreshVals(){
    $('.my-val').text(gd_my_val);
    $('.their-val').text(gd_their_val);
}

function przygotujCanvas(){
    var canvas = document.getElementById('drzewko-canvas');

    var width = $(".drzewko-canvas-container").width();
    var height = $(".drzewko-canvas-container").height();

    var gap = 23;
    var radius = 3.5;
    
    canvas.width = width;
    canvas.height = height;
    
    var ctx = canvas.getContext('2d');
    
    for(var x = gap/2; x < width; x+=gap){
        for(var y = gap/2; y < height; y+=gap){
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#555';
            ctx.stroke();
        }
    }
}