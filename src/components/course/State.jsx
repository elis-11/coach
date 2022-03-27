import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"


export const State = () => {
  const getInitialState = () => false
const [visible, setVisibility]= useState(getInitialState); 

  const handleClick = () => {
    setVisibility((currentValue)=>!currentValue)
  };

  return (
    <div>
      <div className="container">
        <h2>What is React ?</h2>
        <Button variant="primary" onClick={handleClick}>
          Show answer
        </Button>
        {visible && (
          <Card>
          <Card.Body>A JavaScript library for building user interfaces</Card.Body>
        </Card>
          )}
      </div>
    </div>
  );
};
