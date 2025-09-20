function temperatureconversion(){
    var c = document.getElementById("celsius").value;
    var f = (c * (9/5) + 32);
    document.getElementById("fahrenheit").value = f;
};

function weightconversion(){
    var w = document.getElementById("kilo").value;
    var p = w * 2.205
    document.getElementById("pounds").value = p;
};

function distanceconversion(){
    var k = document.getElementById("km").value;
    var m = k * 0.62137;
    document.getElementById("miles").value = m;
}