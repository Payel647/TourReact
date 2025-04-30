import './App.css'
import data from './data.js';
import Tours from './component/Tours.jsx';
import React from 'react';
import { useState } from 'react';
function App() {
  const [tours, setTours] =useState(data);
  function removeTour(id) {
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
 }
 if (tours.length === 0) {
  return (
    <div>
      <h2>No Tours Left</h2>
      <button onClick={() => setTours(data)}>Refresh</button>
    </div>
  );
}
  return (
    <>
    <div>
      <Tours tours={tours} removeTours={removeTour}/>
    </div> 
    </>
  )
}

export default App
