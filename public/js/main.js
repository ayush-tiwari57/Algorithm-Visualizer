// importing functions
import { createBoard,changeStart,changeEnd } from './createGrid.js';
import { setWallAttribute } from './wall.js';
import { dijkstra, speed } from './pathFindingAlgorithms/dijkstra.js';

//variables
var refreshbtn = document.querySelector('.refresh');
var startbtn = document.querySelector('.start');
var container = document.querySelector('.container');
var speed_id = document.querySelector('speed');
// var speed_id = document.querySelector('#speed');
var algorithm = 'dijkstra';
export var mouseIsDown = false;

//Initializing eventListeners
refreshbtn.addEventListener('click', refresh);
startbtn.addEventListener('click', start);
// speed_id.addEventListener('click',speed)
container.addEventListener('click', function () {
	if (mouseIsDown) mouseIsDown = false;
	else mouseIsDown = true;
});
// container.addEventListener('mouseup', function(){mouseIsDown = false})
container.addEventListener('mouseover', setWallAttribute);

// refresh function
function refresh() {
	location.reload();
} // End refresh

// Start path-finding

function start() {
	if (algorithm === 'dijkstra') dijkstra(10,10,10,30);
} // End start

// Initialize
window.onload = () => {
	container.addEventListener('click', setWallAttribute);
	container.addEventListener('mouseover', setWallAttribute);
	document.querySelector('#speed').addEventListener('change', speed);
	createBoard();
	changeStart(10,10);
	changeEnd(10,30);
};
