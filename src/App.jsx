import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Week4 from './components/Week4';
import Practice from './components/Practice';
import Resources from './components/Resources';
import useTamilResourceLinks from './hooks/useTamilResourceLinks';

function App() {
  useTamilResourceLinks();
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main className="main-content px-2 sm:px-4 md:px-6 lg:px-8">
        <Hero />
        <Introduction />
        <Week1 />
        <Week2 />
        <Week3 />
        <Week4 />
        <Practice />
        <Resources />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
