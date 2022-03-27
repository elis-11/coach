import React, { useState } from "react";
import "../Course.scss";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const getInitialState = () => false

export const State = () => {
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
