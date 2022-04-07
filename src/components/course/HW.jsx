import { useState } from "react";

export const HW = () => {
  const [person, setPerson] = useState({
    id: 1,
    fname: "John",
    lname: "Snow",
    student: true,
    age: 89,
  });
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState(""); 

  const updatePersonData = () => {
    setPerson({ ...person, student: !person.student });
  };

  const updatePersonFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updatePersonLastname = (e) => {
    setLastname(e.target.value);
  };
  const updatePersonName = () => {
    setPerson({
      ...person,
      fname: firstname,
      lname: lastname,
      id: new Date().toString(),
    });
    setFullname(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };

  return (
    <div>
      <div onClick={updatePersonData}>
        {" "}
        The name of this {person.student ? "student" : "worker"} is{" "}
        {person.fname} {person.lname} he is {person.age} years old.
      </div>
      <div>
        <input
          key={person.id}
          type="text"
          name="firstname"
          placeholder="Firstname"
          onChange={updatePersonFirstname}
          value={firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={updatePersonLastname}
          value={lastname}
        />
        <button onClick={updatePersonName}>Update</button>
      </div>
      <div>Fullname:  { `${person.fname} ${person.lname}` }</div>
    </div>
  );
};
 