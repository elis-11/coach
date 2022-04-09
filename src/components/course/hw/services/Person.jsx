import React from "react";
import deleteOne from "../person";
const Person = ({ id, person }) => {
  const handledelete = () => {
    alert(
      `Delete ${person.name}?, ${person.name} will disappear when you refresh`
    );
    deleteOne.deletePerson(person.id);
  };
  return (
    <div>
      {" "}
      {person.name} {person.number}{" "}
      <button onClick={handledelete}>delete</button>{" "}
    </div>
  );
};

export default Person;