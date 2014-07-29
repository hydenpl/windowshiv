var wh;
var ww;
var fs;
var structure; //json ze struktura strony, backami, home itp
$(function() {
    var key = 'splash';
    wh = $(window).height();
    ww = $(window).width();
    fs = Math.floor((wh + ww) * 0.016); //0.015 dla tabletu, do 0.019 dla najmniejszych ekranów
    $('body').css('font-size', fs);
    drawHome('home-canvas', 1.6 * fs, 4 * fs);
    drawBack('back-canvas', 1.6 * fs, 4 * fs);
    
    initPage(key);
    
    $("body").on('click','.link', function() {
        initPage($(this).data("link"));
    });
});


function initPage(key){
    $.getJSON("data/structure.json", function(data) {
        structure = data;
        $('html, body, .header').css('background-color', structure[key].background);
        $('.header').hide();
//        $(".back-button").addClass("link").data("link", structure[key].back);

        if(structure[key].type==='subpage'){
            initSubpage(key);
        }else if(structure[key].type=='menu'){
            initMenu(key);
        }else if(structure[key].type=='content'){
            initContent(key);
        }else if(structure[key].type=='tworcy'){
            initTworcy(key);
            //jeszcze nic
        }else{
            initSplash(key);
            //jeszcze nic
        }
    });
}


