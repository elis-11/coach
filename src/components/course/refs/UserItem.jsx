import { useRef, useState } from "react";

export const UserItem = ({ user, updateUser }) => {
  const inputUsername = useRef();
  const inputAge = useRef();

  const [editMode, setEditMode] = useState(false);

  const onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      const usernameNew = inputUsername.current.value;
      const ageNew = inputAge.current.value;

      setEditMode(false); // make form readonly (!) after our changes
      updateUser(user.id, { username: usernameNew, age: ageNew });
    }
  };

  // HTML
  return (
    <div>
      <input
        name="username"
        ref={inputUsername}
        onKeyDown={onKeyDown}
        defaultValue={user.username}
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
  );
};
