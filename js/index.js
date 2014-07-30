var wh;
var ww;
var fs;
var structure; //json ze struktura strony, backami, home itp
var globalKey

$(function() {
    document.addEventListener("deviceready", function() {
        initPage('splash');

        $("body").on('click', '.link', function() {
            initPage($(this).data("link"));
        });

        window.addEventListener("resize", function() {
            initPage(globalKey);
        });

    }, false);

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
    wh = $(window).height();
    ww = $(window).width();
    fs = Math.floor((wh + ww) * 0.016); //0.015 dla tabletu, do 0.019 dla najmniejszych ekranów
    $('body').css('font-size', fs);
    drawHome('home-canvas', 1.6 * fs, 4 * fs);
    drawBack('back-canvas', 1.6 * fs, 4 * fs);
    $(".home-button").data('link', 'main');
    $(".back-button").addClass("link").data("link", "close"); //do nadpisania dalej

    $.getJSON("data/structure.json", function(data) {
        structure = data;
        $('html, body, .header').css('background-color', structure[key].background);
        $('.header').hide();
//        $(".back-button").addClass("link").data("link", structure[key].back);

        if (structure[key].type == 'subpage') {
            initSubpage(key);
        } else if (structure[key].type == 'menu') {
            initMenu(key);
        } else if (structure[key].type == 'content') {
            initContent(key);
        } else if (structure[key].type == 'tworcy') {
            initTworcy(key);
            //jeszcze nic
        } else {
            initSplash(key);
            //jeszcze nic
        }
    });
}


