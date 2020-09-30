import {
	rowsize,
	colsize,
	startCol,
	startRow,
	endCol,
	endRow,
} from './main.js';

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(max) {
	return (Math.random() * (max - 1)) % max;
} // End getRandomArbitrary

// Create a Node
function createNode(row, col, weight) {
	var node = document.createElement('div');
	node.setAttribute('class', 'before_start');
	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('wall', 0);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('weight', weight);
	node.innerText = weight.toString();
	return node;
} // End createNode

function updateNode(node, row, col, weight, wall) {

	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('weight', weight);
	node.setAttribute('class', 'before_start');
	node.innerText = weight.toString();
	if (wall == 1) {
		node.setAttribute('wall', 1);
		node.className+=' wall';
	}
	else node.setAttribute('wall', 0);
	return node;
}


function createEmptyNode(row, col) {
	var node = document.createElement('div');
	node.setAttribute('class', 'before_start');
	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('wall', 0);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('border', '1px solid black');
	return node;
}

function updateEmptyNode(node, row, col, wall) {

	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('border', '1px solid black');
	node.setAttribute('class', 'before_start');
	node.innerText = '';
	if (wall == 1) {
		node.setAttribute('wall', 1);
		node.className+=" wall";
	}
	else node.setAttribute('wall', 0);
	return node;
}

// Create Board and insert into HTML
export function createBoard() {
	var grid = document.querySelector('.container');
	grid.innerHTML = '';
	for (var row = 0; row < rowsize; row++) {
		for (var col = 0; col < colsize; col++) {
			let weight = Math.round(getRandomArbitrary(5));
			let temp = createNode(row, col, weight);
			grid.appendChild(temp);
		}
	}
}

export function createEmptyBoard() {
	var grid = document.querySelector('.container');
	grid.innerHTML = '';
	for (var row = 0; row < rowsize; row++) {
		for (var col = 0; col < colsize; col++) {
			let weight = 0;
			let temp = createEmptyNode(row, col);
			grid.appendChild(temp);
		}
	}
}
// Set start and end node
export function changeStart(x1 = 0, y1 = 0) {
	var startNode = document.querySelector(`div[row='${x1}'][col='${y1}']`);
	startNode.setAttribute('cost', 0);
	startNode.setAttribute('class', 'ends');
	startNode.innerHTML = 'S';
}
export function changeEnd(x2 = rowsize - 1, y2 = colsize - 1) {
	var endNode = document.querySelector(`div[row='${x2}'][col='${y2}']`);
	endNode.innerHTML = 'E';
	endNode.setAttribute('class', 'ends');
} // End createBoard

//refreshBoard
export function refreshBoard() {
	console.log("hello");
	for (var row = 0; row < rowsize; row++) {
		for (var col = 0; col < colsize; col++) {
			var node = document.querySelector(`div[row="${row}"][col="${col}"]`);
			let weight = Math.round(getRandomArbitrary(5));
			if (node.getAttribute('wall') == 1) updateNode(node, row, col, weight, 1);
			else updateNode(node, row, col, weight, 0);
		}
	}
	changeStart(startRow, startCol);
	changeEnd(endRow, endCol);
}

//refreshEmptyBoard
export function refreshEmptyBoard() {
	for (var row = 0; row < rowsize; row++) {
		for (var col = 0; col < colsize; col++) {
			var node = document.querySelector(`div[row="${row}"][col="${col}"]`);
			if (node.getAttribute('wall') == 1) updateEmptyNode(node, row, col, 1);
			else updateEmptyNode(node, row, col, 0);
			// node.style.background="transparent";
		}
	}
	changeStart(startRow, startCol);
	changeEnd(endRow, endCol);
}