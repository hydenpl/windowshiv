//ctx_tree;
//red_dots;
//tree_w;
//tree_h;
//tree_gap;
//tree_radius;
//white_dot;
//partners

function initGraDrzewko(key) {
    
    $('#content').load('gra_drzewko.html?v='+Math.random(), function() {
        $('.header').show();
        $(".back-button").addClass("link").data("link", "main");
        $('.header-apla').addClass('invisible');
        
        refreshVals();
        
        prepareCanvas();
        
        var arr = [];
        drawTree(ctx_tree, tree_w, tree_h, tree_gap, tree_radius, red_dots, white_dot, true, arr, 0);
        
//        var line = generateLine(12,20, 2,3);
//        drawLine(ctx_tree, line, 0);
        
        $('.confirm-button').on('click', function(){
            $('#gra-drzewko').addClass('with-result');
            
            drawTree(ctx_tree, tree_w, tree_h, tree_gap, tree_radius, red_dots, white_dot, false, arr, 0);
            var partners = [];
            for(var i = 0; i < gd_my_val; i++){
                var x = parseInt(Math.random()*tree_w);
                var y = parseInt(Math.random()*tree_h);
                partners.push({"x": x, "y": y, "line": generateLine(white_dot.x,white_dot.y,x,y) ,"list":[]});
            }
            for(var p in partners){
                for(var i = 0; i < gd_their_val; i++){
                    var x = parseInt(Math.random()*tree_w);
                    var y = parseInt(Math.random()*tree_h);
                    partners[p].list.push({"x": x, "y": y, "line": generateLine(partners[p].x,partners[p].y,x,y)});
                }
            }
            for(var p in partners){
                drawDot(ctx_tree, partners[p].x, partners[p].y, tree_gap, tree_radius, '#fff');
                drawLine(ctx_tree, partners[p].line);
                for(var bf in partners[p].list){
                    drawDot(ctx_tree, partners[p].list[bf].x, partners[p].list[bf].y, tree_gap, tree_radius, '#fff');
                    drawLine(ctx_tree, partners[p].list[bf].line);
                }
                
            }
            
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


function prepareCanvas(){
    var canvas = document.getElementById('drzewko-canvas');

    var width = $(".drzewko-canvas-container").width();
    var height = $(".drzewko-canvas-container").height();

    var gap = 23;
    var radius = 3.5;
    
    var prob = 0.01;
    
    canvas.width = width;
    canvas.height = height;
    
    var ctx = canvas.getContext('2d');
    var w = parseInt(width/gap);
    var h = parseInt(height/gap);
    var initial_red = parseInt(w/2) + 1;
    var red = new Array({"x": initial_red, "y": parseInt(1.2 * initial_red)});
    var white = {"x": initial_red-2, "y": parseInt(1.6 * initial_red)};
    
    var count = prob * w * h;
    
    for(var i = 0; i< count; i++){
        red.push({"x": parseInt(Math.random()*w) ,"y": parseInt(Math.random()*h)})
    }
    ctx_tree = ctx;
    red_dots = red;
    tree_w = w;
    tree_h = h;
    tree_gap = gap;
    tree_radius = radius;
    white_dot = white;
}

function drawTree(ctx, w, h, gap, radius, red, white, msg){
    ctx.clearRect(0, 0, w*gap, h*gap);
    for(var x = 0; x < w; x++){
        for(var y = 0; y < h; y++){
            drawDot(ctx, x, y, gap, radius, '#555');
        }
    }
    for(i in red){
        drawDot(ctx, red[i].x, red[i].y, gap, radius, '#e5007d');
    }
    
    drawDot(ctx, white.x, white.y, gap, radius, '#eee');
    if(msg){
        drawMessages(ctx, red[0].x, red[0].y, white.x, white.y, gap);
    }
}


function generateLine(x, y, x2, y2){
    var line = [{"x":x, "y":y}];
    var temp_x = x;
    var temp_y = y;
    var first = true;
    while(temp_x !== x2 && temp_y !== y2){
        if(first){
            if(Math.abs(x2-x) > Math.abs(y2-y)){
                if(x2 - x > 0){
                    temp_x = temp_x+0.5;
                }else{
                    temp_x = temp_x-0.5;
                }
                if( Math.random() > 0.1 ){
                    if(y2 - y > 0){
                        temp_y = temp_y+0.5;
                    }else{
                        temp_y = temp_y-0.5;
                    }
                }
            }else{
                if(y2 - y > 0){
                    temp_y = temp_y+0.5;
                }else{
                    temp_y = temp_y-0.5;
                }
                if( Math.random() > 0.2 ){
                    if(x2 - x > 0){
                        temp_x = temp_x+0.5;
                    }else{
                        temp_x = temp_x-0.5;
                    }
                }
            }
            first = false;
        }else{
            var max = Math.min(Math.abs(x2-temp_x), Math.abs(y2-temp_y));
            if(max < 1){
                if(Math.abs(x2-temp_x)<1){
                    temp_y += (Math.abs(y2-temp_y)-0.5) * direction(y2-temp_y);
                }else{
                    temp_x += (Math.abs(x2-temp_x)-0.5) * direction(x2-temp_x);
                }
                line.push({"x":temp_x, "y":temp_y});
                break;
            }
            var dist = 1 + parseInt(Math.random()*(max -1));
            if( Math.random() > 0.4 ){
                // w róg
                temp_x += dist * direction(x2-temp_x);
                temp_y += dist * direction(y2-temp_y);
            }else{
                // bok
                var max = Math.min(Math.abs(x2-temp_x), Math.abs(y2-temp_y));
                var dist = parseInt(Math.random()*(max));
                if(x2 - temp_x > y2 - temp_y){
                    temp_x += dist * direction(x2-temp_x);
                }else{
                    temp_y += dist * direction(y2-temp_y);
                }
                
            }
        }
        line.push({"x":temp_x, "y":temp_y});
    }
    line.push({"x":x2, "y":y2});
    return line;
}

function direction(x){
    if(x>0)
        return 1;
    else
        return -1;
}

function drawLine(ctx, line, progress){
    
    ctx.beginPath();
    ctx.moveTo(tree_gap/2 + line[0].x * tree_gap, tree_gap/2 + line[0].y * tree_gap);
    for(var p in line){
        ctx.lineTo(tree_gap/2 + line[p].x * tree_gap, tree_gap/2 + line[p].y * tree_gap);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
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