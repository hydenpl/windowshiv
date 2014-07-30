function initMenu(key) {
    $('#content').empty();
    $('#content').load('menu.html', function() {
        
        $.getJSON("data/menus.json", function(json) {
            menuReady(json, key);
        });
    });
    
}

function menuReady(json, key) {
    var hexHeight = json[key].size * fs;
    var hexWidth = hexHeight * 0.866;

    var contenerHeight = wh - 4 * fs; //wysokość kontenera
    
    var contentHeight = (json[key].links.length*0.75+0.25)*hexHeight; //wysokość sześciokątów
    var marginTop = 5*fs;
    if(contenerHeight-6*fs<contentHeight){//kontener mniejszy, nie mieści się
        marginTop = 5 * fs;
    }else{  //srodkujemy
        marginTop = 2*fs + (contenerHeight-contentHeight)/2;
    }
    
    var marginSide = ww / 2 - hexWidth * 3 / 4;
    
    if(structure[key].title!==""){
        $('.header').show();
        $('h2.header-title').text(structure[key].title);
        $(".back-button").addClass("link").data("link", structure[key].back);
    }
    
    var id;
    var canvasId;
    $.each(json[key].links, function (loopKey, loopVal) {
        id = "menuElement"+loopVal.key;
        canvasId = "menuElementCanvas"+loopVal.key;
        
        jQuery('<li/>', {
            id: id,
            class: "link"
        }).appendTo('#menu');
        
        $("#"+id).data("link", loopVal.key);
        
        jQuery('<canvas/>', {
            id: canvasId
        }).appendTo('#'+id);
        
        jQuery('<div/>', {
            class: "menu-title",
            text: loopVal.label
        }).appendTo('#'+id);
        if(loopVal.image===""){
            drawHexagon(canvasId, hexHeight, loopVal.color, loopVal.shortcut);
        }else{
            drawHexagonWithImage(canvasId, hexHeight, loopVal.color, loopVal.image);
        }
        
        if(loopKey%2===0){
            $('#'+id).css('top', marginTop + loopKey*hexHeight*0.75 + 'px').css('left', marginSide + "px");
        }else{
            $('#'+id).css('top', marginTop + loopKey*hexHeight*0.75 + 'px').css('right', marginSide + "px");
        }
    });
    
    $('.menu-title').css('line-height', hexHeight + "px");

}