import React from "react";
import './App.css';

import { Button } from "./components/Button"

function App() {
  return (
    <div className="App">
      <Button onClick={() => {
        console.log("ouch you clicked me!")
        }} 
        type="button" 
        buttonStyle="btn--danger--solid"
        buttonSize="btn--large"
        >
          Buy Now</Button>
    </div>
  );
}

export default App;
