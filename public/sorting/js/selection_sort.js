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


export function selection(divs, height) {
    
    c_delay = 0;
    // delay_time = 40 - 2*(speed - 1);
    delay_time=10000/(Math.floor(n/30)*speed); 
    console.log(c_delay, delay_time);
    for (var i = 0; i < n ; i++) {
        let min=i;
        for (let j = 0; j < n ; j++) {
            if (height[j] < height[min]) {
                min=j
            } 
        }
        if(min!=i)
        {
            let temp=height[i]
            height[i]=height[min]
            height[min]=temp
        }
        div_update(divs[1], height[i], "green"); //Color update
        
    }
  

}