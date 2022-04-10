import { useState } from "react";

export const Update = () => {
  const [person, setPerson] = useState({
    id: 1,
    fname: "",
    lname: "",
    student: true,
    age: "",
    email: "",
  });
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  // const [fullname, setFullname] = useState("");

  // const updatePersonData = () => {
  //   setPerson({ ...person, student: !person.student });
  // };

  const updatePersonFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updatePersonLastname = (e) => {
    setLastname(e.target.value);
  };
  const updatePersonAge = (e) => {
    setAge(e.target.value);
  };
  const updatePersonEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePersonName = () => {
    setPerson({
      ...person,
      id: new Date().toString(),
      fname: firstname,
      lname: lastname,
      age: age,
      email: email,
    });
    // setFullname(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
    setAge("");
    setEmail("");
  };

  return (
    <div>
      <p>Update User ✨</p>
      {/* <div onClick={updatePersonData}> */}
      <div>
        {/* {" "}
        The name of this {person.student ? "student" : "worker"} is{" "}
        {person.fname} {person.lname} he is {person.age} years old. */}
      </div>
      <div>
        <input
          key={person.id}
          type="text"
          name="firstname"
          placeholder="Firstname"
          onChange={updatePersonFirstname}
          value={firstname}
          autoFocus
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={updatePersonLastname}
          value={lastname}
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={updatePersonAge}
          value={age}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={updatePersonEmail}
          value={email}
        />
      </div>
      <button onClick={updatePersonName}>Submit</button>
      <div>
        Fullname:{" "}
        {`${person.fname} ${person.lname} ${person.age} ${person.email}`}
      </div>
    </div>
  );
};
