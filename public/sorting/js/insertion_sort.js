import {
    n,
    width,
    speed
} from "./main_sort.js";

var c_delay = 1;
var delay_time = 40 - 2 * (speed - 1);

function div_update(cont, h, color) {
    setTimeout(function() {
        cont.style =
            " background:" + color + "; width:" + width + "%;" +
            "box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white; " +
            " height:" + h + "%;";
    }, c_delay += delay_time);
}


export function insertion(divs, height) {
    c_delay = 0;
    delay_time = 10000 / (Math.floor(n / 30) * speed);
    console.log(c_delay, delay_time);
    var i, keyD, keyH, j;
    for (i = 1; i < n; i++) {
        div_update(divs[2 * i + 1], height[i], "red");
        keyH = height[i];
        j = i - 1;
        while (j >= 0 && height[j] > height[j + 1]) {
            var temp = height[j];
            height[j] = height[j + 1];
            height[j + 1] = temp;
            div_update(divs[2 * (j + 1) + 1], height[j + 1], "green");
            div_update(divs[2 * j + 1], height[j], "red");
            j = j - 1;
        }
        div_update(divs[2 * (j + 1) + 1], height[j + 1], "green");
    }
}