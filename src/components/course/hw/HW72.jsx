import React from "react";

export const HW72 = ({user}) => {
  return (
    <div>
      <div key={user.id}>
        {user.firstname} {user.lastname} {user.age} {user.email} 
        {/* {user.password} */}
      </div>
    </div>
  );
};
