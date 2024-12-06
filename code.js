function dijkstra(graph, sourceNode) {
    if(Object.keys(graph).length < 2) {
        return [];
    }
    let distance = {};
    let unvisited = new Set(Object.keys(graph));

    for(let node in graph) {
        distance[node] = Infinity;
    }
    distance[sourceNode] = 0;
    

    while(unvisited.size > 0) {
        let closeNode = null;
        let minimum = Infinity;

        for(let node of unvisited) {
            if(distance[node] <= minimum) {
                closeNode = node;
                minimum = distance[node];
            }
        }
        unvisited.delete(closeNode);
        for(let neighbor in graph[closeNode]) {
            let edgeWeight = graph[closeNode][neighbor];
            let newDistance = distance[closeNode] + edgeWeight;

            if(newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
            }
        }
    }
    return distance;
}
