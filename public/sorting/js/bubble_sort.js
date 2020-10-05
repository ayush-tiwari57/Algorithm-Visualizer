import {
    n,
    width,
    speed
} from "./main_sort.js";

var c_delay = 1;
var delay_time = 40 - 2 * (speed - 1);

function div_update(cont, h, color) {
    setTimeout(function () {
        cont.style =
            " background:" + color + "; width:" + width + "%;" +
            "box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white; " +
            " height:" + h + "%;";
    }, c_delay += delay_time);
}


export function bubble(divs, height) {
    c_delay = 0;
    // delay_time = 40 - 2*(speed - 1);
    delay_time = 10000 / (Math.floor(n / 30) * speed);
    //console.log(c_delay, delay_time);
    for (var i = 0; i < n - 1; i++) {
        //let div one to be red
        div_update(divs[1], height[j], "red"); //Color update
        var j;
        //bubble sort normal algorithm
        for (j = 1; j < n - i; j++) {
            if (height[j] < height[j - 1]) {
                var temp = height[j];
                height[j] = height[j - 1];
                height[j - 1] = temp;
            }

            //swap colors 
            div_update(divs[2 * (j - 1) + 1], height[j - 1], "#808080"); //Color update
            div_update(divs[2 * j + 1], height[j], "red"); //Color update    
        }
        //turn the sorted number to be green 
        div_update(divs[2 * (j - 1) + 1], height[j - 1], "green"); //Color update
    }

    div_update(divs[1], height[0], "green"); //Color update

    // enable_buttons();
}