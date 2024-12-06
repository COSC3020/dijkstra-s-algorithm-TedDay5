function dijkstra(graph, sourceNode) {
    if(Object.keys(graph).length < 2) {
        return [];
    }
    let distance = {};
    let unvisted = new Set(Object.keys(graph));

    for(let node in graph) {
        distance[node] = Infinity;
    }
    distance[sourceNode] = 0;
    

    while(unvisted.size > 0) {
        let closeNode = null;
        let minimum = Infinity;

        for(let node of unvisted) {
            if(distance[node] <= minimum) {
                closeNode = node;
                minimum = distance[node];
            }
        }
        unvisted.delete(closeNode);
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
