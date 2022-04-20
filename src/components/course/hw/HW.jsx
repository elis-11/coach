import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Update } from "./Update";
import { Add } from "./Add";
import { Create } from "./Create";
import Person from "./Person";

export const HW = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="" end>
          Home
        </NavLink>
        <NavLink to="update">Update</NavLink>
        <NavLink to="add">Add</NavLink>
        <NavLink to="create">Create</NavLink>
        <NavLink to="person">Person</NavLink>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="update" element={<Update />} />
          <Route path="add" element={<Add />} />
          <Route path="create" element={<Create />} />
          <Route path="person" element={<Person />} />
        </Routes>
      </div>
    </div>
  );
};
