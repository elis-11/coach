import { useRef, useState } from "react";

export const Refs = () => {
  // STATE
  const [users, setUsers] = useState([
    { id: "1", name: "Gael", age: 28 },
    { id: "2", name: "Edward", age: 39 },
  ]);

  const updateUser = (id, userData) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
    console.log({ updatedUsers });
    setUsers(updatedUsers);
  };
  const inputName = useRef();
  const inputAge = useRef();

  const [editMode, setEditMode] = useState(false);

  const onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      const nameNew = inputName.current.value;
      const ageNew = inputAge.current.value;

      setEditMode(false); // make form readonly (!) after our changes
      updateUser(users, { name: nameNew, age: ageNew });
    }
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id}>
          <input
            name="name"
            ref={inputName}
            onKeyDown={onKeyDown}
            defaultValue={user.name}
            readOnly={!editMode}
          />
          <input
            name="age"
            ref={inputAge}
            onKeyDown={onKeyDown}
            defaultValue={user.age}
            readOnly={!editMode}
          />
          <button onClick={() => setEditMode(!editMode)}>
            {" "}
            {editMode ? "Cancel" : "Edit"}{" "}
          </button>
        </div>
      ))}
    </div>
  );
};
