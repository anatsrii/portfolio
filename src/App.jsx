import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import BlogsContent from './components/BlogsContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="desktop">
        <div className="windows-container">
          <Home />
          <About />
          <Contact />
          <Projects />
          <BlogsContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
