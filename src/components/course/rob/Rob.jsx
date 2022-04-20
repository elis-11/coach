import { NavLink, Route, Routes } from "react-router-dom";
import {Person}  from "./person/Person";
import { Users } from "./users/Users";
import { Create } from "./create/Create";
import { Update } from "./update/Update";
import { Devs } from "./devs/Devs";
import { New } from "./new/New";

export const Rob = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="" end >Person</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="create">Create</NavLink>
        <NavLink to="update">Update</NavLink>
        <NavLink to="devs">Devs</NavLink>
        <NavLink to="new">New</NavLink>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<Person />} />
          <Route path="users" element={<Users />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
          <Route path="devs" element={<Devs />} />
          <Route path="new" element={<New />} />
        </Routes>
      </div>
    </div>
  );
};
