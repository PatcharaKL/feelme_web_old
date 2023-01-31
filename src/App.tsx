import React, { useState,useEffect } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const [data, setData] = useState<any>();
  
  useEffect(() => {
    load()
  }, [])
  
  const load = async () => {
    try {
      await fetch('http://localhost:3000/user')
      .then(response => response.json())
      .then((data) => setData(data))
    } catch (e) {
        setData({"message": "error"})
      };
  };
  return (
    <div className="App">
      <h1>{JSON.stringify(data)}</h1>
      <Counter />
    </div>
  );
}

export default App;
