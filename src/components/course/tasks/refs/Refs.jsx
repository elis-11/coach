import { useEffect, useRef, useState } from "react";
import "./Refs.scss";

export const Refs = () => {
  // STATE
  const [user, setUser] = useState({
    username: "Gael",
    age: 28,
  });

  // REFs
  const inputUsername = useRef();
  const inputAge = useRef();

  // TOGGLE TRICK => !bool
  const [editMode, setEditMode] = useState(false);

  // useEffect is triggered whenever a state was CHANGED
  useEffect(() => {
    console.log("[UseEffect Hook] SOME STATE was CHANGED in our App");
    console.log({ user });
    console.log({ editMode });
  });

  // this here is executed whenever the user types a key in the input field
  const onKeyDown = (ev) => {
    // user typed ENTER
    if (ev.key === "Enter") {
      // get NEW user data from the input fields => using the REF variable ! (refName.current.value)
      const usernameNew = inputUsername.current.value;
      const ageNew = inputAge.current.value;

      setEditMode(false); // make readonly after change

      // update fields in the user object
      setUser({ ...user, username: usernameNew, age: ageNew });
    }
  };

  // HTML
  return (
    <div className="Refs">
        <h2>Edit Training</h2>
        <div>
          <input
            name="username"
            // attach a REF variable to this input field
            ref={inputUsername}
            onKeyDown={onKeyDown}
            defaultValue={user.username}
            // set input readonly if we are NOT in edit mode
            readOnly={!editMode}
          />
          <input
            name="age"
            ref={inputAge}
            onKeyDown={onKeyDown}
            defaultValue={user.age}
            readOnly={!editMode}
          />
          <button onClick={() => setEditMode(!editMode)}>Toggle Edit</button>
        </div>
    </div>
  );
};
