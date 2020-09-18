function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}
Graph.prototype.reset = function () {
  this.nodes.map((n) => {
    n.searched = false;
    n.parent = null;
  });
};
Graph.prototype.addNode = function (n) {
  // node into array
  this.nodes.push(n);
  let title = n.value;
  //node into hash
  this.graph[title] = n;
};

Graph.prototype.getNode = function (actor) {
  let n = this.graph[actor];
  return n;
};

Graph.prototype.setEnd = function (actor) {
  this.end = this.graph[actor];
  return this.end;
};
Graph.prototype.setStart = function (actor) {
  this.start = this.graph[actor];
  return this.start;
};
