// importing functions
import { createBoard } from './createGrid.js';
import { setWallAttribute } from './wall.js';
import { dijkstra } from './pathFindingAlgorithms/dijkstra.js';

//variables
var refreshbtn = document.querySelector('.refresh');
var startbtn = document.querySelector('.start');
var container = document.querySelector('.container');
var algorithm = 'dijkstra';
export var mouseIsDown = false;

//Initializing eventListeners
refreshbtn.addEventListener('click', refresh);
startbtn.addEventListener('click', start);
container.addEventListener('click', function(){
	if(mouseIsDown){
		mouseIsDown =false;
	}
	else{
		mouseIsDown = true;
	}
	console.log(mouseIsDown);
})
// container.addEventListener('mouseup', function(){mouseIsDown = false})
container.addEventListener('mouseover', setWallAttribute);

// refresh function
function refresh() {
	container.addEventListener('click', setWallAttribute);
	var btn = document.querySelector('.start');
	btn.style.visibility = 'visible';
	createBoard();
} // End refresh


// Start path-finding
function start() {
	if(algorithm==='dijkstra') dijkstra();
} // End start

// Initialize
window.onload = () => {
	container.addEventListener('click', setWallAttribute);
	createBoard();
};
