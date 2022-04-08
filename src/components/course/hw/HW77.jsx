import { useState} from "react";

export const HW77 = () => {
  const [person, setPerson] = useState({ firstname: "", lastname: "" });

  const addNewPerson = (e) => {
    const { name, value } = e.target;


    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        value={person.firstname}
        type="text"
        onChange={addNewPerson}
        name="firstname"
      />
      <input
        value={person.lastname}
        type="text"
        onChange={addNewPerson}
        name="lastname"
      />

    </div>
  );
};
//https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object