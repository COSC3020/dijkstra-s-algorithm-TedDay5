const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

function testDijkstra() {
    // Test 1: returns empty array for graph with less than 2 nodes
    let graph = { A: {} };
    let sourceNode = 'A';

    try {
        assert.deepStrictEqual(dijkstra(graph, sourceNode), []);
        console.log('Test 1 passed: returns empty array for graph with less than 2 nodes');
    } catch (error) {
        console.error('Test 1 failed:', error.message);
    }

    // Test 2: handles graph with disconnected nodes
    graph = {
        A: { B: 1 },
        B: { A: 1 },
        C: { D: 1 },
        D: { C: 1 }
    };
    sourceNode = 'A';
    let expectedDistances = {
        A: 0,
        B: 1,
        C: Infinity,
        D: Infinity
    };
    try {
        assert.deepStrictEqual(dijkstra(graph, sourceNode), expectedDistances);
        console.log('Test 2 passed: handles graph with disconnected nodes');
    } catch (error) {
        console.error('Test 2 failed:', error.message);
    }

    // Test 3: calculates shortest paths for a graph
    graph = {
        A: { B: 1, C: 4 },
        B: { A: 1, C: 2, D: 5 },
        C: { A: 4, B: 2, D: 1 },
        D: { B: 5, C: 1 }
    };
    sourceNode = 'A';
    expectedDistances = {
        A: 0,
        B: 1,
        C: 3,
        D: 4
    };
    try {
        assert.deepStrictEqual(dijkstra(graph, sourceNode), expectedDistances);
        console.log('Test 3 passed: calculates shortest paths for a graph');
    } catch (error) {
        console.error('Test 3 failed:', error.message);
    }

    // Test 4: calculates shortest paths for a larger graph
    graph = {
        A: { B: 2, C: 5 },
        B: { A: 2, C: 6, D: 1 },
        C: { A: 5, B: 6, D: 3 },
        D: { B: 1, C: 3, E: 1 },
        E: { D: 1 }
    };
    sourceNode = 'A';
    expectedDistances = {
        A: 0,
        B: 2,
        C: 5,
        D: 3,
        E: 4
    };
    try {
        assert.deepStrictEqual(dijkstra(graph, sourceNode), expectedDistances);
        console.log('Test 4 passed: calculates shortest paths for a larger graph');
    } catch (error) {
        console.error('Test 4 failed:', error.message);
    }
}

testDijkstra();
