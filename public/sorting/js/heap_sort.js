import {
    n,
    width,
    speed
} from "./main_sort.js";

var c_delay = 1;
var delay_time = 40 - 2 * (speed - 1);

export function heap(divs, height) {
    c_delay = 50;
    delay_time = 10000 / (Math.floor(n / 30) * speed);
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(divs, height, n, i);
    let len = n;
    for (let i = n - 1; i > 0; i--) {
        div_update(divs[2 * 0 + 1], height[0], "#red");

        [height[0], height[i]] = [height[i], height[0]];

        //Color update    
        heapify(divs, height, --len, 0);
        div_update(divs[2 * i + 1], height[i], "green");

    }
    div_update(divs[2 * 0 + 1], height[0], "green");
}

//build a max heap
/** 
 *@params 
 * height: the array
 * size: size of the new heap to be built
 * start: starting point
 * 
 */
function heapify(divs, arr, size, start) {
    let max = start, left = start * 2 + 1, right = start * 2 + 2;
    div_update(divs[2 * start + 1], arr[start], "red");
    if (left < size && arr[max] < arr[left])
        max = left;

    if (right < size && arr[max] < arr[right])
        max = right;

    if (max != start) {
        [arr[max], arr[start]] = [arr[start], arr[max]];
        div_update(divs[2 * start + 1], arr[start], "red");
        div_update(divs[2 * max + 1], arr[max], "#808080");
        heapify(divs, arr, size, max);
    }
}


function div_update(cont, h, color) {
    setTimeout(function () {
        cont.style =
            " background:" + color + "; width:" + width + "%;" +
            "box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white; " +
            " height:" + h + "%;";
    }, c_delay += delay_time);
}
