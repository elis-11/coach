import { useState } from "react";

export const Context = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        placeholder="Enter your name"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
        <input 
          type="number" 
          name="age" 
          placeholder="Enter your age"
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <input type="submit" />
    </form>
  )
}
