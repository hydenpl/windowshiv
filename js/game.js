function initGame(key) {
    
    $('#content').load('game.html?v='+Math.random(), function() {
        $('.header').show();
        $('h2.header-title').text("(i)grasz?");
        $(".back-button").addClass("link").data("link", "main")
//        drawInfo('back-canvas');
//        $(".back-button").addClass("link").data("link", "instructions")
        
        var game = $('#game');
        var height = $('body').height() - $('.header').height() - $('#game-footer').height();
        game.width(height / 1.5);
        
        if(gameFinished){
            counter = 0;
            animationDuration = 30;
            animationState = animationDuration;
            loopAnimationState = 0;
            loopAnimationDuration = 30;
            drugHistory = [];
            gameFinished = false;

            for(param in parameters){
                parameters[param].val = 50;
                parameters[param].diff = 0;
            }
            
            $('#game-history').show();
            $('#game-buttons').show();
            $('#game-finished').hide();

        }
        
        $("#game-msg").on('click', function(){
            $(this).toggleClass('hidden');
        });
        
        
        drawHistory(game.width());
        drawParameters($('#game').width());
        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(function(){ 
            loopAnimationState = (loopAnimationState + 1)%loopAnimationDuration; 
            drawParameters($('#game').width());
            drawCounter();
            if(animationState > 0 && animationState < animationDuration){
                animationState++;
            }
        }, 30);
        
        if(buttons === undefined){
            buttons = {};
            buttons.first = randomDrug();
            buttons.second = randomDrug();
            buttons.third = randomDrug();
            buttons.waiting = randomDrug();
        }
        
        drawButtons(game.width());
        
        $('.button').on('click', function(){
            var btn = $(this).data('button');
            console.log("button clicked: "+btn);
            if(btn != 'waiting' && animationState == animationDuration){
                counter++;
                var drugTaken = buttons[btn];
                var finished = changeParamsByDrug(buttons[btn]);
                buttons[btn] = buttons.waiting;
                buttons.waiting = randomDrug();
                drawButtons(game.width());
                addToHistory(game.width(), drugTaken)
                animationState = 1;
                if(finished){
                    gameFinished = true;
                    $('#game-history').hide();
                    $('#game-buttons').hide();
                    
                    $('.finished-msg').text(finished);
                    $('#game-finished').show();
                    $('.finished-button').on("click", function(){
                        initGame();
                    });
                }
            }
        });
        
                
    });
}

function addToHistory(size, drug){
    if(drugHistory.length>8){
        drugHistory.shift();
    }
    for(element in drugHistory){
        if(drugHistory[element].effect > 0.1){
            drugHistory[element].effect -= 0.5 / drugs[drugHistory[element].drug].duration;
        }
    }
    drugHistory.push({"drug": drug,
                      "effect": 1});
    drawHistory(size);
}

function drawHistory(size){
    var canvasId = 'game-history';
    var canvas = document.getElementById(canvasId);
    
    var width = $('#'+canvasId).width();
    canvas.width  = width;
    canvas.height = width / 9 * 1.15470053838;
    $('#'+canvasId).height(canvas.height+"px");
    
    var size = canvas.height;
    
    var ctx = canvas.getContext('2d');    
    var counter = 9 - drugHistory.length;
    for(var drug in drugHistory){
        drawHistoryDrug(ctx, size, counter++, drugHistory[drug].drug, 0.2 + 0.8*drugHistory[drug].effect);
    }
}

function changeParamsByDrug(drug){
    var finished = false;
    var drug_params = getDrugParams(drug);
    for(param in drugs[drug].params){
        parameters[param].diff = drug_params[param];
        parameters[param].val += drug_params[param];
        if(parameters[param].val<0){
            finished = finishedMsgs[param][0];
        }else if(parameters[param].val > 100){
            finished = finishedMsgs[param][100];
        }
    }
    return finished;
}

function getDrugParams(drug){
    var historyEffects = {};
    for(element in drugHistory){
        if(drugHistory[element].effect > 0.1){
            if(!(element in historyEffects)){
                historyEffects[element] = drugHistory[element].effect;
            }else{
                historyEffects[element] += drugHistory[element].effect;
            }
        }
    }
    
    var ret = {};
    for(param in parameters){
        var calc = drugs[drug].params[param];
        if((typeof calc === 'string' || calc instanceof String) && calc.substr(0, 5) == "reset"){
            var resetVal = parseInt(calc.substr(6, 10));
            if(parameters[param] > 50){
                ret[param] = -1 * Math.min( parameters[param].val - 50, resetVal)
            }else{
                ret[param] = Math.min( 50 - parameters[param].val, resetVal)
            }
        }else{
            ret[param] = drugs[drug].params[param];
        }
    }
    var msg = "Blabla!";
    if(msg){
        $('#game-msg').text(msg).removeClass('hidden');
    }
    return ret;
}

function randomDrug(){
    var drug = '';
    var arr = [];
    for(drug in drugs){
        for(var i = 0; i< drugs[drug].ratio; i++){
            arr.push(drug);
        }
    }
    do{
        drug = arr[ arr.length * Math.random() << 0];
    }
    while(buttons.first == drug || buttons.second == drug || buttons.third == drug || buttons.waiting == drug);
    return drug;
}

function drawButtons(size) {
    for(button in buttons){
        var drug = buttons[button];
        if(button=='waiting'){
            drawDrugButton('button-'+button, size/4.5, drug, true);
        }else{
            drawDrugButton('button-'+button, size/4.5, drug, false);
        }
//        $('#button-'+button+'-text').text(buttons[button].title);
        $('#button-'+button+'-text').text(drugs[drug].title);
    }
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return r + "," + g + "," + b;
}

function drawParameters(size) {
    if(size == null){
        return;
    }
    var canvas = document.getElementById('game-parameters');
    var gap = 0.5;
    var height = 9;
    canvas.width = size;
    canvas.height = size * (Object.keys(parameters).length * height / 100 + (Object.keys(parameters).length - 1) * gap / 100 );
    
    var ctx = canvas.getContext('2d');
    
    ctx.save();
        
    var scale = size/100;
    var offset = 10 * scale * loopAnimationState / loopAnimationDuration;
    var animationProgress = animationState / animationDuration;
    
    var background_color = "#3e1435";
    var bar_color = "#f49b00";
    var upColor = "#d88900";
    var upColorBg = "#f49b00";
    var downColor = "#b20002";
    var downColorBg = "#ff0000";
    var font_color = "#fff";
    
    var patternUp = ctx.createPattern(createPattern(scale, upColor, upColorBg, offset), "repeat");
    var patternDown = ctx.createPattern(createPattern(scale, downColor, downColorBg, offset), "repeat");
        
    var i = 0;
    for (parKey in parameters) {
    
        //background
        drawBar(ctx, i, scale, height, gap, background_color, 0, 100);
        
        if(parameters[parKey].diff > 0){
            drawBar(ctx, i, scale, height, gap, bar_color, 0, parameters[parKey].val - parameters[parKey].diff);
            drawBar(ctx, i, scale, height, gap, patternUp, parameters[parKey].val - parameters[parKey].diff, parameters[parKey].diff * animationProgress);
        }else{
            drawBar(ctx, i, scale, height, gap, bar_color, 0, parameters[parKey].val - parameters[parKey].diff * (1 - animationProgress));
            drawBar(ctx, i, scale, height, gap, patternDown, parameters[parKey].val - parameters[parKey].diff * (1 - animationProgress), - parameters[parKey].diff * animationProgress);
        }
        
        //name
        ctx.beginPath();
        ctx.fillStyle = font_color;
        var fontSize = 4 * scale;
        ctx.font = fontSize + "px OpenSans";
        ctx.textAlign = "right";
        ctx.fillText(parameters[parKey].name, 95 * scale, ( i * ( height + gap) + 6 )  * scale);
        
        ctx.closePath();
        
        i++;
    }

    ctx.restore();
};

function drawBar(ctx, i, scale, height, gap, fillStyle, offset, value){
    ctx.beginPath();
    ctx.rect(offset * scale, i * ( height + gap) * scale, value * scale, height * scale);
    ctx.fillStyle = fillStyle; //bar_color;
    ctx.fill();
    ctx.closePath();
}

function drawCounter(){
    
    var canvasId = 'game-counter';
    var width = $('#'+canvasId).width();
    if(width == null){
        return;
    }
    
    var canvas = document.getElementById(canvasId);
    
    canvas.width  = width;
    canvas.height = $('#'+canvasId).height();
    
    var x = width / 2;
    var y = canvas.height / 2;
    
    var radius = 0.1 * width;
    var color = '#ffffff';
    var PI = 3.14;
    
    var ctx = canvas.getContext('2d');
    ctx.save();
    
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    
    ctx.beginPath();
    
    var text = counter;
    
    if(animationState > 0 && animationState < animationDuration){
        if(animationState < animationDuration / 2){
            var progress = animationState / animationDuration * 2;
            ctx.arc(x, y, radius, PI * 1.5 , PI * 1.5 + 2 * PI * progress, true);
            text = text - 1;
        }else{
            var progress = (animationState - animationDuration / 2) / animationDuration * 2;
            ctx.arc(x, y, radius, PI * 1.5, PI * 1.5 + 2 * PI * progress, false);
        }
    }else{
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    }
    
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.font = radius * 0.8 + "px OpenSans";
    ctx.textAlign = "center";
    ctx.fillText(text, x, y + 0.25 * radius);
    
    
    
}