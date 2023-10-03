import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brenen Hatch</h1>
        <p>Full stack engineer</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            This is my personal site, it is currently a work in Progress
          </p>
        </section>
        <section>
          <h2>Portfolio</h2>
          {/* Add your portfolio projects here */}
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            You can reach out to me at: <a href="mailto:brenen.hatch21@gmail.com">brenen.hatch21@gmail.com</a>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;


