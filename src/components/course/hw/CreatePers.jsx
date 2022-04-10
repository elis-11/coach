import { useState } from "react";

export const CreatePers = () => {
  const [person, setPerson] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  // const [age, setAge] = useState();

  const newFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const newLastname = (e) => {
    setLastname(e.target.value);
  };
  // const newAge = (e) => {
  //   setAge(e.target.value);
  // };

  const createPerson = () => {
    const newId = Date.now().toString();
    const newPerson = {
      ...person,
      id: newId,
      firstname: newFirstname,
      lastname: newLastname,
      // age: newAge,
    };
    setPerson(newPerson);
    setFirstname("");
    setLastname("");
    // setAge("");
  };

  return (
    <div>
      <h2>Create a new person</h2>
      <div key={person.id}>
        <input
          type="text"
          autoFocus
          value={firstname}
          onChange={newFirstname}
        />
        <input type="text" value={lastname} onChange={newLastname} />
        {/* <input type="number" value={age} onChange={newAge} /> */}
        <button onClick={createPerson}>Create</button>
      </div>
      <div>
        {`${person.firstName} ${person.lastName}`}
        {/* {`${person.firstName} ${person.lastName} ${person.age}`} */}
      </div>
    </div>
  );
};
