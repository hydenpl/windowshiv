function initSubpage(key) {
    $('#content').load('subpage.html', function() {
        $.getJSON("data/substances.json", function(json) {
            subpageReady(json, key);
        });
    });
}

function subpageReady(json, key) {
    
    var type = json[key].type;
    var parentKey;
    if(type==='drug'){
        parentKey = key;
    }else{
        parentKey = json[key].ingredients[0].key; //np w mixie am+al am to parentkey - wyswietlamy dla niego naglowek na gorze
    }
    
    $('.header').show();
    $('h2.header-title').text(json[parentKey].title);
    
    $("#footer-apla-bcg").css('background-color', structure[parentKey].background);
    
    $(".back-button").addClass("link").data("link", structure[parentKey].back);
    
    if(type==='drug'){
        var iconHeight = 8 * fs;
        drawHexagon('sub-content-icon-canvas', iconHeight, json[key].color, json[key].shortcut);
        $('.sub-content-icon-title-container').hide();
    }else{
        var iconHeight = 5 * fs;
        $('h2.header-title').addClass('link').data('link',parentKey);
        var ingredient1 = json[key].ingredients[0].key;
        var ingredient2 = json[key].ingredients[1].key;
        $('.sub-content-icon-title').text(json[ingredient1].title+" + "+json[ingredient2].title);
        drawMix('sub-content-icon-canvas', iconHeight, json[ingredient1].color, json[ingredient2].color, json[ingredient1].shortcut, json[ingredient2].shortcut);
        $(".sub-content-icon-title-container").height(iconHeight).children(".sub-content-icon-title").css('line-height', iconHeight + 'px');
    }
    

    $('.sub-drug-description').html(json[key].description);
    
    //footer - dolinkowywania wg mixow o pierwszym skladniku rownym parentowi obecnemu
    $.each(json, function (loopKey, loopVal) {
        if(loopVal.type==='mix'){
            if(loopVal.ingredients[0].key===parentKey){
                if(loopKey===key){
                    appendFooterElement(loopKey, json, true);
                }else{
                    appendFooterElement(loopKey, json);
                }
            };
        }
    });
}


function appendFooterElement(mix, json, chosen) {
    var ingrKey1 = json[mix].ingredients[0].key;
    var ingrKey2 = json[mix].ingredients[1].key;
    id = ingrKey1+ingrKey2+"Canvas";
    jQuery('<canvas/>', {
        id: id,
        class: 'mix-link'
    }).appendTo('#footer-wrapper');
    drawMix(id, 3.5*fs, json[ingrKey1].color, json[ingrKey2].color, json[ingrKey1].shortcut, json[ingrKey2].shortcut);
    $('#'+id).data("mix-link",mix);
    $('#'+id).css('padding',Math.floor(0.74*fs)+'px '+Math.floor(1.39*fs)+"px")
    
    if(chosen===true){
        $('#'+id).addClass("chosen");
    }
}

$(function() {
    $("body").on('click','.mix-link', function() {
        initSubpage($(this).data("mix-link"));
    });
});


function initInstructions() {
    
    $('#content').load('instructions.html?v='+Math.random(), function() {
        $('.header').show();
        $('h2.header-title').text("Instrukcje");
        $(".back-button").addClass("link").data("link", "game")
                
        var size = $('.header').width();
                
        for(drug in drugs){
            var canvasId = 'drug'+drug+'Id';
            jQuery('<canvas/>', {
                id: canvasId
            }).appendTo('.instructions-drugs');
            
            var canvas = document.getElementById(canvasId);
    
            canvas.width = size;
            canvas.height = size / 8;
            
            $('#'+canvasId).height(canvas.height+"px");
            
            var ctx = canvas.getContext('2d');
            ctx.save();
            
//            ctx.scale(size / 600, size / 600);
         
            drawHistoryDrug(ctx, size/10, 0.8, drug, 1.0);
            
            var color = '#ffffff';
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.font = size / 30 + "px OpenSans";
            ctx.textAlign = "left";
            ctx.fillText(drugs[drug].title, size/5, size/16);
            
            ctx.restore();
        }
                        
    });
}