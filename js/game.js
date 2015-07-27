function initGame(key) {
    $('#content').load('game.html?v='+Math.random(), function() {
        $('.header').show();
        $('h2.header-title').text("(i)grasz?");
        $(".back-button").addClass("link").data("link", "main")
        
        console.log('game');
        
        var game = $('#game');
        
//        drawParameters(game.width());
        
        setInterval(function(){ 
            loopAnimationState = (loopAnimationState + 1)%loopAnimationDuration; 
            drawParameters($('#game').width());
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
            if(btn != 'waiting'){
                counter++;
                var drugTaken = buttons[btn];
                changeParamsByDrug(buttons[btn]);
                drawParameters(game.width());
                buttons[btn] = buttons.waiting;
                buttons.waiting = randomDrug();
                drawButtons(game.width());
                addToHistory(game.width(), drugTaken)
            }
        });
        
                
    });
}

function addToHistory(size, drug){
    if(drugHistory.length>8){
        drugHistory.shift();
    }
    drugHistory.push(drug);
    
    drawHistory(size);
}

function drawHistory(size){
    var canvasId = 'game-history';
    var canvas = document.getElementById(canvasId);
    
    var width = canvas.width;
    canvas.height = width / 9 * 1.15470053838;
    
    var size = canvas.height;
    
    var ctx = canvas.getContext('2d');    
    var counter = 9 - drugHistory.length;
    for(var drug in drugHistory){
        drawHistoryDrug(ctx, size, counter++, drugHistory[drug], 0.1*counter);
    }
}

function changeParamsByDrug(drug){
    for(param in drugs[drug].params){
        var drug_params = drugs[drug].params;
        parameters[param].diff = drug_params[param];
        parameters[param].val += drug_params[param];
    }
}

function randomDrug(){
    var drug = '';
    do{
        var keys = Object.keys(drugs)
        drug = keys[ keys.length * Math.random() << 0];
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
    var canvas = document.getElementById('game-parameters');
    var gap = 0.5;
    var height = 9;
    canvas.width = size;
    canvas.height = size * (Object.keys(parameters).length * height / 100 + (Object.keys(parameters).length - 1) * gap / 100 );
    
    var ctx = canvas.getContext('2d');
    
    ctx.save();
        
    var scale = size/100;
    var offset = 10 * scale * loopAnimationState / loopAnimationDuration;
    
    var background_color = "#3e1435";
    var bar_color = "#f49b00";
//    var bar_color = "#f49b00";
    var font_color = "#fff";
    
    var i = 0;
    for (parKey in parameters) {
    
        ctx.beginPath();
        ctx.rect(0, i * ( height + gap) * scale, 100 * scale, height * scale);
        ctx.fillStyle = background_color;
        ctx.fill();
        ctx.closePath();
        
        var ptn = document.createElement('canvas');
        ptn.width = 10 * scale;
        ptn.height = 10 * scale;
        var pctx = ptn.getContext('2d');
        
        pctx.save();
        
        pctx.fillStyle = "rgba(100, 100, 0, 1)";
        
        pctx.beginPath();
        pctx.moveTo(offset - 400 * scale / 40, 0.0);
        pctx.lineTo(offset - 200 * scale / 40, 0.0);
        pctx.lineTo(offset - 400 * scale / 40, 200 * scale / 40);
        pctx.closePath();
        pctx.fill();
        
        pctx.beginPath();
        pctx.moveTo(offset, 0.0);
        pctx.lineTo(offset + 200 * scale / 40, 0.0);
        pctx.lineTo(offset - 200 * scale / 40, 400 * scale / 40);
        pctx.lineTo(offset - 400 * scale / 40, 400 * scale / 40);
        pctx.closePath();
        
        pctx.fill();

        pctx.beginPath();
        pctx.moveTo(offset + 400 * scale / 40, 0.0);
        pctx.lineTo(offset + 400 * scale / 40, 200.0 * scale / 40);
        pctx.lineTo(offset + 200 * scale / 40, 400 * scale / 40);
        pctx.lineTo(offset + 0, 400 * scale / 40);
        pctx.closePath();

        pctx.fill();
                
        
        pctx.restore();
        
        var pat = ctx.createPattern(ptn, "repeat");
        
        ctx.beginPath();
        ctx.rect(0, i * ( height + gap) * scale, parameters[parKey].val * scale, height * scale);
        ctx.fillStyle = pat; //bar_color;
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = font_color;
        var fontSize = 0.2 * scale;
        ctx.font = fontSize + "em OpenSans";
        ctx.textAlign = "right";
        ctx.fillText(parameters[parKey].name, 95 * scale, ( i * ( height + gap) + 6 )  * scale);
        
        ctx.closePath();
        
        i++;
    }

    ctx.restore();
};