function initSubpage(key) {
    $('#content').load('subpage.html', function(){
        $.getJSON("data/subpages.json", function(json){
            subpageReady(json, key);
        });
    });
}

function subpageReady(json, key){
    var iconHeight = 9 * fs;
    $('h2.header-title').text(json[key].title);
    drawHexagon('sub-content-icon-canvas', iconHeight, json[key].color, 'Am');
    $(".sub-content-icon-title-container").height(iconHeight).children(".sub-content-icon-title").css('line-height', iconHeight + 'px');
}