function initGame(key) {
    $('#content').load('game.html', function() {
        $('.header').show();
        $('h2.header-title').text("Twoje parametry");
        $(".back-button").addClass("link").data("link", "main");
    });
}