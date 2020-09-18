var ArrayBox = document.getElementById("ArrayBox");
var arr = []
var divs = [];
ArrayBox.style = "flex-direction:row";

function GenerateArr(n) {
    ArrayBox.innerHTML = "";
    ArrayBox.style="width: 50%; margin:auto; padding: 10px; box-shadow: 4px 4px 5px grey, 4px 4px 5px white;";
    for (var i = 0; i < n; i++) {
        arr[i] = (Math.floor(Math.random()*500) + 500) % 100;
        divs[i] = document.createElement("div");
        ArrayBox.appendChild(divs[i]);

        var margin_size = 0.1;
        var width = 100 / n - 2 * margin_size;

        divs[i].style =
            " margin: 0% " + margin_size + "%;" +
            " background: grey; width:" + width + "%;" +
            "box-shadow: 3px 3px 5px grey, 3px 3px 5px white; "+
            " height:" + arr[i] + "%;";
        console.log(arr[i])
    }
}

window.onload = GenerateArr(100);