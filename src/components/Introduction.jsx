import React, { useRef, useEffect } from "react";
import useMermaidControls from "../hooks/useMermaidControls";

const Introduction = () => {
  const mermaidRef = useRef(null);
  useMermaidControls(mermaidRef);
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-navy mb-4">Your Journey Begins Here</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Master the fundamental concepts that will form the backbone of your DSA expertise
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-navy mb-6">What You'll Learn</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Core Data Structures</h4>
                  <p className="text-charcoal/70 text-sm">Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and more</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Essential Algorithms</h4>
                  <p className="text-charcoal/70 text-sm">Sorting, Searching, Recursion, Dynamic Programming, and Greedy Methods</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Complexity Analysis</h4>
                  <p className="text-charcoal/70 text-sm">Big O notation, Time and Space complexity optimization</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Python Environment Setup</h3>
            <div className="bg-ivory p-6 rounded-lg border border-navy/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fab fa-python text-2xl text-navy"></i>
                  <div>
                    <h4 className="font-semibold">Python 3.7+</h4>
                    <p className="text-sm text-charcoal/70">Download from python.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-code text-2xl text-navy"></i>
                  <div>
                    <h4 className="font-semibold">VS Code</h4>
                    <p className="text-sm text-charcoal/70">With Python extension</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-terminal text-2xl text-navy"></i>
                  <div>
                    <h4 className="font-semibold">Command Line</h4>
                    <p className="text-sm text-charcoal/70">Basic terminal proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DSA Fundamentals Diagram Placeholder */}
        <div className="bg-ivory/50 p-8 rounded-lg border border-navy/10">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">DSA Learning Progression</h3>
          <div className="mermaid-container" ref={mermaidRef}>
            {/* Mermaid diagram will be rendered here in a future step */}
            <div className="mermaid">[Mermaid Diagram Placeholder]</div>
          </div>
          <p className="text-center text-sm text-charcoal/60 mt-4">
            Interactive diagram showing the progression of topics throughout your 30-day journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 