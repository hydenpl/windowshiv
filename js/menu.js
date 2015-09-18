function initMenu(key) {
    console.log('initMenu: '+key);
    
    if(structure[key].title!==""){
        $('#content').load('menu.html', function() {
            $('.header').show();
            $('h2.header-title').addClass('big-title').text(structure[key].title);
            $(".back-button").addClass("link").data("link", structure[key].back);
            menuReady(key);
        });
    }else{
        $('#content').addClass('no-header').load('menu_logo.html', function() {
            rysujLogo();
            menuReady(key);
        });
        
    }
}

function menuReady(key) {    
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