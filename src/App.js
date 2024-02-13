import React, { useState } from "react";
import data from './data';
import Tours from './components/Tour';
import Card  from "./components/Card";

const App = () => {
  const[tours, setTour] = useState(data);
  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  }
  if(tours.length === 0){
    return(
      <div className="refresh">
          <h2>No Tours left</h2>
          <button className="btn-white" onClick={() => setTour(data)}> 
                Refresh
          </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour = {removeTour}></Tours>
    </div>
  );
};

export default App;
