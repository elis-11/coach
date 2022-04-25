// import { useState } from 'react';
// import './App.css';
// import UserList from './components/UserList';

// function App() {

//   // STATE
//   const [users, setUsers] = useState([
//     { id: "1", username: "Gael", age: 28 },
//     { id: "2", username: "Edward", age: 39 },
//   ])

//   // UPDATE user
//   const updateUser = (id, userData) => {
    
//     // 1. updated array
//     const updatedUsers = users.map(user => user.id === id ? { ...user, ...userData } : user)
//     console.log( { updatedUsers })
//     setUsers( updatedUsers )
//   }

//   // HTML
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Edit Training List</h2>
//         <UserList users={users} updateUser={updateUser}></UserList>
//       </header>
//     </div>
//   )
// }

// export default App;
// //***********************/
// import UserItem from "./UserItem";

// const UserList = ({ users, updateUser }) => {

//   // Loop over users and render a User component for each one 
//   return (
//     <div className="user-list">
//       {users.map((user) => {
//         return <UserItem key={user.id} user={user} updateUser={updateUser}></UserItem>
//       })}
//     </div>
//   )
// }
 
// export default UserList;
// //***********************
// import { useEffect, useRef, useState } from "react"

// const UserItem = ({ user, updateUser }) => {

//   // STATE
//   // we moved All state / data out to App.js !
//   // const [user, setUser] = useState({
//   //   username: "Gael",
//   //   age: 28
//   // })

//   // REFs
//   const inputUsername = useRef()
//   const inputAge = useRef()

//   // TOGGLE TRICK => !bool
//   const [editMode, setEditMode] = useState(false)

//   // useEffect is triggered whenever a state was CHANGED
//   useEffect(() => {
//     console.log("[UseEffect Hook] SOME STATE was CHANGED in our App")
//   })

//   // this here is executed whenever the user types a key in the input field
//   const onKeyDown = (ev) => {
//     // user typed ENTER
//     if (ev.key === "Enter") {
//       const usernameNew = inputUsername.current.value
//       const ageNew = inputAge.current.value

//       // show what is in ALL INPUT fields
//       console.log("Username Value: ", usernameNew)
//       console.log("Age Value: ", ageNew)

//       setEditMode(false) // make form readonly (!) after our changes

//       // update the user in STATE 
//       // App.js manages all state updates
//       // so we need to call the function "updateUser" from App.js
//       updateUser(user.id, { username: usernameNew, age: ageNew })
//     }
//   }

//   // HTML
//   return (
//     <div>
//       <input
//         name="username"
//         // attach a REF variable to this input field
//         ref={inputUsername}
//         onKeyDown={onKeyDown}
//         defaultValue={user.username}
//         // set input readonly if we are NOT in edit mode
//         readOnly={!editMode}
//       />
//       <input
//         name="age"
//         ref={inputAge}
//         onKeyDown={onKeyDown}
//         defaultValue={user.age}
//         readOnly={!editMode}
//       />
//       <button onClick={() => setEditMode(!editMode)}> { editMode ? "Cancel" : "Edit" } </button>
//     </div>
//   )
// }

// export default UserItem