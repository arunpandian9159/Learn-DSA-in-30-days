import React from "react";

const Hero = () => (
  <section className="relative min-h-[70vh] flex items-center">
    <div className="absolute inset-0">
      <img src="https://kimi-web-img.moonshot.cn/img/miro.medium.com/8254b7a7a14dfbef12c8722dcae316e5aa2fd461.png" alt="A modern workspace with a laptop displaying Python code" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="hero-overlay absolute inset-0"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 text-ivory">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="italic text-gold">Master</span> Data Structures<br />&amp; Algorithms in<br /><span className="text-sage">30 Days</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 leading-relaxed">
          A comprehensive roadmap with curated Tamil video resources, designed for beginners committed to 3 hours of daily practice
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-gold/20 rounded-full text-sm">Python Focus</span>
          <span className="px-4 py-2 bg-sage/20 rounded-full text-sm">Tamil Resources</span>
          <span className="px-4 py-2 bg-navy/50 rounded-full text-sm">Interview Prep</span>
        </div>
      </div>
      <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-0">
        <div className="bg-ivory/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-ivory/20">
          <div className="text-gold text-3xl font-bold mb-2">180+</div>
          <div className="text-ivory/80 text-sm">Hours of Learning</div>
        </div>
        <div className="bg-ivory/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-ivory/20">
          <div className="text-sage text-3xl font-bold mb-2">100+</div>
          <div className="text-ivory/80 text-sm">Coding Problems</div>
        </div>
        <div className="bg-ivory/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-ivory/20">
          <div className="text-gold text-3xl font-bold mb-2">50+</div>
          <div className="text-ivory/80 text-sm">Tamil Videos</div>
        </div>
        <div className="bg-ivory/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-ivory/20">
          <div className="text-sage text-3xl font-bold mb-2">6</div>
          <div className="text-ivory/80 text-sm">Core Topics</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 