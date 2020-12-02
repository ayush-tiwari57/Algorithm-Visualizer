// dijkstra algorithm

// importing functions
import {
	setWallAttribute
} from '../wall.js';
import {
	rowsize,
	colsize,
} from '../main.js';
// variables
var container = document.querySelector('.container');
var slider = document.getElementById("speed");
var time = slider.value;
// console.log(time);

// Check and update node
function check(row, col) {
	if (row >= 0 && col >= 0 && row < rowsize && col < colsize) return true;
	return false;
}
let fl=false;
function traverse(node, seen, counter, endnode) {
	let row = parseInt(node.getAttribute('row'));
	let col = parseInt(node.getAttribute('col'));
	if(fl || node==endnode) {
		fl=true;
		return;
	}
	let wall = parseInt(node.getAttribute('wall'));
	if (wall == 1) return;
	seen.push(node);
	changeColor(node, counter);

	// Check up down left right
	let cr = row, cc = col;

	if (check(cr + 1, cc)) {
		var child = document.querySelector(`div[row="${cr + 1}"][col="${cc}"]`);
		if (!seen.includes(child)) traverse(child, seen, counter + 1, endnode);
	}
	if (check(cr, cc + 1)) {
		var child = document.querySelector(`div[row="${cr}"][col="${cc + 1}"]`);
		if (!seen.includes(child)) traverse(child, seen, counter + 1, endnode);
	}
	if (check(cr - 1, cc)) {
		var child = document.querySelector(`div[row="${cr - 1}"][col="${cc}"]`);
		if (!seen.includes(child)) traverse(child, seen, counter + 1, endnode);
	}
	if (check(cr, cc - 1)) {
		var child = document.querySelector(`div[row="${cr}"][col="${cc - 1}"]`);
		if (!seen.includes(child)) traverse(child, seen, counter + 1, endnode);
	}
}

// Animate the nodes
function changeColor(node, counter) {
	setTimeout(() => {
		node.setAttribute('class', 'Path_green');
		node.innerHTML = counter;

	}, counter * time);
	setTimeout(() => {
		node.setAttribute('class', 'Path_red');
	}, counter * time + 100);
} // End changeColor

export function dfs(x1 = 0, y1 = 0, x2 = rowsize - 1, y2 = colsize - 1) {
	time = slider.value;
	time = 40 + (time - 1) * (-2);
	container.removeEventListener('mousedown', setWallAttribute);
	container.removeEventListener('mouseover', setWallAttribute);
	var startNode = document.querySelector(`div[row='${x1}'][col='${y1}']`);
	var endNode = document.querySelector(`div[row='${x2}'][col='${y2}']`);
	// Hide button
	var btn = document.querySelector('.start');
	var refreshBtn = document.querySelector('.refresh');
	btn.style.visibility = 'hidden';
	refreshBtn.style.visibility = 'hidden';

	/* ################################### Algo here ############################3*/

	var seen = [];
	let counter = 1;
	fl=false;
	traverse(startNode, seen, counter, endNode);

	// Draw out best route
	setTimeout(() => {
		startNode.setAttribute('class', 'ends')
		while (endNode.getAttribute('parent') != 'null') {
			endNode.setAttribute('class', 'Path_green')
			var coor = endNode.getAttribute('parent').split('|');
			var prow = parseInt(coor[0]);
			var pcol = parseInt(coor[1]);
			endNode = document.querySelector(`div[row="${prow}"][col="${pcol}"]`);
		}
		endNode = document.querySelector(`div[row="${x2}"][col="${y2}"]`);
		endNode.setAttribute('class', 'ends');
	}, counter * time + 100);
	// Show refresh button again
	setTimeout(() => {
		refreshBtn.style.visibility = 'visible';
	}, counter * time + 100);
} // End start