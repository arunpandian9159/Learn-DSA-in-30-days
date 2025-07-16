import React from "react";

const Week3 = () => (
  <section id="week3" className="py-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-navy mb-4">Week 3: Core Algorithms</h2>
        <p className="text-xl text-charcoal/70">Master sorting, searching, and algorithm design paradigms</p>
      </div>
      {/* Sorting Algorithms Table */}
      <div className="bg-white p-8 rounded-lg border border-navy/10 mb-12 overflow-x-auto">
        <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">Sorting Algorithms Comparison</h3>
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-navy/10">
              <th className="text-left py-3 px-4 font-semibold text-navy">Algorithm</th>
              <th className="text-center py-3 px-4 font-semibold text-navy">Best Case</th>
              <th className="text-center py-3 px-4 font-semibold text-navy">Average</th>
              <th className="text-center py-3 px-4 font-semibold text-navy">Worst Case</th>
              <th className="text-center py-3 px-4 font-semibold text-navy">Space</th>
              <th className="text-center py-3 px-4 font-semibold text-navy">Stable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/5">
            <tr>
              <td className="py-3 px-4 font-medium">Bubble Sort</td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(1)</span></td>
              <td className="py-3 px-4 text-center text-sage"><i className="fas fa-check"></i></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Selection Sort</td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(1)</span></td>
              <td className="py-3 px-4 text-center text-red-500"><i className="fas fa-times"></i></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Insertion Sort</td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(1)</span></td>
              <td className="py-3 px-4 text-center text-sage"><i className="fas fa-check"></i></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Merge Sort</td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n)</span></td>
              <td className="py-3 px-4 text-center text-sage"><i className="fas fa-check"></i></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Quick Sort</td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n²)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(log n)</span></td>
              <td className="py-3 px-4 text-center text-red-500"><i className="fas fa-times"></i></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Heap Sort</td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(n log n)</span></td>
              <td className="py-3 px-4 text-center"><span className="complexity-badge px-2 py-1 rounded">O(1)</span></td>
              <td className="py-3 px-4 text-center text-red-500"><i className="fas fa-times"></i></td>
            </tr>
          </tbody>
        </table>
        <p className="text-center text-sm text-charcoal/60 mt-4">
          Python's built-in sort uses Timsort (hybrid of merge sort and insertion sort)
        </p>
      </div>
      {/* Algorithm Paradigms */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Searching */}
        <div className="resource-card bg-white p-6 rounded-lg">
          <div className="text-center mb-4">
            <i className="fas fa-search text-3xl text-navy mb-2"></i>
            <h3 className="font-serif text-xl font-semibold text-navy">Searching</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Linear Search</span>
              <span className="complexity-badge px-2 py-1 text-xs rounded">O(n)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Binary Search</span>
              <span className="complexity-badge px-2 py-1 text-xs rounded">O(log n)</span>
            </div>
          </div>
          <div className="tamil-resource p-3 rounded mt-4 cursor-pointer hover:bg-gold/10 transition-colors" data-youtube-url="https://www.youtube.com/watch?v=j5uXyPJ0Pew">
            <p className="text-sm font-medium text-charcoal mb-1">
              <i className="fas fa-video text-gold mr-2"></i>Tamil Resource
            </p>
            <p className="text-xs text-charcoal/70">Time &amp; Space Mastery: Searching Algorithms</p>
            <p className="text-xs text-gold/80 mt-1">
              <i className="fas fa-external-link-alt mr-1"></i>Click to watch video
            </p>
          </div>
        </div>
        {/* Recursion */}
        <div className="resource-card bg-white p-6 rounded-lg">
          <div className="text-center mb-4">
            <i className="fas fa-sync-alt text-3xl text-navy mb-2"></i>
            <h3 className="font-serif text-xl font-semibold text-navy">Recursion</h3>
          </div>
          <ul className="text-sm text-charcoal/70 space-y-2">
            <li>• Base case definition</li>
            <li>• Recursive case logic</li>
            <li>• Call stack management</li>
            <li>• Memoization optimization</li>
          </ul>
          <div className="tamil-resource p-3 rounded mt-4 cursor-pointer hover:bg-gold/10 transition-colors" data-youtube-url="https://www.youtube.com/watch?v=WbafSgetDDk">
            <p className="text-sm font-medium text-charcoal mb-1">
              <i className="fas fa-video text-gold mr-2"></i>Tamil Resource
            </p>
            <p className="text-xs text-charcoal/70">Letter Combinations, Stack Reversal</p>
            <p className="text-xs text-gold/80 mt-1">
              <i className="fas fa-external-link-alt mr-1"></i>Click to watch video
            </p>
          </div>
        </div>
        {/* Divide & Conquer */}
        <div className="resource-card bg-white p-6 rounded-lg">
          <div className="text-center mb-4">
            <i className="fas fa-code-branch text-3xl text-navy mb-2"></i>
            <h3 className="font-serif text-xl font-semibold text-navy">Divide &amp; Conquer</h3>
          </div>
          <ul className="text-sm text-charcoal/70 space-y-2">
            <li>• Problem decomposition</li>
            <li>• Merge Sort implementation</li>
            <li>• Quick Sort optimization</li>
            <li>• Subproblem combination</li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-4">
            <span className="complexity-badge px-2 py-1 text-xs rounded">Divide</span>
            <span className="complexity-badge px-2 py-1 text-xs rounded">Conquer</span>
            <span className="complexity-badge px-2 py-1 text-xs rounded">Combine</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Week3; 