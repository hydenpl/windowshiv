function initMenu(key) {
    
    $('#content').load('menu.html', function() {
        $.getJSON("data/menus.json", function(json) {
            menuReady(json, key);
        });
    });
    
}

function menuReady(json, key) {
    var hexHeight = json[key].size * fs;
    var hexWidth = hexHeight * 0.866;

    var contentHeight = wh - 4 * fs;
    
//    alert(json[key].links.length);

    $.each(json[key].links, function (loopKey, loopVal) {
        alert(loopVal.key);
        drawHexagon('menu-canvas', hexHeight, '#4aa453', 'ab');
        
//        if(loopVal.type==='mix'){
//            if(loopVal.ingredients[0].key===parentKey){
//                if(loopKey===key){
//                    appendFooterElement(loopKey, json, true);
//                }else{
//                    appendFooterElement(loopKey, json);
//                }
//            };
//        }
    });







    drawHexagon('menu-canvas', hexHeight, '#4aa453', 'ab');
    drawHexagon('menu-canvas1', hexHeight, '#ff6453', 'ab');
//        drawHexagon('menu-canvas2', hexHeight, '#123453', 'ab');
//        drawHexagon('menu-canvas3', hexHeight, '#af2253', 'ab');
//        drawHexagon('menu-canvas4', hexHeight, '#ff6453', 'ab');

    var marginTop = 70;

    var marginSide = ww / 2 - hexWidth * 3 / 4;

    $('#li').css('top', marginTop + 'px').css('left', marginSide + "px");
    $('#li1').css('top', marginTop + hexHeight * 0.75 + 'px').css('right', marginSide + "px");



    $('.menu-title-container').css('line-height', hexHeight + "px");

    
    
    
    
    
    
    
    
    
    
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

$(function() {
    $("body").on('click','.mix-link', function() {
        initSubpage($(this).data("mix-link"));
    });
});