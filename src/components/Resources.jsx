import React from "react";

const Resources = () => (
  <section id="resources" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-navy mb-4">Tamil Learning Resources</h2>
        <p className="text-xl text-charcoal/70">Curated Tamil video resources and tutorials</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Primary Tamil Resources */}
        <div className="resource-card bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-lg border border-gold/20">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6">Primary Video Channels</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-play text-gold"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-navy mb-1">Time &amp; Space Mastery</h4>
                <p className="text-sm text-charcoal/70 mb-2">By Pradeep B - Comprehensive DSA coverage</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gold/20 text-xs rounded">Linked Lists</span>
                  <span className="px-2 py-1 bg-gold/20 text-xs rounded">Recursion</span>
                  <span className="px-2 py-1 bg-gold/20 text-xs rounded">Interview Prep</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-code text-sage"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-navy mb-1">JVL Code</h4>
                <p className="text-sm text-charcoal/70 mb-2">Python DSA tutorials and quick guides</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sage/20 text-xs rounded">Quick Overviews</span>
                  <span className="px-2 py-1 bg-sage/20 text-xs rounded">Stack Tutorials</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-puzzle-piece text-navy"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-navy mb-1">Vyshnav Karun Somasundaram</h4>
                <p className="text-sm text-charcoal/70 mb-2">LeetCode problem explanations</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-navy/10 text-xs rounded">Stack Problems</span>
                  <span className="px-2 py-1 bg-navy/10 text-xs rounded">Placement Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Strategy */}
        <div className="resource-card bg-ivory/50 p-8 rounded-lg">
          <h3 className="font-serif text-2xl font-semibold text-navy mb-6">YouTube Search Strategy</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded border">
              <h4 className="font-semibold text-charcoal mb-2">Search Queries for Specific Topics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-ivory/30 rounded">
                  <code className="text-navy">"Tamil DSA linked list"</code>
                </div>
                <div className="p-2 bg-ivory/30 rounded">
                  <code className="text-navy">"Python DSA tree tutorial Tamil"</code>
                </div>
                <div className="p-2 bg-ivory/30 rounded">
                  <code className="text-navy">"Sorting algorithms Tamil"</code>
                </div>
                <div className="p-2 bg-ivory/30 rounded">
                  <code className="text-navy">"Dynamic programming Tamil"</code>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded border">
              <h4 className="font-semibold text-charcoal mb-2">Platform Exploration</h4>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-search text-sage"></i>
                  <span>Search GUVI for free DSA content in Tamil</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-graduation-cap text-sage"></i>
                  <span>Check CodeKata for practice problems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-book-open text-sage"></i>
                  <span>Explore free-programming-books resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Resource Quality Guide */}
      <div className="bg-gradient-to-r from-ivory/50 to-gold/10 p-8 rounded-lg border border-gold/20">
        <h3 className="font-serif text-2xl font-semibold text-navy mb-6 text-center">Resource Quality Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-star text-2xl text-sage"></i>
            </div>
            <h4 className="font-semibold text-navy mb-2">High Quality</h4>
            <ul className="text-sm text-charcoal/70 space-y-1">
              <li>• Clear explanations</li>
              <li>• Practical code examples</li>
              <li>• Problem-solving focus</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-2xl text-gold"></i>
            </div>
            <h4 className="font-semibold text-navy mb-2">Good Quality</h4>
            <ul className="text-sm text-charcoal/70 space-y-1">
              <li>• Concept coverage</li>
              <li>• Language clarity</li>
              <li>• Structured approach</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation text-2xl text-red-500"></i>
            </div>
            <h4 className="font-semibold text-navy mb-2">Avoid</h4>
            <ul className="text-sm text-charcoal/70 space-y-1">
              <li>• Incomplete content</li>
              <li>• Language barriers</li>
              <li>• Paid-only access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resources; 