function initSubpage(key) {
    $('#content').load('subpage.html', function() {
        $.getJSON("data/subpages.json", function(json) {
            subpageReady(json, key);
        });
    });
}

function subpageReady(json, key) {
    var iconHeight = 9 * fs;
    $('.header').show();
    $('h2.header-title').text(json[key].title);
    $(".sub-content-icon-title-container").height(iconHeight).children(".sub-content-icon-title").css('line-height', iconHeight + 'px');
    $('.sub-content-icon-title').text(json[key].title);
    $('.sub-drug-description').text(json[key].description);
    drawHexagon('sub-content-icon-canvas', iconHeight, json[key].color, json[key].shortcut);

    //footer
    appendFooterElement('footer1','');
    appendFooterElement('footer2','',true);
    appendFooterElement('footer3');
//    appendFooterElement('footer4');
//    appendFooterElement('footer5');
//    appendFooterElement('footer6');
//    appendFooterElement('footer7');
//    appendFooterElement('footer8');
//    appendFooterElement('footer9');
//    appendFooterElement('footer10');
//    appendFooterElement('footer11');

//    drawHexagon('sub-content-icon-canvas', 4*fs, json[key].color, json[key].shortcut);


}


function appendFooterElement(key1, key2, chosen) {
    id = key1+key2+"Canvas";
    jQuery('<canvas/>', {
        id: id
    }).appendTo('#footer-wrapper');
    drawMix(id, 3*fs, '#657485', '#66a26a', 'Aa', 'Bb');
    $('#'+id).css('padding',fs+'px '+Math.floor(1.39*fs)+"px");
    if(chosen===true){
        $('#'+id).addClass("chosen");
    }
}