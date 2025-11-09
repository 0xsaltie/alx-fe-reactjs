import React, { useState } from 'react';

const Counter = () => {
  // Initialize state
  const [count, setCount] = useState(0);

  // Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Counter App</h2>
      
      <p style={styles.count}>Current Count: {count}</p>
      
      <div style={styles.buttons}>
        <button style={{ ...styles.button, backgroundColor: '#4caf50' }} onClick={increment}>
          Increment
        </button>
        <button style={{ ...styles.button, backgroundColor: '#f44336' }} onClick={decrement}>
          Decrement
        </button>
        <button style={{ ...styles.button, backgroundColor: '#2196f3' }} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    marginBottom: '15px',
    color: '#333',
  },
  count: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '15px 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

export default Counter;
