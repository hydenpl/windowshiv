function initSplash(key) {
    $('#content').load('splash.html', function() {
        rysujSplashLogo();
        rysujSplashOk();
    });

}