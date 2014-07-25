var canvas;
var ctx;

function init() {
    canvas = initFullScreenCanvas("mainCanvas");
    ctx = canvas.getContext('2d');
    repaint();
    reorient();
}

function initFullScreenCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    resizeCanvas(canvas);
    window.addEventListener("resize", function() {
        resizeCanvas(canvas);
    });
    return canvas;
}

function resizeCanvas(canvas) {
    canvas.width = document.width || document.body.clientWidth;
    canvas.height = document.height || document.body.clientHeight;
    repaint();
}

function repaint() {
    if (!ctx)
        return;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    reorient();
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(10, 10, 250, 30);
    ctx.fillRect(120, 10, 30, 300);
}

function reorient() {
    var angle = window.orientation;
    if (angle) {
        ctx.fillStyle = "red";
        ctx.font="20px Georgia";
        ctx.fillText(String(angle),50,50);
        
        var rot = -Math.PI * (angle / 180);
//        ctx.rotate(rot);
        ctx.translate(angle === -90 ? canvas.width : 0,
                angle === 90 ? canvas.height : 0);
        ctx.rotate(rot);
    }
}











var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
