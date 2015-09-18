function initSplash(key) {
    $('#content').load('splash.html', function() {
        rysujLogo();
        $('#splash-ok').addClass("link").data("link", "main");
    });
}

function rysujLogo(){
    var canvas = document.getElementById('logo');
    
    canvas.width = 17*fs;
    canvas.height = 10*fs;
    var ctx = canvas.getContext('2d');
ctx.scale(1.2*fs/23, 1.2*fs/23);  

ctx.save();
ctx.translate(0,0);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(313.054,0);
ctx.lineTo(313.054,164.566);
ctx.lineTo(0,164.566);
ctx.closePath();
ctx.clip();
ctx.translate(0,0);
ctx.translate(0,0);
ctx.scale(1,1);
ctx.translate(0,0);
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.save();
ctx.fillStyle = "#f49b00";
ctx.beginPath();
ctx.moveTo(40.719,0);
ctx.lineTo(61.08,11.755);
ctx.lineTo(81.439,23.509);
ctx.lineTo(81.439,47.019);
ctx.lineTo(81.439,70.528);
ctx.lineTo(61.08,82.283);
ctx.lineTo(40.719,94.038);
ctx.lineTo(20.36,82.283);
ctx.lineTo(0,70.528);
ctx.lineTo(0,47.019);
ctx.lineTo(0,23.509);
ctx.lineTo(20.36,11.755);
ctx.lineTo(40.719,0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ea7a00";
ctx.beginPath();
ctx.moveTo(81.439,70.528);
ctx.lineTo(101.799,82.283);
ctx.lineTo(122.159,94.038);
ctx.lineTo(122.159,117.548);
ctx.lineTo(122.159,141.057);
ctx.lineTo(101.799,152.812);
ctx.lineTo(81.439,164.566);
ctx.lineTo(61.08,152.812);
ctx.lineTo(40.719,141.057);
ctx.lineTo(40.719,117.548);
ctx.lineTo(40.719,94.038);
ctx.lineTo(61.08,82.283);
ctx.lineTo(81.439,70.528);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(49.511,38.227);
ctx.bezierCurveTo(47.262,35.977999999999994,44.153000000000006,34.586,40.719,34.586);
ctx.bezierCurveTo(37.285,34.586,34.176,35.978,31.928,38.227);
ctx.bezierCurveTo(29.678,40.477,28.286,43.584999999999994,28.286,47.019);
ctx.bezierCurveTo(28.286,50.454,29.678,53.562,31.928,55.811);
ctx.bezierCurveTo(34.176,58.061,37.285000000000004,59.453,40.719,59.453);
ctx.bezierCurveTo(44.153,59.453,47.262,58.061,49.511,55.811);
ctx.bezierCurveTo(51.761,53.562,53.153000000000006,50.454,53.153000000000006,47.019);
ctx.bezierCurveTo(53.153,43.585,51.761,40.477,49.511,38.227);
ctx.moveTo(40.719,24.586);
ctx.bezierCurveTo(46.913000000000004,24.586,52.522000000000006,27.096999999999998,56.581,31.156999999999996);
ctx.bezierCurveTo(60.641000000000005,35.217,63.152,40.824,63.152,47.018);
ctx.bezierCurveTo(63.152,53.212,60.64,58.821,56.581,62.88);
ctx.bezierCurveTo(52.522000000000006,66.93900000000001,46.913000000000004,69.45100000000001,40.719,69.45100000000001);
ctx.bezierCurveTo(34.526,69.45100000000001,28.916,66.93900000000001,24.858,62.88000000000001);
ctx.bezierCurveTo(20.798000000000002,58.82000000000001,18.287,53.21200000000001,18.287,47.01800000000001);
ctx.bezierCurveTo(18.287,40.82500000000001,20.798,35.21600000000001,24.857999999999997,31.157000000000007);
ctx.bezierCurveTo(28.917,27.097,34.526,24.586,40.719,24.586);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(63.731,106.909);
ctx.bezierCurveTo(61.779,104.95700000000001,61.779,101.79100000000001,63.731,99.839);
ctx.bezierCurveTo(65.68299999999999,97.88699999999999,68.849,97.887,70.801,99.839);
ctx.lineTo(99.148,128.186);
ctx.bezierCurveTo(101.1,130.138,101.1,133.304,99.148,135.256);
ctx.bezierCurveTo(97.196,137.208,94.03,137.208,92.078,135.256);
ctx.lineTo(63.731,106.909);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(70.801,135.256);
ctx.bezierCurveTo(68.849,137.208,65.683,137.208,63.731,135.256);
ctx.bezierCurveTo(61.779,133.303,61.779,130.138,63.731,128.186);
ctx.lineTo(92.078,99.839);
ctx.bezierCurveTo(94.03,97.887,97.196,97.887,99.148,99.839);
ctx.bezierCurveTo(101.1,101.791,101.1,104.957,99.148,106.90899999999999);
ctx.lineTo(70.801,135.256);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(290.266,36.589);
ctx.lineTo(275.547,113.243);
ctx.lineTo(288.058,113.243);
ctx.lineTo(288.058,120.235);
ctx.lineTo(267.392,120.235);
ctx.lineTo(282.129,43.703);
ctx.lineTo(269.62,43.703);
ctx.lineTo(269.62,36.589);
ctx.lineTo(290.266,36.589);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(266.284,107.664);
ctx.bezierCurveTo(266.284,111.058,265.282,114.062,263.278,116.658);
ctx.bezierCurveTo(261.132,119.459,258.351,120.848,255.00000000000003,120.848);
ctx.bezierCurveTo(251.64700000000002,120.848,248.90800000000002,119.519,246.84500000000003,116.842);
ctx.bezierCurveTo(244.75900000000001,114.163,243.71600000000004,111.097,243.71600000000004,107.663);
ctx.lineTo(243.71600000000004,97.97399999999999);
ctx.lineTo(250.95100000000005,97.97399999999999);
ctx.lineTo(250.95100000000005,107.66299999999998);
ctx.bezierCurveTo(250.95100000000005,111.75099999999998,252.30100000000004,113.77599999999998,255.00000000000006,113.77599999999998);
ctx.bezierCurveTo(256.30800000000005,113.77599999999998,257.37100000000004,113.05899999999998,258.1480000000001,111.62899999999998);
ctx.bezierCurveTo(258.74000000000007,110.42199999999998,259.04800000000006,109.11299999999997,259.04800000000006,107.66299999999998);
ctx.lineTo(259.04800000000006,98.44299999999998);
ctx.bezierCurveTo(259.04800000000006,94.04799999999999,257.7370000000001,89.65399999999998,255.10100000000006,85.27899999999998);
ctx.bezierCurveTo(252.62800000000004,81.43699999999998,250.15600000000006,77.65399999999998,247.72200000000007,73.95499999999998);
ctx.bezierCurveTo(245.04300000000006,69.11099999999999,243.71500000000006,63.999999999999986,243.71500000000006,58.624999999999986);
ctx.lineTo(243.71500000000006,49.383999999999986);
ctx.bezierCurveTo(243.71500000000006,45.99199999999998,244.71700000000007,43.00799999999999,246.72000000000006,40.41099999999999);
ctx.bezierCurveTo(248.88700000000006,37.52899999999999,251.64700000000005,36.097999999999985,254.99900000000005,36.097999999999985);
ctx.bezierCurveTo(258.35100000000006,36.097999999999985,261.13200000000006,37.487999999999985,263.27700000000004,40.286999999999985);
ctx.bezierCurveTo(265.28100000000006,43.006999999999984,266.283,46.030999999999985,266.283,49.38299999999998);
ctx.lineTo(266.283,59.09299999999998);
ctx.lineTo(259.048,59.09299999999998);
ctx.lineTo(259.048,49.38299999999998);
ctx.bezierCurveTo(259.048,45.31599999999998,257.696,43.29299999999998,254.999,43.29299999999998);
ctx.bezierCurveTo(253.608,43.29299999999998,252.607,43.94599999999998,251.974,45.25399999999998);
ctx.bezierCurveTo(251.29899999999998,46.623999999999974,250.951,47.992999999999974,250.951,49.382999999999974);
ctx.lineTo(250.951,58.623999999999974);
ctx.bezierCurveTo(250.951,63.059999999999974,252.261,67.43299999999998,254.898,71.78699999999998);
ctx.bezierCurveTo(256.145,73.71099999999998,257.371,75.60999999999997,258.597,77.51099999999998);
ctx.bezierCurveTo(259.804,79.41199999999998,261.03,81.31299999999999,262.277,83.23399999999998);
ctx.bezierCurveTo(264.955,87.93699999999998,266.284,93.02599999999998,266.284,98.44299999999998);
ctx.lineTo(266.284,107.664);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(242.088,120.235);
ctx.lineTo(234.708,120.235);
ctx.lineTo(232.91,105.026);
ctx.lineTo(223.506,105.026);
ctx.lineTo(221.667,120.235);
ctx.lineTo(214.411,120.235);
ctx.lineTo(224.529,36.589);
ctx.lineTo(231.663,36.589);
ctx.lineTo(242.088,120.235);
ctx.closePath();
ctx.moveTo(232.072,97.935);
ctx.lineTo(228.066,65.289);
ctx.lineTo(224.18200000000002,97.935);
ctx.lineTo(232.072,97.935);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(210.956,120.235);
ctx.lineTo(203.72,120.235);
ctx.lineTo(203.72,88.143);
ctx.bezierCurveTo(203.72,84.054,202.37,82.032,199.672,82.032);
ctx.lineTo(195.625,82.032);
ctx.lineTo(195.625,120.23599999999999);
ctx.lineTo(188.39,120.23599999999999);
ctx.lineTo(188.39,36.589);
ctx.lineTo(199.672,36.589);
ctx.bezierCurveTo(203.025,36.589,205.805,37.98,207.952,40.781);
ctx.bezierCurveTo(209.95499999999998,43.458,210.956,46.463,210.956,49.815);
ctx.lineTo(210.956,66.699);
ctx.bezierCurveTo(210.956,72.054,208.994,75.96,205.08999999999997,78.432);
ctx.bezierCurveTo(208.99399999999997,80.926,210.95599999999996,84.852,210.95599999999996,90.248);
ctx.lineTo(210.95599999999996,120.235);
ctx.closePath();
ctx.moveTo(203.719,68.765);
ctx.lineTo(203.719,49.856);
ctx.bezierCurveTo(203.719,45.767,202.369,43.743,199.671,43.743);
ctx.lineTo(195.624,43.743);
ctx.lineTo(195.624,74.937);
ctx.lineTo(199.671,74.937);
ctx.bezierCurveTo(202.37,74.938,203.719,72.894,203.719,68.765);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(184.239,120.235);
ctx.lineTo(177.125,120.235);
ctx.lineTo(177.125,118.621);
ctx.bezierCurveTo(175.491,120.113,173.608,120.84899999999999,171.504,120.84899999999999);
ctx.bezierCurveTo(168.33599999999998,120.84899999999999,165.84199999999998,119.39899999999999,164.00099999999998,116.47399999999999);
ctx.bezierCurveTo(162.52899999999997,113.91899999999998,161.795,110.97599999999998,161.795,107.66399999999999);
ctx.lineTo(161.795,49.385);
ctx.bezierCurveTo(161.795,45.951,162.77499999999998,42.967,164.719,40.412);
ctx.bezierCurveTo(166.924,37.53,169.686,36.099,172.99699999999999,36.099);
ctx.bezierCurveTo(176.34799999999998,36.099,179.10799999999998,37.489,181.315,40.288);
ctx.bezierCurveTo(183.257,42.965999999999994,184.239,45.992,184.239,49.384);
ctx.lineTo(184.239,59.074);
ctx.lineTo(177.125,59.074);
ctx.lineTo(177.125,49.384);
ctx.bezierCurveTo(177.125,45.317,175.755,43.274,172.997,43.274);
ctx.bezierCurveTo(171.586,43.274,170.562,43.927,169.93,45.255);
ctx.bezierCurveTo(169.255,46.605000000000004,168.90900000000002,47.994,168.90900000000002,49.384);
ctx.lineTo(168.90900000000002,107.60300000000001);
ctx.bezierCurveTo(168.90900000000002,109.114,169.216,110.44300000000001,169.80800000000002,111.54700000000001);
ctx.bezierCurveTo(170.56300000000002,112.99900000000001,171.627,113.71400000000001,172.997,113.71400000000001);
ctx.bezierCurveTo(175.75500000000002,113.71400000000001,177.125,111.67000000000002,177.125,107.60300000000001);
ctx.lineTo(177.125,82.05);
ctx.lineTo(171.975,82.05);
ctx.lineTo(171.975,74.938);
ctx.lineTo(184.24,74.938);
ctx.lineTo(184.24,120.235);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(150.161,36.589);
ctx.lineTo(157.397,36.589);
ctx.quadraticCurveTo(157.397,36.589,157.397,36.589);
ctx.lineTo(157.397,120.235);
ctx.quadraticCurveTo(157.397,120.235,157.397,120.235);
ctx.lineTo(150.161,120.235);
ctx.quadraticCurveTo(150.161,120.235,150.161,120.235);
ctx.lineTo(150.161,36.589);
ctx.quadraticCurveTo(150.161,36.589,150.161,36.589);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(304.201,93.444);
ctx.lineTo(304.201,95.053);
ctx.lineTo(304.201,107.727);
ctx.lineTo(297.088,107.727);
ctx.lineTo(297.088,78.957);
ctx.lineTo(302.617,78.957);
ctx.bezierCurveTo(305.52000000000004,78.957,305.94,75.332,305.94,73.11);
ctx.lineTo(305.94,49.386);
ctx.bezierCurveTo(305.94,47.995000000000005,305.603,46.618,304.919,45.256);
ctx.bezierCurveTo(304.25899999999996,43.944,303.222,43.294,301.87399999999997,43.294);
ctx.bezierCurveTo(299.114,43.294,297.72499999999997,45.321,297.72499999999997,49.385999999999996);
ctx.lineTo(297.72499999999997,54.742999999999995);
ctx.lineTo(290.611,54.742999999999995);
ctx.lineTo(290.611,49.385999999999996);
ctx.bezierCurveTo(290.611,45.95099999999999,291.669,42.913,293.718,40.229);
ctx.bezierCurveTo(295.814,37.481,298.521,36.1,301.874,36.1);
ctx.bezierCurveTo(305.14300000000003,36.1,307.903,37.518,310.132,40.413000000000004);
ctx.bezierCurveTo(312.089,42.954,313.055,45.957,313.055,49.387);
ctx.lineTo(313.055,73.11);
ctx.bezierCurveTo(313.055,76.419,312.367,79.376,310.848,81.9);
ctx.bezierCurveTo(309.189,84.653,306.94,86.111,304.202,86.36);
ctx.lineTo(304.202,93.444);
ctx.closePath();
ctx.moveTo(304.201,120.235);
ctx.lineTo(297.088,120.235);
ctx.lineTo(297.088,113.224);
ctx.lineTo(304.201,113.224);
ctx.lineTo(304.201,120.235);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
ctx.restore();

}