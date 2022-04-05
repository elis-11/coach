import React, { useState } from "react";

export const New = () => {
  //! numbers
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 5);
  };

  //! string
  const [message, setMessage] = useState('Hi');
const newMmessage=()=>{
  let message='Hi people'
  setMessage(message)
}

  //! boolean
  const [online, setOnline] = useState(true);
  const onlineStatys=()=>{
    setOnline( !online  )
  }

  return (
    <div>
      New
      <hr />
      <div>
        number {number}
        <div onClick={increment}>+</div>
        <div onClick={decrement}>-</div>
      </div>
      <hr />
      <div onClick={newMmessage}> {message}</div>
      <hr />
      <div onClick={onlineStatys}>Elisa is {online ? 'online' : 'offline'}</div>
      <hr />
      <hr />
      <hr />
    </div>
  );
};
