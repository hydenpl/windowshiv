function initContent(key) {
    $('#content').load('content.html', function() {
        $.getJSON("data/content.json", function(json) {
            contentReady(json, key);
        });
    });
    
}

function contentReady(json, key) {
    if(structure[key].title!==""){
        $('.header').show();
        $('h2.header-title').text(structure[key].title);
        $(".back-button").addClass("link").data("link", structure[key].back);
    }
    $("#tresc").html(json[key].content);
}