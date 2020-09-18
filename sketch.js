let data;
let graph;
let dropdown;

function preload() {
  data = loadJSON("kevinbacon.json");
}

function setup() {
  graph = new Graph();
  noCanvas();
  let movies = data.movies;
  // console.log(movies);

  movies.map((mov) => {
    let movie = mov.title;
    let cast = mov.cast;
    let movieNode = new Node(movie);
    graph.addNode(movieNode);

    cast.map((actor) => {
      let actorNode = graph.getNode(actor);
      if (actorNode == undefined) {
        actorNode = new Node(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    });
  });
}

function bfs() {
  graph.reset();
  let start = graph.setStart(dropdown.value);
  let end = graph.setEnd("Kevin Bacon");

  console.log(graph);

  let queue = [];
  start.searched = true;
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();
    if (current == end) {
      console.log("Found " + current.value);
      break;
    }
    let edges = current.edges;
    edges.map((e) => {
      let neighbor = e;
      if (!neighbor.searched) {
        neighbor.searched = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    });
  }
  let path = [];
  path.push(end);
  let next = end.parent;
  while (next != null) {
    path.push(next);
    next = next.parent;
  }
  let txt = "";
  for (let i = path.length - 1; i >= 0; i--) {
    let n = path[i];
    txt += n.value + "-->";
  }
  createP(txt);
}
