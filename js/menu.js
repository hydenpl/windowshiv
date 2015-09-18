function initMenu(key) {
    console.log('initMenu: '+key);
    menuReady(key);
}

function menuReady(key) {
    if(structure[key].title!==""){
        $('.header').show();
        $('h2.header-title').text(structure[key].title);
        $(".back-button").addClass("link").data("link", structure[key].back);
    }
    
    var id;
    var canvasId;
    $.each(menus[key].links, function (loopKey, loopVal) {
        id = "menuElement"+loopVal.key;
        canvasId = "menuElementCanvas"+loopVal.key;
        
        jQuery('<li/>', {
            id: id,
            class: "link"
        }).appendTo('#menu');
        
        $("#"+id).data("link", loopVal.key).text(loopVal.label);
    });
}