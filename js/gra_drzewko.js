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
    var w = parseInt(width/gap);
    var h = parseInt(height/gap);
    var initial_red = parseInt(w/2) + 1;
    var red = new Array({"x": initial_red, "y": parseInt(1.2 * initial_red)});
    var white = {"x": initial_red-2, "y": parseInt(1.6 * initial_red)};
    
    for(var x = 0; x < w; x++){
        for(var y = 0; y < h; y++){
            drawDot(ctx, x, y, gap, radius, '#555');
        }
    }
    for(i in red){
        drawDot(ctx, red[i].x, red[i].y, gap, radius, '#e5007d');
    }
    
    drawDot(ctx, white.x, white.y, gap, radius, '#eee');
    
    drawMessages(ctx, red[0].x, red[0].y, white.x, white.y, gap);
    
}

function drawDot(ctx, x, y, gap, radius, color){
    ctx.beginPath();
    ctx.arc(gap/2 + gap * x, gap/2 + gap * y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawMessages(ctx, redx, redy, whitex, whitey, gap ){
    var imp = gap/3;
    var margin = gap/2;
    var height = redx * gap / 2;
    var width = redx* gap / 1.5;
    
    ctx.beginPath();
    ctx.moveTo(margin+ redx * gap + imp, margin+ redy * gap - imp);
    ctx.lineTo(margin+ redx * gap + imp, margin+ redy * gap - height);
    ctx.lineTo(margin+ redx * gap + imp + width, margin+ redy * gap - height);
    ctx.lineTo(margin+ redx * gap + imp + width, margin+ redy * gap - gap);
    ctx.lineTo(margin+ redx * gap + gap, margin+ redy * gap - gap);
    ctx.closePath();
    ctx.fillStyle='#e5007d';
    ctx.fill();
    
    ctx.font = "Bold "+gap*5/6 + "px OpenSans";
    ctx.textAlign = "center";
    ctx.fillStyle='#fff';
    ctx.fillText("OSOBA", margin+ redx * gap + imp + width /2, margin+ redy * gap - height/2 - gap*3/4);    
    ctx.fillText("ZAKAŻONA", margin+ redx * gap + imp + width /2, margin+ redy * gap - height/2 + gap*1/2);
    
    width = redx* gap / 2;
    
    ctx.beginPath();
    ctx.moveTo(margin+ whitex * gap - imp, margin+ whitey * gap - imp);
    ctx.lineTo(margin+ whitex * gap - imp, margin+ whitey * gap - height);
    ctx.lineTo(margin+ whitex * gap - imp - width, margin+ whitey * gap - height);
    ctx.lineTo(margin+ whitex * gap - imp - width, margin+ whitey * gap - gap);
    ctx.lineTo(margin+ whitex * gap - gap, margin+ whitey * gap - gap);
    ctx.closePath();
    ctx.fillStyle='#fff';
    ctx.fill();
    
    ctx.fillStyle='#000';
    ctx.fillText("TY", margin+ whitex * gap - imp - width /2, margin+ whitey * gap - height/2);
    
}