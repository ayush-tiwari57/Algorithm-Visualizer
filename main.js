// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
} // End getRandomArbitrary

// Create a Node
function createNode(row, col, weight) {
  var node = document.createElement("div");
  node.setAttribute("class", "node");
  node.setAttribute("row", row);
  node.setAttribute("col", col);
  node.setAttribute("cost", Number.POSITIVE_INFINITY);
  node.setAttribute("parent", null);
  node.setAttribute("weight", weight);
  node.innerText = weight.toString();
  return node;
} // End createNode

// Create Board and insert into HTML
function createBoard() {
  var grid = document.querySelector(".container");
  grid.innerHTML = "";
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
  startNode.setAttribute("cost", 0);
  startNode.innerHTML = "start";
  endNode.innerHTML = "end";
  // startNode.style.boxShadow = `${0}px ${0}px ${0}px rgba(0,0,0,0.5)`;
} // End createBoard

//Wall

var container = document.querySelector('.container');
document.addEventListener('click', (event) => {
  console.log(event);
  // console.log(event.explicit   );
  if (event.target.classList.contains('node')) {
    let node = this.document.querySelector('.node')
    const row = event.target.getAttribute("row");
    const col = event.target.getAttribute("col");
    event.target.classList.toggle('wall');
    console.log('clicked');
  }
  if (event.target.classList.contains('wall')) {
    event.target.setAttribute('wall', 1)
  } else {
    event.target.setAttribute('wall', 0)
  }
})


//End Wall
// Refresh Button
function refresh() {
  var btn = document.querySelector(".start");
  btn.style.visibility = "visible";
  createBoard();
} // End refresh

// Check and update node
function checkNode(row, col, curr, checker, seen, counter) {
  if (row >= 0 && col >= 0 && row <= 9 && col <= 9) {
    var node = document.querySelector(`div[row="${row}"][col="${col}"]`);
    let wall = parseInt(node.getAttribute("wall"));
    console.log(wall);
    if (wall != 1) {
      var cost = Math.min(
        parseInt(curr.getAttribute("cost")) +
        parseInt(node.getAttribute("weight")),
        node.getAttribute("cost")
      );
      if (cost < node.getAttribute("cost")) {
        node.setAttribute(
          "parent",
          curr.getAttribute("row") + "|" + curr.getAttribute("col")
        );
        node.setAttribute("cost", cost);
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
    node.style.backgroundColor = "#00FF00";
    if (cost) {
      node.innerHTML = cost;
    }
  }, counter * 100);
  setTimeout(() => {
    node.style.backgroundColor = "#DC143C";
    node.style.color = "#ffffff";
  }, counter * 100 + 100);
} // End changeColor

// Start path-finding
function start() {
  var startNode = document.querySelector("div[row='0'][col='0']");
  var endNode = document.querySelector("div[row='9'][col='9']");
  // Hide button
  var btn = document.querySelector(".start");
  var refreshBtn = document.querySelector(".refresh");
  btn.style.visibility = "hidden";
  refreshBtn.style.visibility = "hidden";
  // Algo here
  var seen = [startNode];
  var checker = [startNode];
  var counter = 1;
  while (checker.length != 0) {
    checker.sort(function (a, b) {
      if (parseInt(a.getAttribute("cost")) < parseInt(b.getAttribute("cost"))) {
        return 1;
      }
      if (parseInt(a.getAttribute("cost")) > parseInt(b.getAttribute("cost"))) {
        return -1;
      }
      return 0;
    });
    let curr = checker.pop();
    // Important to parse string to integer
    //   console.log(curr);
    let row = parseInt(curr.getAttribute("row"));
    let col = parseInt(curr.getAttribute("col"));
    let wall = parseInt(curr.getAttribute("wall"));
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
    startNode.style.backgroundColor = "#00FF00";
    startNode.style.color = "#000000";
    while (endNode.getAttribute("parent") != "null") {
      endNode.style.backgroundColor = "#00FF00";
      endNode.style.color = "#000000";
      var coor = endNode.getAttribute("parent").split("|");
      var prow = parseInt(coor[0]);
      var pcol = parseInt(coor[1]);
      endNode = document.querySelector(`div[row="${prow}"][col="${pcol}"]`);
    }
  }, counter * 100 + 100);
  // Show refresh button again
  setTimeout(() => {
    refreshBtn.style.visibility = "visible";
  }, counter * 100 + 100);
} // End start

// Initialize
window.onload = () => {
  createBoard();
  // document.querySelectorAll("button")[2].click();
};