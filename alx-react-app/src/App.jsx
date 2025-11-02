import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const WelcomeMessage = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl text-center transition duration-300 hover:shadow-3xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4 transition transform hover:scale-105">
        Hello everyone, I am learning React at ALX!
      </h1>
      <p className="text-lg text-gray-700 font-medium italic">
        I am learning about JSX!
      </p>
    </div>
  );
};

// The main App component, which includes the WelcomeMessage component.
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            ALX React Component Integration
          </h2>
          <p className="text-gray-500 mt-2">
            Demonstrating component structure and text updates.
          </p>
        </header>

        {/* Integration of the WelcomeMessage component */}
        <WelcomeMessage />
      </div>
    </div>
  );
};


export default App
