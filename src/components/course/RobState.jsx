import { useState } from 'react';

export const RobState=()=> {

  // number
  const [ number, setNumber] = useState( 0 )

  // update number
  const increaseNumber = () => {
    console.log("Increase Number called...")
    setNumber( number + 1 )
  }
  
  // string
  const [ message, setMessage ] = useState("hey")

  // update string (=message)
  const updateMessage = () => {
    console.log("Update Message called...")
    let messageNew = "hallo"
    setMessage( messageNew )
  }

  // user object
  const [ user, setUser ] = useState({ name: "Eliza", admin: true }) 
  // toggle Admin status => if admin true => false und umgekehrt
  const updateUserRole = () => {
    console.log("Update User status")
    // user.admin = false // does not work to update object directly!

    // toggle admin status
    const userUpdate = { ...user, admin: !user.admin }

    setUser( userUpdate ) // setXXX => überschreibt alte Daten komplett!
  }


  // INPUT field state
  const [ username, setUsername ] = useState("") 



  // boolean (true / false)
  const [ online, setOnline ] = useState( true )
 
  const updateOnlineStatus = () => {
    console.log("Update Online status called...")

    console.log( "!true", !true )
    console.log( "!false", !false )

    setOnline( !online  ) // toggle boolean variable online (if true => false, if false => true)
    // setOnline( online ? false : true  )
  }

  // array (will follow....)

// INPUT
  const updateUserName = (event) => {
    setUsername( event.target.value )
  }
  const updateUserObjectName = () => {
    setUser( { ...user, name: username } )
  }



  return (
    <div className="App">
      <header className="App-header">
        <h2>UseState Training camp</h2>

        {/* Update SIMPLE values (number, string, boolean) */}
        <div onClick={ increaseNumber } >Number: { number } </div>
        <div onClick={ updateMessage  }>String: { message } </div>
        <div onClick={ updateOnlineStatus } >Online: { online ? "Ja" : "Nein" }</div>

        {/* Update OBJECT field => Change role von Admin zu User  */}
        <div onClick={ updateUserRole } >Object:  { user.name } {user.admin ? "Admin" : "User" } </div>

        {/* Update OBJECT field by Input Field
          Save INPUT from user in a STATE
          On Click => overwrite the name of the user OBJECT with the data from INPUT field (stored n state "username")
        */}
        <div>
          <input type="text" name="username" value={ username } onChange={ updateUserName  } />
          <button onClick={ updateUserObjectName }>Update name</button>
        </div>

      </header>
    </div>
  );
}