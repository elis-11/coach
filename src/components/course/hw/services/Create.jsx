import React, { useState, useEffect } from "react";
import Person from "./Person";
import personDetails from "./person";

export const App = ({ name, number }) => {
  const [search, setSearch] = useState("");

  const [persons, setPersons] = useState([]);
  const [input, setInput] = useState({ name, number });
  console.log("input", input);

  useEffect(() => {
    personDetails.allPersons().then((response) => setPersons(response.data));
  }, []);

  const addPerson = (input) => {
    personDetails.createPerson(input).then((response) => {
      setInput((prev) => ({ name: "", number: "" }));
      setPersons((prev) => [...prev, response.data]);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((_) => _.name === input.name);
    if (existingPerson) {
      if (
        window.confirm(
          `${existingPerson.name} is already in the phonebook, replace the old number with a new one?`
        )
      ) {
        personDetails.editPerson(existingPerson.id, input).then((response) => {
          setPersons((prev) => [
            ...prev.filter((_) => _.id !== response.id),
            response,
          ]);
        });
      }
    } else {
      addPerson(input);
    }
  };

  const handleChange = (e) => {
    setInput((prev) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };
  const filteredPeople = persons.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <h2>Phonebook</h2>
      <div style={{ display: "flex" }}>
        <div>filter shown with</div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input
            name="name"
            type="text"
            value={input.name}
            onChange={handleChange}
          />
          <br />
          number:
          <input
            name="number"
            type="text"
            value={input.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <li>
        {filteredPeople.map((person) => (
          <Person
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            addPerson={addPerson}
            key={person.number}
            person={person}
          />
        ))}
      </li>
      <br />
    </div>
  );
};
