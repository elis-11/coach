import { useEffect, useRef, useState } from "react";
import "./Refs.scss";

export const Refs = () => {
  const [user, setUser] = useState({
    username: "Gael",
    age: 28,
  });

  const inputUsername = useRef();
  const inputAge = useRef();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("[UseEffect Hook] SOME STATE was CHANGED in our App");
    console.log({ user });
    console.log({ editMode });
  });

  const onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      const usernameNew = inputUsername.current.value;
      const ageNew = inputAge.current.value;

      setEditMode(false); // make readonly after change

      setUser({ ...user, username: usernameNew, age: ageNew });
    }
  };

  // HTML
  return (
    <div className="App">
      <header className="App-header">
        <h2>Edit Training</h2>
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
      </header>
    </div>
  );
};
