function initMenu(key) {
    $('#content').empty();
    $('#content').load('menu.html', function() {
        
        $.getJSON("data/menus.json", function(json) {
            menuReady(json, key);
        });
    });
    
}

function menuReady(json, key) {
    
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
        
        $("#"+id).data("link", loopVal.key).text(loopVal.label);
    });
}