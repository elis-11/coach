import { useState } from "react";
import Button from "react-bootstrap/Button";


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
  
  const updatePersonData = () => {
    setPerson({ ...person, 
      student: !person.student,
    });
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
      id: new Date(),
    });
    setFirstname({ ...firstname, fname: "" });
    setLastname({ ...lastname, lname: "" });
  };
  //******Fullname*******
  const [fullname, setFullname] = useState("");
  const showFullName = () => {
    const fullname = {
      fname: firstname.fname,
      lname: lastname.fname,
    };
    setPerson({ ...person, fullname });
  };
  const handleFullName = (e) => {
    setFullname({ ...fullname, [e.target.name]: e.target.value });
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
          value={person.firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={updatePersonLastname}
          value={person.lastname}
        />
        <button onClick={updatePersonName}>Update</button>
      </div>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          onChange={handleFullName}
          value={fullname.fname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={handleFullName}
          value={lastname.lname}
        />
        <button onClick={showFullName}>FullName</button>
      </div>
    </div>
  );
};
