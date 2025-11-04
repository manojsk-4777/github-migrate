import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 Welcome to My React App</h1>
        <p>Built with ❤️ using React</p>
      </header>

      <main className="app-main">
        <div className="card">
          <h2>Hello, Developer!</h2>
          <p>
            This is a simple React app setup. You can start editing <code>App.js</code> to
            customize your UI.
          </p>
          <button className="btn">Click Me</button>
        </div>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;