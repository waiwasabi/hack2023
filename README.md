### Instructions
##### Graph Creation
**Node Tool**  <img src="https://github.com/waiwasabi/hack2023/assets/58406472/02abd2bd-55a1-4dda-a5b0-19f99822a377" width="20" height="20"> - Left click on any empty space to create a disconnected node


**Edge Tool**  <img src="https://github.com/waiwasabi/hack2023/assets/58406472/79e4991d-0bb0-49b5-9aed-fb2611a6a06d" width="20" height="20"> - Left click on any two nodes to create an edge between them, or delete the edge if one already exists 

**Eraser Tool** <img src="https://github.com/waiwasabi/hack2023/assets/58406472/186fd6fd-6f15-451c-a33e-3f453c5be1a9" width="20" height="20"> - Left click on any node to delete it.

##### Serialized Graph Generation
Trigger the **Generate** button to generate a serialized representation of the graph.

##### Graph Visualization
User input in the text editor is transformed into a JavaScript function, which can be used to run an algorithm on the graph in real-time. The user need not need include a class header, only the body of the following function:

``` ts
function traverse(graph: Graph): void {
	/* User input goes here */
}
```

At each step the user would like to visualize, **visit()** should be called on the node they would like highlighted. Additional documentation can be found below.

### Documentation
##### Graph object
The exposed `graph` variable is of type `graphology.Graph`. Please see https://graphology.github.io/ for relevant documentation.
``` ts
class Graph {
	/* Returns the array of all Node objects in the graph */
	getNodes(): GraphNode[];

	/* Returns the array of all Edge object in the graph */
	getEdges(): DirectedEdge[];

	/* Adds a new GraphNode object into the Graph */
	addNode(node: GraphNode): void;

	/* Adds a new Edge object between two pre-existing nodes */
	addEdge(from: GraphNode, to: GraphNode): void;
}
```

### Examples
Below are example use cases of the shell.

#### Basic Analysis
```ts
/* print the number of nodes in the graph */
console.log(graph.order);
```

```ts
/* print the order of a node in the graph */
console.log(graph.degreeWithoutSelfLoops("q"));
```

#### Traversal
```ts
/* Perform Breadth-First Search on the graph */
const visited = new Set();
const queue = ["q"];
while (queue.length) {
  const node = queue.shift();
  if (visited.has(node)) {
    continue;
  }
  visited.add(node);
  console.log(node);
  for (const neighbor of graph.neighbors(node)) {
    queue.push(neighbor);
  }
}
```

```ts
/* Perform Depth-First Search on the graph */
const visited = new Set();
  
function dfs(node) {
  visited.add(node);
  console.log("Visited node: " + node);

  graph.forEachNeighbor(node, (neighbor) => {
    if (!visited.has(neighbor)) {
      dfs(neighbor);
    }
  });
}

dfs("x");
```

