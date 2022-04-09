/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const data = {
  persons: [
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4
    },
    {
      name: "Dan Abramov",
      number: "1234",
      id: 13
    }
  ]
};

const allPersons = () => {
  return Promise.resolve({ data: [...data.persons] });
};

const createPerson = (input) => {
  data.persons.push(input);
  console.log("creating person", input);
  return Promise.resolve({ data: input });
};

const deletePerson = (id, persons) => {
  return axios.delete(`${baseUrl}/${0}`, persons);
};

const editPerson = (id, persons) => {
  const personIndex = data.persons.findIndex((_) => _.id === id);
  console.log("saving", persons);
  if (personIndex >= 0) {
    data.persons[personIndex] = persons;
    return Promise.resolve(persons);
  } else {
    return Promise.reject("Can't edit; person not found");
  }
};

export default { allPersons, createPerson, deletePerson, editPerson };