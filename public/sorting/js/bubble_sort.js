import {
    n,
    width,
    speed
} from "./main_sort.js";

var c_delay = 0;
var delay_time = speed * 1000;

function div_update(cont, height, color) {
    setTimeout(() => {
        cont.style = "%; width:" + width + "%; height:" + height + "%; background-color:" + color + ";";
        c_delay += delay_time;
        console.log(c_delay, delay_time);
    }, c_delay);
}


export function bubble(divs, div_sizes) {
    c_delay = 0;
    // delay_time=(10+(speed-1)*(-0.5));
    delay_time=10000/(Math.floor(n/10)*speed);
    console.log(speed, delay_time);
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            div_update(divs[2 * j + 1], div_sizes[j], "yellow"); //Color update

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[2 * j + 1], div_sizes[j], "red"); //Color update
                div_update(divs[2 * (j + 1) + 1], div_sizes[j + 1], "red"); //Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[2 * j + 1], div_sizes[j], "red"); //Height update
                div_update(divs[2 * (j + 1) + 1], div_sizes[j + 1], "red"); //Height update
            }
            div_update(divs[2 * j + 1], div_sizes[j], "blue"); //Color updat
        }
        div_update(divs[2 * j + 1], div_sizes[j], "green"); //Color update
    }
    div_update(divs[0], div_sizes[0], "green"); //Color update

    // enable_buttons();
}