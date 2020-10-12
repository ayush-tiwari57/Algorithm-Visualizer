import {
    n,
    width,
    speed
} from "./main_sort.js";

var c_delay = 1;
var delay_time = 40 - 2*(speed - 1);

function div_update(cont, h, color) {
    setTimeout(function () {
        cont.style =
            " background:" + color + "; width:" + width + "%;" +
            "box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white; " +
            " height:" + h + "%;";
    }, c_delay += delay_time);
}


export function selection(divs, height) {
    c_delay = 0;
    delay_time=30000/(Math.floor(n/40)*speed); 
    for(var i=0; i<height.length;i++)
    {
        var s = i;
        var g = s;
        for(var j=i+1;j<height.length ;j++)
        {
            div_update(divs[2*(j)+1], height[j],'red');   
            div_update(divs[2*(j)+1], height[j],'#808080');
            if(height[j] < height[s])
            {
                s = j;
                g = s;
            }
        }
        div_update(divs[2*(s)+1], height[s],'blue');
        if(s != i)
        {
            var temp = height[s];
            height[s] = height[i];
            height[i] = temp
        }
        div_update(divs[2*(s)+1], height[s],'#808080');
        div_update(divs[2*(i)+1], height[i],'green');
        div_update(divs[2*(i-1)+1], height[i-1],'green');
    }
}