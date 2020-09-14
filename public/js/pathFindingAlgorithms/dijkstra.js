// dijkstra algorithm

// importing functions
import { setWallAttribute } from '../wall.js';

// variables
var container = document.querySelector('.container');

// Check and update node
function checkNode(row, col, curr, checker, seen, counter) {
	if (row >= 0 && col >= 0 && row <= 19 && col <= 49) {
		var node = document.querySelector(`div[row="${row}"][col="${col}"]`);
		let wall = parseInt(node.getAttribute('wall'));
		// console.log(wall);
		if (wall != 1) {
			var cost = Math.min(
				parseInt(curr.getAttribute('cost')) +
					parseInt(node.getAttribute('weight')),
				node.getAttribute('cost')
			);
			if (cost < node.getAttribute('cost')) {
				node.setAttribute(
					'parent',
					curr.getAttribute('row') + '|' + curr.getAttribute('col')
				);
				node.setAttribute('cost', cost);
			}

			changeColor(node, counter, cost);
			changeColor(curr, counter, false);
		}
		if (!seen.includes(node)) {
			checker.push(node);
		}
		seen.push(node);
		return node;
	} else {
		return false;
	}
} // End checkNode

// Animate the nodes
function changeColor(node, counter, cost) {
	setTimeout(() => {
		node.style.backgroundColor = '#00FF00';
		if (cost) {
			node.innerHTML = cost;
		}
	}, counter * 10);
	setTimeout(() => {
		node.style.backgroundColor = '#DC143C';
		node.style.color = '#ffffff';
	}, counter * 10 + 100);
} // End changeColor

export function dijkstra() {
	container.removeEventListener('click', setWallAttribute);
	var startNode = document.querySelector("div[row='0'][col='0']");
	var endNode = document.querySelector("div[row='19'][col='49']");
	// Hide button
	var btn = document.querySelector('.start');
	var refreshBtn = document.querySelector('.refresh');
	btn.style.visibility = 'hidden';
	refreshBtn.style.visibility = 'hidden';
	// Algo here
	var seen = [startNode];
	var checker = [startNode];
	var counter = 1;
	while (checker.length != 0) {
		checker.sort(function (a, b) {
			if (parseInt(a.getAttribute('cost')) < parseInt(b.getAttribute('cost'))) {
				return 1;
			}
			if (parseInt(a.getAttribute('cost')) > parseInt(b.getAttribute('cost'))) {
				return -1;
			}
			return 0;
		});
		let curr = checker.pop();
		// Important to parse string to integer
		//   console.log(curr);
		let row = parseInt(curr.getAttribute('row'));
		let col = parseInt(curr.getAttribute('col'));
		let wall = parseInt(curr.getAttribute('wall'));
		if (wall == 1) continue;
		// Check up down left right
		let nextRow = row + 1;
		let prevRow = row - 1;
		let leftCol = col - 1;
		let rightCol = col + 1;
		let a = checkNode(nextRow, col, curr, checker, seen, counter);
		let b = checkNode(prevRow, col, curr, checker, seen, counter);
		let c = checkNode(row, leftCol, curr, checker, seen, counter);
		let d = checkNode(row, rightCol, curr, checker, seen, counter);
		counter++;
	}

	// Draw out best route
	setTimeout(() => {
		startNode.style.backgroundColor = '#00FF00';
		startNode.style.color = '#000000';
		while (endNode.getAttribute('parent') != 'null') {
			endNode.style.backgroundColor = '#00FF00';
			endNode.style.color = '#000000';
			var coor = endNode.getAttribute('parent').split('|');
			var prow = parseInt(coor[0]);
			var pcol = parseInt(coor[1]);
			endNode = document.querySelector(`div[row="${prow}"][col="${pcol}"]`);
		}
	}, counter * 10 + 100);
	// Show refresh button again
	setTimeout(() => {
		refreshBtn.style.visibility = 'visible';
	}, counter * 10 + 100);
} // End start
