const dijkstra = require("./dijkstra");
const fs = require("fs");

const vertices = 5;
const arestas = [
    [1, 2, 3],
    [1, 3, 2],
    [1, 5, 3],
    [2, 5, 1],
    [2, 4, 4],
    [3, 5, 2],
    [3, 4, 3],
    [4, 5, 1],
];

dijkstra(vertices, arestas, "in", "out")

