function initSubpage(key) {
    $('#content').load('subpage.html', function() {
        //NIEAKTUALNE
//        $.getJSON("data/substances.json", function(json) {
//            subpageReady(json, key);
//        });
    });
}

function subpageReady(json, key) {
//    
//    var type = json[key].type;
//    var parentKey;
//    if(type==='drug'){
//        parentKey = key;
//    }else{
//        parentKey = json[key].ingredients[0].key; //np w mixie am+al am to parentkey - wyswietlamy dla niego naglowek na gorze
//    }
//    
//    $('.header').show();
//    $('h2.header-title').text(json[parentKey].title);
//    
//    $("#footer-apla-bcg").css('background-color', structure[parentKey].background);
//    
//    $(".back-button").addClass("link").data("link", structure[parentKey].back);
//    
//    if(type==='drug'){
//        var iconHeight = 8 * fs;
//        drawHexagon('sub-content-icon-canvas', iconHeight, json[key].color, json[key].shortcut);
//        $('.sub-content-icon-title-container').hide();
//    }else{
//        var iconHeight = 5 * fs;
//        $('h2.header-title').addClass('link').data('link',parentKey);
//        var ingredient1 = json[key].ingredients[0].key;
//        var ingredient2 = json[key].ingredients[1].key;
//        $('.sub-content-icon-title').text(json[ingredient1].title+" + "+json[ingredient2].title);
//        drawMix('sub-content-icon-canvas', iconHeight, json[ingredient1].color, json[ingredient2].color, json[ingredient1].shortcut, json[ingredient2].shortcut);
//        $(".sub-content-icon-title-container").height(iconHeight).children(".sub-content-icon-title").css('line-height', iconHeight + 'px');
//    }
//    
//
//    $('.sub-drug-description').html(json[key].description);
//    
}

//$(function() {
//    $("body").on('click','.mix-link', function() {
//        initSubpage($(this).data("mix-link"));
//    });
//});
