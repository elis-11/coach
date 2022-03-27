import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"

function Timer({ intervalValue }) {
const [value, setValue]= useState(0)

useEffect(() => {
const intervalId=setInterval(() => {
    setValue(value=> value + 1)
}, intervalValue)

return ()=> {
    console.log('interval cleared');
    clearInterval(intervalId)
}
}, [intervalValue])

  return (
    <div className="Effect">
      <h2>Timer</h2>
      <h2>{value}</h2>
    </div>
  );
}

export function Effect() {
  const [intervalValue, setIntervalValue] = useState();

 const handleIntervalClick = (ms) => {
    setIntervalValue(ms);
  };

  return (
    <div className="Effect">
      <Timer intervalValue={intervalValue}></Timer>
      <Button variant="primary" onClick={() => handleIntervalClick(100)}>
        100ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(500)}>
        500ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(1000)}>
        1s
      </Button>
    </div>
  );
}
