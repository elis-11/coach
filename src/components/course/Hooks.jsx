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
//-------1----------
// useState for SEARCH
// const [array, setArray] = useState([]);

// const handleChange = (newValue) => {
//   setArray((array) => [...array, newValue]);
// };

//-------2-----------

// For functional components with hooks
 
// const [search, setSearch] = useState([]);
 
// // Using .concat(), wrapper function (recommended)
// setSearch(search => search.concat(query));

// // Spread operator, wrapper function (recommended)
// setSearch(search => [...search, query]);

//--------3--------
// const [value, setValue] = useState([])
// setValue([...value, newvalue])
//------4-------


