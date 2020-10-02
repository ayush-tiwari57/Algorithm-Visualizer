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

function partition(divs, height, l, r){
    var p = l;
    var i = l;
    var j = r;
    while(i<=j)
    {
        while(height[p] >= height[i]){
        i++;
         div_update(divs[2*(i-1)+1], height[i-1],'black');
         div_update(divs[2*(i)+1], height[i],'black');
         
         div_update(divs[2*(i-1)+1], height[i-1],'#808080');
         div_update(divs[2*(i)+1], height[i],'#808080');
        }

        while(height[p] < height[j]){
        j--;
         div_update(divs[2*(j-1)+1], height[j-1],'red');
         div_update(divs[2*(j)+1], height[j],'red');
         
         div_update(divs[2*(j-1)+1], height[j-1],'#808080');
         div_update(divs[2*(j)+1], height[j],'#808080');
        }

        if(i < j)
        {
            var temp = height[i];
            height[i] = height[j];
            height[j] = temp;
        }
    }
    if(j!=p)
    {
        var temp = height[p];
            height[p] = height[j];
            height[j] = temp;
    }
    return j
}

function quicksort(divs,height, l, r){
    if(l<=r){
        div_update(divs[2*(l-1)+1], height[l-1],'yellow');
        div_update(divs[2*(l)+1], height[l],'yellow');
        
        div_update(divs[2*(r-1)+1], height[l-1],'blue');
        div_update(divs[2*(r)+1], height[l],'blue');
        
        var p = partition(divs,height,l,r);
        
        div_update(divs[2*(l-1)+1], height[l-1],'#808080');
        div_update(divs[2*(l)+1], height[l],'#808080');
        
        div_update(divs[2*(r-1)+1], height[l-1],'#808080');
        div_update(divs[2*(r)+1], height[l],'#808080');
        
        quicksort(divs,height,l,p-1)
        quicksort(divs,height,p+1,r);
        
        div_update(divs[2*(p-1)+1], height[p-1],"green");
        div_update(divs[2*(p)+1], height[p],'green');
    }
}

export function quick(divs, height) {
    delay_time=30000/(Math.floor(n/30)*speed);
    
    quicksort(divs,height,0,height.length-1);
}