import React from "react";

const Week4 = () => (
  <section id="week4" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-navy mb-4">Week 4: Advanced Topics</h2>
        <p className="text-xl text-charcoal/70">Master graphs, dynamic programming, and interview preparation</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Graph Algorithms */}
        <div className="resource-card bg-ivory/50 p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Graph Algorithms</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Graph Representations</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded border">
                  <strong>Adjacency Matrix</strong>
                  <p className="text-charcoal/70 mt-1">O(1) edge lookup<br/>O(V²) space</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <strong>Adjacency List</strong>
                  <p className="text-charcoal/70 mt-1">O(degree(V)) lookup<br/>O(V+E) space</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Traversal Algorithms</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <div>
                    <strong>Breadth-First Search (BFS)</strong>
                    <p className="text-xs text-charcoal/70">Queue-based, shortest path finding</p>
                  </div>
                  <span className="complexity-badge px-2 py-1 text-xs rounded">O(V+E)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <div>
                    <strong>Depth-First Search (DFS)</strong>
                    <p className="text-xs text-charcoal/70">Stack-based, cycle detection</p>
                  </div>
                  <span className="complexity-badge px-2 py-1 text-xs rounded">O(V+E)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dynamic Programming */}
        <div className="resource-card bg-ivory/50 p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Dynamic Programming</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Key Concepts</h4>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check-circle text-sage mt-0.5"></i>
                  <span><strong>Overlapping Subproblems:</strong> Store results to avoid recomputation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check-circle text-sage mt-0.5"></i>
                  <span><strong>Optimal Substructure:</strong> Optimal solution from subproblem solutions</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Implementation Approaches</h4>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border">
                  <strong>Memoization (Top-Down)</strong>
                  <p className="text-xs text-charcoal/70 mt-1">Recursive with memory, easier to implement</p>
                </div>
                <div className="p-3 bg-white rounded border">
                  <strong>Tabulation (Bottom-Up)</strong>
                  <p className="text-xs text-charcoal/70 mt-1">Iterative table filling, space-optimized</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Common Problems</h4>
              <div className="flex flex-wrap gap-2">
                <span className="complexity-badge px-2 py-1 text-xs rounded">0/1 Knapsack</span>
                <span className="complexity-badge px-2 py-1 text-xs rounded">LCS</span>
                <span className="complexity-badge px-2 py-1 text-xs rounded">LIS</span>
                <span className="complexity-badge px-2 py-1 text-xs rounded">Edit Distance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Advanced Data Structures */}
      <div className="bg-ivory/30 p-8 rounded-lg border border-navy/10">
        <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">Advanced Data Structures</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <i className="fas fa-tree text-4xl text-navy mb-4"></i>
            <h4 className="font-semibold text-navy mb-2">Tries (Prefix Trees)</h4>
            <p className="text-sm text-charcoal/70 mb-3">Efficient string storage and prefix matching</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Search:</span>
                <span className="complexity-badge px-1 rounded">O(m)</span>
              </div>
              <div className="flex justify-between">
                <span>Insert:</span>
                <span className="complexity-badge px-1 rounded">O(m)</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <i className="fas fa-chart-bar text-4xl text-navy mb-4"></i>
            <h4 className="font-semibold text-navy mb-2">Segment Trees</h4>
            <p className="text-sm text-charcoal/70 mb-3">Range queries and updates in O(log n)</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Query:</span>
                <span className="complexity-badge px-1 rounded">O(log n)</span>
              </div>
              <div className="flex justify-between">
                <span>Update:</span>
                <span className="complexity-badge px-1 rounded">O(log n)</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <i className="fas fa-memory text-4xl text-navy mb-4"></i>
            <h4 className="font-semibold text-navy mb-2">Bit Manipulation</h4>
            <p className="text-sm text-charcoal/70 mb-3">Fast operations using bitwise operators</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>AND/OR/XOR:</span>
                <span className="complexity-badge px-1 rounded">O(1)</span>
              </div>
              <div className="flex justify-between">
                <span>Shifts:</span>
                <span className="complexity-badge px-1 rounded">O(1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Week4; 