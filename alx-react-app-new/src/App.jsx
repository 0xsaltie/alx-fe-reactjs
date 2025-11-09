import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-center">
      {/* Logo Section */}
      <div className="flex justify-center items-center space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">Vite + React + ALX</h1>

      {/* Counter Section */}
      <div className="card mb-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
        <p className="mt-2 text-gray-600">
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      {/* Components Section */}
      <div className="space-y-8">
        <Header />
        <MainContent />
        <WelcomeMessage />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography." />
        <Footer />
        <Counter />
      </div>
    </div>
  );
}

export default App;
