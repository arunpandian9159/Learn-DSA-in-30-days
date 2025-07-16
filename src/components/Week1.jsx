import React from "react";

const Week1 = () => (
  <section id="week1" className="py-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-navy mb-4">Week 1: Foundation</h2>
        <p className="text-xl text-charcoal/70">Master Python fundamentals and core DSA concepts</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Day 1-2 */}
        <div className="resource-card bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl font-semibold text-navy">Days 1-2</h3>
            <span className="px-3 py-1 bg-gold/20 text-xs rounded-full">Setup</span>
          </div>
          <h4 className="font-semibold text-charcoal mb-3">Python Environment &amp; Basics</h4>
          <ul className="space-y-2 text-sm text-charcoal/70 mb-4">
            <li>• Python installation and PATH setup</li>
            <li>• VS Code configuration</li>
            <li>• Variables, data types, control flow</li>
            <li>• Functions and scope</li>
          </ul>
          <div className="tamil-resource p-3 rounded cursor-pointer hover:bg-gold/10 transition-colors" data-youtube-url="https://www.youtube.com/watch?v=bum_19loj9A">
            <p className="text-sm font-medium text-charcoal mb-1">
              <i className="fas fa-video text-gold mr-2"></i>Tamil Resource
            </p>
            <p className="text-xs text-charcoal/70">JVL Code's Python DSA Overview</p>
            <p className="text-xs text-gold/80 mt-1">
              <i className="fas fa-external-link-alt mr-1"></i>Click to watch video
            </p>
          </div>
        </div>
        {/* Day 3-4 */}
        <div className="resource-card bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl font-semibold text-navy">Days 3-4</h3>
            <span className="px-3 py-1 bg-sage/20 text-xs rounded-full">Theory</span>
          </div>
          <h4 className="font-semibold text-charcoal mb-3">Complexity Analysis</h4>
          <ul className="space-y-2 text-sm text-charcoal/70 mb-4">
            <li>• Big O notation fundamentals</li>
            <li>• Time and space complexity</li>
            <li>• Common complexities: O(1), O(n), O(n²)</li>
            <li>• Algorithm efficiency comparison</li>
          </ul>
          <div className="flex flex-wrap gap-1">
            <span className="complexity-badge px-2 py-1 text-xs rounded">O(1)</span>
            <span className="complexity-badge px-2 py-1 text-xs rounded">O(log n)</span>
            <span className="complexity-badge px-2 py-1 text-xs rounded">O(n)</span>
          </div>
        </div>
        {/* Day 5-7 */}
        <div className="resource-card bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl font-semibold text-navy">Days 5-7</h3>
            <span className="px-3 py-1 bg-navy/10 text-xs rounded-full">Practice</span>
          </div>
          <h4 className="font-semibold text-charcoal mb-3">Arrays &amp; Linked Lists</h4>
          <ul className="space-y-2 text-sm text-charcoal/70 mb-4">
            <li>• Array implementation in Python</li>
            <li>• Linked list operations</li>
            <li>• Time complexity analysis</li>
            <li>• Common interview problems</li>
          </ul>
          <div className="tamil-resource p-3 rounded cursor-pointer hover:bg-gold/10 transition-colors" data-youtube-url="https://www.youtube.com/watch?v=Hj_rA0dhr2I">
            <p className="text-sm font-medium text-charcoal mb-1">
              <i className="fas fa-video text-gold mr-2"></i>Tamil Resource
            </p>
            <p className="text-xs text-charcoal/70">Time &amp; Space Mastery - Linked Lists</p>
            <p className="text-xs text-gold/80 mt-1">
              <i className="fas fa-external-link-alt mr-1"></i>Click to watch video
            </p>
          </div>
        </div>
      </div>
      {/* Big O Notation Visual */}
      <div className="bg-white p-8 rounded-lg border border-navy/10 mb-8">
        <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">Understanding Big O Notation</h3>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-ivory/50 rounded">
              <span className="font-medium">O(1) - Constant</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                <div className="bg-sage h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <span className="text-sm text-charcoal/60">Excellent</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-ivory/50 rounded">
              <span className="font-medium">O(log n) - Logarithmic</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                <div className="bg-sage h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-sm text-charcoal/60">Great</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-ivory/50 rounded">
              <span className="font-medium">O(n) - Linear</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                <div className="bg-gold h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-sm text-charcoal/60">Good</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-ivory/50 rounded">
              <span className="font-medium">O(n²) - Quadratic</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                <div className="bg-red-400 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-sm text-charcoal/60">Poor</span>
            </div>
          </div>
          <p className="text-center text-sm text-charcoal/60 mt-4">
            Visual representation of time complexity growth rates
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Week1; 