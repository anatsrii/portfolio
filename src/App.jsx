// App.jsx
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <aside className="sidebar">
          <Header />
        </aside>
        <main className="content">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
