//Wall
import { mouseIsDown, startCol, startRow, endCol, endRow } from './main.js';


// function for setting wall attribute
export function setWallAttribute(event) {
	if (mouseIsDown) {
		if (event.target.classList.contains('before_start')) {
			let node = document.querySelector('.before_start');
			const row = event.target.getAttribute('row');
			const col = event.target.getAttribute('col');
			// console.log('clicked');
			// console.log(row,col)
			// console.log(startCol,startCol)
			if((row==startRow && col==startCol) || (endRow==row && endCol==col)){
				window.alert('cannot make wall on start node or end node');
			}
			else{
				event.target.classList.toggle('wall');
				if (event.target.classList.contains('wall')) {
					event.target.setAttribute('wall', 1);
				} else {
					event.target.setAttribute('wall', 0);
				}
			}
		}
	}
}

//End Wall
