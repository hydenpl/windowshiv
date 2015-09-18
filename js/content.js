function initContent(key) {
    $('#content').load('content.html', function() {
        contentReady(key);
    });
    
}

function contentReady(key) {
    if(structure[key].title!==""){
        $('.header').show();
        $('h2.header-title').text(structure[key].title);
        $(".back-button").addClass("link").data("link", structure[key].back);
    }
    $("#tresc").html(content_json[key].content);
}