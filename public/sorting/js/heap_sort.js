import {
    n,
    width,
    speed
} from "./main_sort.js";

var c_delay = 1;
var delay_time = 40 - 2*(speed - 1);

function div_update(cont, h, color) {
    setTimeout(function(){
        cont.style =
            " background:" + color + "; width:" + width + "%;" +
            "box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white; " +
            " height:" + h + "%;";
    }, c_delay+=delay_time);
}


export function heap(divs, height) {
    
    // Write your code here

}