import {useState} from "react";

export const Hooks = () => {
//   let name = "Laila";
const [name, setName] = useState('Laila')
const [age, setAge] = useState(18)

  const handleClick = () => {
    // name = "Elisa";
    // console.log(name);
    setName('Elisa')
    setAge(35)
  };

  return (
    <div>
      <h2>Hooks</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
 