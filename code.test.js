const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

describe('dijkstra', () => {
    it('returns empty array for graph with less than 2 nodes', () => {
        const graph = { A: {} };
        const sourceNode = 'A';
        assert.deepStrictEqual(dijkstra(graph, sourceNode), []);
    });

    it('handles graph with disconnected nodes', () => {
        const graph = {
            A: { B: 1 },
            B: { A: 1 },
            C: { D: 1 },
            D: { C: 1 }
        };
        const sourceNode = 'A';
        const expectedDistances = {
            A: 0,
            B: 1,
            C: Infinity,
            D: Infinity
        };
        assert.deepStrictEqual(dijkstra(graph, sourceNode), expectedDistances);
    });

    it('calculates shortest paths for a graph', () => {
        const graph = {
            A: { B: 1, C: 4 },
            B: { A: 1, C: 2, D: 5 },
            C: { A: 4, B: 2, D: 1 },
            D: { B: 5, C: 1 }
        };
        const sourceNode = 'A';
        const expectedDistances = {
            A: 0,
            B: 1,
            C: 3,
            D: 4
        };
        assert.deepStrictEqual(dijkstra(graph, sourceNode), expectedDistances);
    });

    it('calculates shortest paths for a larger graph', () => {
        const graph = {
            A: { B: 2, C: 5 },
            B: { A: 2, C: 6, D: 1 },
            C: { A: 5, B: 6, D: 3 },
            D: { B: 1, C: 3, E: 1 },
            E: { D: 1 }
        };
        const sourceNode = 'A';
        const expectedDistances = {
            A: 0,
            B: 2,
            C: 5,
            D: 3,
            E: 4
        };
        assert.deepStrictEqual(dijkstra(graph, sourceNode), expectedDistances);
    });
});
