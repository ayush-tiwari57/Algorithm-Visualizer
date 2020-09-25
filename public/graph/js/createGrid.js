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
	node.setAttribute('class', 'node');
	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('wall', 0);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('weight', weight);
	node.innerText = weight.toString();
	return node;
} // End createNode

function createEmptyNode(row, col) {
	var node = document.createElement('div');
	node.setAttribute('class', 'node');
	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('wall', 0);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('border', '1px solid black');
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
	startNode.innerHTML = 'S';
	startNode.style.background = '#26466D';
	startNode.style.color = '#ffffff';
	startNode.style.fontWeight = 'bolder';
}
export function changeEnd(x2 = rowsize - 1, y2 = colsize - 1) {
	var endNode = document.querySelector(`div[row='${x2}'][col='${y2}']`);
	endNode.innerHTML = 'E';
	endNode.style.background = '#26466D';
	endNode.style.color = '#ffffff';
	endNode.style.fontWeight = 'bolder';
} // End createBoard

//refreshBoard
export function refreshBoard() {
	for (var row = 0; row < rowsize; row++) {
		for (var col = 0; col < colsize; col++) {
			var node = document.querySelector(`div[row="${row}"][col="${col}"]`);
			if (node.getAttribute('wall') == 1) continue;
			node.setAttribute('cost', Number.POSITIVE_INFINITY);
			node.setAttribute('parent', null);
			let weight = Math.round(getRandomArbitrary(5));
			node.setAttribute('weight', weight);
			node.innerHTML = weight.toString();
			node.style.background="transparent";
			node.style.color="black";
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
			if (node.getAttribute('wall') == 1) continue;
			node.setAttribute('cost', Number.POSITIVE_INFINITY);
			node.setAttribute('parent', null);
			let weight = 0;
			node.setAttribute('weight', weight);
			node.innerHTML = '';
			node.style.background="transparent";
		}
	}
	changeStart(startRow, startCol);
	changeEnd(endRow, endCol);
}
