var refreshbtn = document.querySelector('refresh');
var startbtn = document.querySelector('start');
var container = document.querySelector('ArrayBox');
var ArrayBox = document.getElementById("ArrayBox");
var speed_id = document.querySelector('speed');
var count = document.querySelector('count');
var arr = [];
var divs = [];

// refreshbtn.addEventListener('click', refresh);
// startbtn.addEventListener('click', start);

if (count == null) count = 60;
if (speed_id == null) speed_id = 10;
ArrayBox.style = "flex-direction:row";

function GenerateArr(n) {
    ArrayBox.innerHTML = "";
    for (var i = 0; i < n; i++) {
        arr[i] = 5 + (Math.floor(Math.random() * 500) + 500) % 96;
        divs[2 * i] = document.createElement("div");
        divs[2 * i + 1] = document.createElement("div");
        ArrayBox.appendChild(divs[2 * i]);
        ArrayBox.appendChild(divs[2 * i + 1]);

        // var margin_size = 0.2;
        var width = 100 / (2 * n);
        divs[2 * i].style = "width: " + width + "%;";
        divs[2 * i + 1].style =
            // " margin: 0% " + margin_size + "%;" +
            " background: #808080; width:" + width + "%;" +
            "box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white; " +
            " height:" + arr[i] + "%;";
    }
}

// function start() {
    
// }

// function refresh(){
//     location.reload();
// }

window.onload = GenerateArr(count);