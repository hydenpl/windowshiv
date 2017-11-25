var wh;
var ww;
var fs;
var globalKey;

$(function() {
     document.addEventListener("deviceready", function() {
         initPage('splash');
//       initPage('kalkulator');

        $("body").on('click', '.link', function() {
            $(this).addClass("selected");
            initPage($(this).data("link"));
        });

        window.addEventListener("resize", function() {
            initPage(globalKey);
        });
     });

    document.addEventListener("backbutton", function(){
        backKey = $('.back-button').data('link');
        if(backKey==='close'){
            navigator.app.exitApp();
        }else{
            initPage(backKey);
        }
    }, false);
    
});


function initPage(key) {
    globalKey=key;
    $(".link").removeClass("selected");
    wh = $(window).height();
    ww = $(window).width();
    fs = Math.floor((wh + ww) * 0.016); //0.015 dla tabletu, do 0.019 dla najmniejszych ekranów
    $('body').css('font-size', fs);
    drawHome('home-canvas', 1.6 * fs, 4 * fs);
    drawBack('back-canvas', 1.6 * fs, 4 * fs);
    $(".home-button").data('link', 'main');
    $(".back-button").addClass("link").data("link", "close"); //do nadpisania dalej

    $('html, body, .header');
    $('.header').hide();
//        $(".back-button").addClass("link").data("link", structure[key].back);

    $('.header-apla').removeClass('invisible');
    $('#content').empty().removeClass('no-header');
    $('#menu').empty();
    
    if (structure[key].type == 'subpage') {
        initSubpage(key);
    } else if (structure[key].type == 'menu') {
        initMenu(key);
    } else if (structure[key].type == 'content') {
        initContent(key);
    } else if (structure[key].type == 'tworcy') {
        initTworcy(key);
    } else if (structure[key].type == 'game') {
        initGame(key);
    } else if (structure[key].type == 'gra_zabezpiecz') {
        initGraZabezpiecz(key);
    } else if (structure[key].type == 'gra_drzewko') {
        initGraDrzewko(key);
    } else if (structure[key].type == 'instructions') {
        initInstructions(key);
    } else if (structure[key].type == 'kalkulator') {
        initKalkulator(key);
    } else {
        initSplash(key);
    }
}


