import { Link, Route, Routes } from "react-router-dom";
import { Users } from "./users/Users";
import { Create } from "./Create";
import {Person}  from "./Person";
import { Update } from "./Update";

export const Rob = () => {
  return (
    <div>
      <div className="links">
        <Link to="">Users</Link>
        <Link to="create">Create</Link>
        <Link to="person">Person</Link>
        <Link to="update">Update</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<Users />} />
          <Route path="create" element={<Create />} />
          <Route path="person" element={<Person />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
};
