function initGame(key) {
    $('#content').load('game.html', function() {
        $('.header').show();
        $('h2.header-title').text("(i)grasz?");
        $(".back-button").addClass("link").data("link", "main")
        
        console.log('game');
        
        var game = $('#game');
        
        console.log(game);
        
        drawParameters('game-parameters', game.width(), '#8ED6FF', 'black' );
        
        if(buttons === undefined){
            buttons = {};
            buttons.first = randomDrug();
            buttons.second = randomDrug();
            buttons.third = randomDrug();
            buttons.waiting = randomDrug();
        }
        
        
                
    });
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

function drawParameters(canvasId, size) {
    var canvas = document.getElementById(canvasId);
    var gap = 2;
    var height = 10;
    canvas.width = size;
    canvas.height = size * (Object.keys(parameters).length * height / 100 + (Object.keys(parameters).length - 1) * gap / 100 );
    
    var ctx = canvas.getContext('2d');
    
    ctx.save();
    ctx.scale(size / 100, size / 100);
    
    var background_color = "#3e1435";
    var bar_color = "#c761b5";
    var font_color = "#fff";
    
    var i = 0;
    for (parKey in parameters) {
    
        ctx.beginPath();
        ctx.rect(0, i * ( height + gap), 100, height);
        ctx.fillStyle = background_color;
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.rect(0, i * ( height + gap), parameters[parKey].val, height);
        ctx.fillStyle = bar_color;
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.font = "5px OpenSans";
        ctx.textAlign = "right";
        ctx.fillText(parameters[parKey].name, 95, i * ( height + gap) + 7);
        
        ctx.closePath();
        
        i++;
    }

    ctx.restore();
};