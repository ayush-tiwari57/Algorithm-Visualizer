// importing functions
import { createBoard,changeStart,changeEnd } from './createGrid.js';
import { setWallAttribute } from './wall.js';
import { dijkstra, speed } from './pathFindingAlgorithms/dijkstra.js';

//variables
var refreshbtn = document.querySelector('.refresh');
var startbtn = document.querySelector('.start');
var container = document.querySelector('.container');
var speed_id = document.querySelector('speed');

// export variables
export var rowsize = 20;
export var colsize = 40;
export var startRow = 10;
export var endRow = 10;
export var startCol = 10;
export var endCol = 30;
export var algorithm = 'dijkstra';
export var mouseIsDown = false;	

//Initializing eventListeners
refreshbtn.addEventListener('click', refresh);
startbtn.addEventListener('click', start);
// speed_id.addEventListener('click',speed)
container.addEventListener('mousedown', function () {mouseIsDown = true});
container.addEventListener('mouseup', function () {mouseIsDown = false});
// container.addEventListener('mouseup', function(){mouseIsDown = false})
container.addEventListener('mouseover', setWallAttribute);

// refresh function
function refresh() {
	location.reload();
} // End refresh

// Start path-finding

function start() {
	if (algorithm === 'dijkstra') dijkstra(startRow,startCol,endRow,endCol);
} // End start

// Initialize
window.onload = () => {
	container.addEventListener('mousedown', setWallAttribute);
	container.addEventListener('mouseup', setWallAttribute);
	container.addEventListener('mouseover', setWallAttribute);
	document.querySelector('#speed').addEventListener('change', speed);
	createBoard();
	changeStart(10,10);
	changeEnd(10,30);
};
