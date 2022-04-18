import { Link, Route, Routes } from "react-router-dom";
import {Person}  from "./person/Person";
import { Users } from "./users/Users";
import { Create } from "./create/Create";
import { Update } from "./Update";

export const Rob = () => {
  return (
    <div>
      <div className="links">
        <Link to="">Person</Link>
        <Link to="users">Users</Link>
        <Link to="create">Create</Link>
        <Link to="update">Update</Link>
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
