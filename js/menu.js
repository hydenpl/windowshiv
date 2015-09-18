function initMenu(key) {
    $('#content').empty();
    $('#content').load('menu.html', function() {
        
//        $.getJSON("data/menus.json", function(json) {
//            menuReady(json, key);
//        });
    });
    
}

//function menuReady(json, key) {
//    
//}