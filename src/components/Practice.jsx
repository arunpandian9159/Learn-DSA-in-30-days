import React from "react";

const Practice = () => (
  <section id="practice" className="py-16">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-navy mb-4">Practice &amp; Interview Preparation</h2>
        <p className="text-xl text-charcoal/70">Consistent practice and strategic preparation</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Daily Practice Platforms */}
        <div className="resource-card bg-white p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Daily Practice Platforms</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-ivory/50 rounded">
              <i className="fab fa-python text-2xl text-navy"></i>
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal">LeetCode</h4>
                <p className="text-sm text-charcoal/70">Company-specific questions, discussion forums</p>
              </div>
              <a href="https://leetcode.com" target="_blank" className="text-gold hover:text-navy transition-colors">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-ivory/50 rounded">
              <i className="fas fa-code text-2xl text-navy"></i>
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal">HackerRank</h4>
                <p className="text-sm text-charcoal/70">DSA, mathematics, SQL challenges</p>
              </div>
              <a href="https://hackerrank.com" target="_blank" className="text-gold hover:text-navy transition-colors">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-ivory/50 rounded">
              <i className="fas fa-trophy text-2xl text-navy"></i>
              <div className="flex-1">
                <h4 className="font-semibold text-charcoal">CodeChef</h4>
                <p className="text-sm text-charcoal/70">Monthly contests, practice problems</p>
              </div>
              <a href="https://codechef.com" target="_blank" className="text-gold hover:text-navy transition-colors">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div className="mt-6 p-4 bg-sage/10 rounded">
            <h5 className="font-semibold text-navy mb-2">Daily Practice Goal</h5>
            <p className="text-sm text-charcoal/70">2-3 problems per day, focus on Easy &amp; Medium difficulty</p>
          </div>
        </div>
        {/* Interview Preparation */}
        <div className="resource-card bg-white p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Interview Strategy</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Common Interview Questions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-ivory/50 rounded">
                  <strong>Arrays &amp; Strings</strong>
                  <p className="text-charcoal/70 text-xs mt-1">Two pointers, sliding window</p>
                </div>
                <div className="p-3 bg-ivory/50 rounded">
                  <strong>Linked Lists</strong>
                  <p className="text-charcoal/70 text-xs mt-1">Cycle detection, reversal</p>
                </div>
                <div className="p-3 bg-ivory/50 rounded">
                  <strong>Trees &amp; Graphs</strong>
                  <p className="text-charcoal/70 text-xs mt-1">Traversals, path finding</p>
                </div>
                <div className="p-3 bg-ivory/50 rounded">
                  <strong>Dynamic Programming</strong>
                  <p className="text-charcoal/70 text-xs mt-1">Knapsack, subsequences</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-3">Preparation Resources</h4>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-book text-sage"></i>
                  <span>GeeksforGeeks Company Questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-comments text-sage"></i>
                  <span>LeetCode Discuss Sections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-users text-sage"></i>
                  <span>Mock Interviews with Peers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Practice Schedule */}
      <div className="bg-ivory/30 p-8 rounded-lg border border-navy/10">
        <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">30-Day Practice Schedule</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-white rounded border">
            <h4 className="font-semibold text-navy mb-2">Week 1-2</h4>
            <p className="text-sm text-charcoal/70">Core Data Structures</p>
            <div className="text-xs text-sage mt-2">Arrays, Lists, Stacks, Queues</div>
          </div>
          <div className="text-center p-4 bg-white rounded border">
            <h4 className="font-semibold text-navy mb-2">Week 3</h4>
            <p className="text-sm text-charcoal/70">Algorithms</p>
            <div className="text-xs text-sage mt-2">Sorting, Searching, Recursion</div>
          </div>
          <div className="text-center p-4 bg-white rounded border">
            <h4 className="font-semibold text-navy mb-2">Week 4</h4>
            <p className="text-sm text-charcoal/70">Advanced Topics</p>
            <div className="text-xs text-sage mt-2">Graphs, DP, Tries</div>
          </div>
          <div className="text-center p-4 bg-white rounded border">
            <h4 className="font-semibold text-navy mb-2">Contests</h4>
            <p className="text-sm text-charcoal/70">Weekly</p>
            <div className="text-xs text-sage mt-2">CodeChef, HackerEarth</div>
          </div>
          <div className="text-center p-4 bg-white rounded border">
            <h4 className="font-semibold text-navy mb-2">Mock Interviews</h4>
            <p className="text-sm text-charcoal/70">Final Week</p>
            <div className="text-xs text-sage mt-2">Peer reviews, Timed tests</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Practice; 