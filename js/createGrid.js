// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
} // End getRandomArbitrary

// Create a Node
function createNode(row, col, weight) {
	var node = document.createElement('div');
	node.setAttribute('class', 'node');
	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('weight', weight);
	node.innerText = weight.toString();
	return node;
} // End createNode

// Create Board and insert into HTML
export function createBoard() {
	var grid = document.querySelector('.container');
	grid.innerHTML = '';
	for (var row = 0; row < 10; row++) {
		for (var col = 0; col < 10; col++) {
			let weight = Math.round(getRandomArbitrary(1, 100));
			let temp = createNode(row, col, weight);
			let shadow = weight / 10;
			// temp.style.boxShadow = `${shadow}px ${shadow}px ${shadow}px rgba(0,0,0,0.8)`;
			grid.appendChild(temp);
		}
	}

	// Set start and end node
	var startNode = document.querySelector("div[row='0'][col='0']");
	var endNode = document.querySelector("div[row='9'][col='9']");
	startNode.setAttribute('cost', 0);
	startNode.innerHTML = 'start';
	endNode.innerHTML = 'end';
	// startNode.style.boxShadow = `${0}px ${0}px ${0}px rgba(0,0,0,0.5)`;
} // End createBoard
