import React from "react";
import useTOCMobile from "../hooks/useTOCMobile";
import useActiveTOCLink from "../hooks/useActiveTOCLink";

const Nav = () => {
  const { closeTOC, toggleTOC } = useTOCMobile();
  useActiveTOCLink();
  return (
    <>
      {/* Mobile TOC Toggle */}
      <button className="lg:hidden fixed top-4 left-4 z-50 bg-navy text-ivory p-2 rounded shadow-lg" onClick={toggleTOC}>
        <i className="fas fa-bars"></i>
      </button>
      {/* Overlay for mobile TOC */}
      <div id="toc-overlay" className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden lg:hidden" onClick={toggleTOC}></div>
      <nav className="toc-fixed" id="toc">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-navy mb-4">Contents</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#introduction" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Introduction &amp; Setup</a>
            </li>
            <li>
              <a href="#week1" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Week 1: Foundation</a>
            </li>
            <li>
              <a href="#week2" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Week 2: Core Structures</a>
            </li>
            <li>
              <a href="#week3" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Week 3: Algorithms</a>
            </li>
            <li>
              <a href="#week4" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Week 4: Advanced Topics</a>
            </li>
            <li>
              <a href="#practice" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Practice &amp; Interviews</a>
            </li>
            <li>
              <a href="#resources" className="toc-link block py-2 text-charcoal hover:text-navy" onClick={closeTOC}>Tamil Resources</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-4 border-t border-navy/10">
          <p className="text-xs text-charcoal/60 mb-2">Quick Stats</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-gold/20 text-xs rounded">30 Days</span>
            <span className="px-2 py-1 bg-sage/20 text-xs rounded">3 Hours/Day</span>
            <span className="px-2 py-1 bg-navy/10 text-xs rounded">Free Resources</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav; 