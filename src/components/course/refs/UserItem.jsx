import { useEffect, useRef, useState } from "react";

export const UserItem = ({ user, updateUser }) => {
  const inputUsername = useRef();
  const inputAge = useRef();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("[UseEffect Hook] SOME STATE was CHANGED in our App");
  });

  const onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      const usernameNew = inputUsername.current.value;
      const ageNew = inputAge.current.value;

      setEditMode(false); // make readonly after change
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
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </div>
  );
};
