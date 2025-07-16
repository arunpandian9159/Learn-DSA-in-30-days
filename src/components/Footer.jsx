import React from "react";

const Footer = () => (
  <footer className="py-12 bg-navy text-ivory">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
      <h3 className="font-serif text-2xl font-semibold mb-4">Your DSA Journey Starts Now</h3>
      <p className="text-ivory/70 mb-6 max-w-2xl mx-auto">
        With consistent practice, curated resources, and strategic preparation,
        you can master Data Structures and Algorithms in just 30 days.
        Remember, every expert was once a beginner.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-gold/20 rounded-full text-sm">3 Hours Daily</span>
        <span className="px-4 py-2 bg-sage/20 rounded-full text-sm">Free Resources</span>
        <span className="px-4 py-2 bg-ivory/10 rounded-full text-sm">Tamil Support</span>
      </div>
    </div>
  </footer>
);

export default Footer; 