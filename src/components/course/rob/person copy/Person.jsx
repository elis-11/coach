import { useState } from "react";
import "./Person.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Person = () => {
  const [people, setPeople] = useState([
    { id: "1", name: "John", age: 32 },
    { id: "2", name: "Luis", age: 41 },
  ]);

  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
  });

  const addPerson=()=>{
    const personNewState={
      id: Date.now().toString(),
      name: newPerson.name,
      age: newPerson.age,
    }
    setPeople([...people, personNewState])
    setNewPerson({...newPerson, name:'', age:'',})
  }
  const handleAddPerson=(e)=>{
    setNewPerson({...newPerson, [e.target.name]: e.target.value})
  }

  const handleDelete = (id) => {
    const deletePerson=people.filter(person=>person.id !== id)
    setPeople(deletePerson)
  }

  return (
    <div className="person">
      <div className="container">
        <h2 style={{ marginTop: "20px" }}>
          {people.length} List {people.length === 1 ? "Person" : "People"}
        </h2>
        <div className="add">
          <input onChange={handleAddPerson} value={newPerson.name} type="text" name="name" placeholder="Name" autoFocus />
          <input onChange={handleAddPerson} value={newPerson.age} type="number" name="age" placeholder="Age" />
          <button onClick={addPerson}>Add</button>
        </div>
        {people.length ? (
          <div className="users">
            {people.map((person) => (
              <div key={person.id} className="user">
                <div className="item">{person.name}</div>
                <div className="item">{person.age}</div>
                <div className="icons">
                  <FaEdit className="icon" role="button" tabIndex="0" />
                  <FaTrashAlt onClick={()=>handleDelete(person.id)} className="icon" role="button" tabIndex="0" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{ marginTop: "3rem", textAlign: "center", color: "silver" }}
          >
            Your List is empty
          </p>
        )}
      </div>
    </div>
  );
};
