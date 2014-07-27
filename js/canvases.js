function drawHome(canvasId, size, totalHeight) {
    var canvas = document.getElementById(canvasId);
    canvas.width = size;
    canvas.height = totalHeight;
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.translate(0, (totalHeight - size) / 2);
    ctx.scale(size / 100, size / 100);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(75, 14.434);
    ctx.lineTo(50, 0);
    ctx.lineTo(25, 14.434);
    ctx.lineTo(0, 28.868);
    ctx.lineTo(0, 30.335);
    ctx.lineTo(0, 53.404);
    ctx.lineTo(0, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, 53.404);
    ctx.lineTo(100, 30.335);
    ctx.lineTo(100, 28.868);
    ctx.lineTo(75, 14.434);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
}
;

function drawBack(canvasId, size, totalHeight) {
    var canvas = document.getElementById(canvasId);
    canvas.width = size;
    canvas.height = totalHeight;
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.translate(0, (totalHeight - size) / 2);
    ctx.scale(size / 100, size / 100);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(53.403, 0);
    ctx.lineTo(53.403, 100);
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0, 0);
    ctx.translate(0, 0);
    ctx.scale(1, 1);
    ctx.translate(0, 0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(14.433, 25);
    ctx.lineTo(28.867, 0);
    ctx.lineTo(53.403, 0);
    ctx.lineTo(38.97, 25);
    ctx.lineTo(24.537, 50);
    ctx.lineTo(38.97, 75);
    ctx.lineTo(53.403, 100);
    ctx.lineTo(28.867, 100);
    ctx.lineTo(14.433, 75);
    ctx.lineTo(0, 50);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
}
;

function drawHexagon(canvasId, size, color, info) {
    var canvas = document.getElementById(canvasId);
    
    canvas.width = 0.866*size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(size / 100, size / 100);
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 25);
    ctx.lineTo(0, 75);
    ctx.lineTo(43.3, 100);
    ctx.lineTo(86.6, 75);
    ctx.lineTo(86.6, 25);
    ctx.lineTo(43.3, 0);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#fff";
    ctx.font= "bold 30px OpenSans";
    ctx.textAlign = "center";
    ctx.fillText(info,43.3,62);
    
    ctx.restore();
}
;


function drawMix(canvasId, size, color1, color2, info1, info2){
    var canvas = document.getElementById(canvasId);
    
    canvas.width = size/175*129.9;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(size/175, size/175);
    
    ctx.fillStyle = color1;
    ctx.beginPath();
    ctx.moveTo(0, 25);
    ctx.lineTo(0, 75);
    ctx.lineTo(43.3, 100);
    ctx.lineTo(86.6, 75);
    ctx.lineTo(86.6, 25);
    ctx.lineTo(43.3, 0);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#fff";
    ctx.font= "bold 25px OpenSans";
    ctx.textAlign = "center";
    ctx.fillText(info1,43.3,62);
    
    ctx.fillStyle = color2;
    ctx.beginPath();
    ctx.moveTo(43.3, 100);
    ctx.lineTo(43.3, 150);
    ctx.lineTo(86.6, 175);
    ctx.lineTo(129.9, 150);
    ctx.lineTo(129.9, 100);
    ctx.lineTo(86.6, 75);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#fff";
    ctx.font= "bold 25px OpenSans";
    ctx.textAlign = "center";
    ctx.fillText(info2,86.6,137);
    
    ctx.restore();
}

