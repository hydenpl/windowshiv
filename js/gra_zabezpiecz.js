function initGraZabezpiecz(key) {
    
    $('#content').load('gra_zabezpiecz.html?v='+Math.random(), function() {
        $('.header').show();
        $(".back-button").addClass("link").data("link", "main")
        
    });
}

