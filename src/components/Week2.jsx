import React, { useRef } from "react";
import useMermaidControls from "../hooks/useMermaidControls";

const Week2 = () => {
  const mermaidRef = useRef(null);
  useMermaidControls(mermaidRef);
  return (
    <section id="week2" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-navy mb-4">Week 2: Core Data Structures</h2>
          <p className="text-xl text-charcoal/70">Master stacks, queues, trees, and hash tables</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stacks */}
          <div className="resource-card bg-ivory/50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-layer-group text-3xl text-navy mb-2"></i>
              <h3 className="font-serif text-lg font-semibold text-navy">Stacks</h3>
            </div>
            <ul className="text-sm text-charcoal/70 space-y-1 mb-4">
              <li>• LIFO Principle</li>
              <li>• Push/Pop Operations</li>
              <li>• O(1) Time Complexity</li>
              <li>• Parentheses Matching</li>
            </ul>
            <div className="tamil-resource p-2 rounded text-xs cursor-pointer hover:bg-gold/10 transition-colors" data-youtube-url="https://www.youtube.com/watch?v=sFVxsglODoo">
              JVL Code: Stack Implementation in Tamil
              <p className="text-xs text-gold/80 mt-1">
                <i className="fas fa-external-link-alt mr-1"></i>Click to watch video
              </p>
            </div>
          </div>
          {/* Queues */}
          <div className="resource-card bg-ivory/50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-stream text-3xl text-navy mb-2"></i>
              <h3 className="font-serif text-lg font-semibold text-navy">Queues</h3>
            </div>
            <ul className="text-sm text-charcoal/70 space-y-1 mb-4">
              <li>• FIFO Principle</li>
              <li>• Enqueue/Dequeue</li>
              <li>• BFS Applications</li>
              <li>• Priority Queues</li>
            </ul>
            <div className="tamil-resource p-2 rounded text-xs cursor-pointer hover:bg-gold/10 transition-colors" data-youtube-url="https://www.youtube.com/watch?v=okr-XE8yTO8">
              Time &amp; Space Mastery: Queue Tutorials
              <p className="text-xs text-gold/80 mt-1">
                <i className="fas fa-external-link-alt mr-1"></i>Click to watch video
              </p>
            </div>
          </div>
          {/* Trees */}
          <div className="resource-card bg-ivory/50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-sitemap text-3xl text-navy mb-2"></i>
              <h3 className="font-serif text-lg font-semibold text-navy">Trees</h3>
            </div>
            <ul className="text-sm text-charcoal/70 space-y-1 mb-4">
              <li>• Binary Trees</li>
              <li>• BST Operations</li>
              <li>• Tree Traversals</li>
              <li>• O(log n) Search</li>
            </ul>
            <div className="flex flex-wrap gap-1">
              <span className="complexity-badge px-2 py-1 text-xs rounded">Preorder</span>
              <span className="complexity-badge px-2 py-1 text-xs rounded">Inorder</span>
            </div>
          </div>
          {/* Hash Tables */}
          <div className="resource-card bg-ivory/50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-database text-3xl text-navy mb-2"></i>
              <h3 className="font-serif text-lg font-semibold text-navy">Hash Tables</h3>
            </div>
            <ul className="text-sm text-charcoal/70 space-y-1 mb-4">
              <li>• O(1) Average Case</li>
              <li>• Collision Resolution</li>
              <li>• Python dict implementation</li>
              <li>• Hashing Applications</li>
            </ul>
            <div className="flex flex-wrap gap-1">
              <span className="complexity-badge px-2 py-1 text-xs rounded">Chaining</span>
              <span className="complexity-badge px-2 py-1 text-xs rounded">Open Addressing</span>
            </div>
          </div>
        </div>
        {/* Tree Traversal Visualization */}
        <div className="bg-ivory/30 p-8 rounded-lg border border-navy/10">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">Tree Traversal Methods</h3>
          <div className="mermaid-container" ref={mermaidRef}>
            {/* Mermaid diagram will be rendered here in a future step */}
            <div className="mermaid">[Tree Traversal Diagram Placeholder]</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <h4 className="font-semibold text-navy mb-2">Preorder</h4>
              <p className="text-sm text-charcoal/70 bg-ivory p-3 rounded">5 → 3 → 1 → 4 → 8 → 7 → 9</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-navy mb-2">Inorder</h4>
              <p className="text-sm text-charcoal/70 bg-ivory p-3 rounded">1 → 3 → 4 → 5 → 7 → 8 → 9</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-navy mb-2">Postorder</h4>
              <p className="text-sm text-charcoal/70 bg-ivory p-3 rounded">1 → 4 → 3 → 7 → 9 → 8 → 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Week2; 