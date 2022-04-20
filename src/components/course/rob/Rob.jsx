import { NavLink, Route, Routes } from "react-router-dom";
import {Person}  from "./person/Person";
import { Users } from "./users/Users";
import { Create } from "./create/Create";
import { Update } from "./update/Update";

export const Rob = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="" end >Person</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="create">Create</NavLink>
        <NavLink to="update">Update</NavLink>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<Person />} />
          <Route path="users" element={<Users />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
};
