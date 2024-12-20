# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The big $\Theta$ complexity: $\Theta(n^2)$

The while loop iterates until unvisited is empty (maximum of $n$ iterations).
The first for loop iterates across every vertex until it finds the closest vertex (maximum of $n$ iterations) in unvisted and remove it (constant).
The second for loop iterates through all edges of the closet node to find the smallest weight path (maximum of $n - 1$ edges).
$2n^2 - n$ so it's bounded by $n^2$ since it's the leading term.
