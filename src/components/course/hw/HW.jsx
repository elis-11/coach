import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Update } from "./Update";
import { Add } from "./Add";

export const HW = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="" end>
          Home
        </NavLink>
        <NavLink to="update">Update</NavLink>
        <NavLink to="add">Add</NavLink>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="update" element={<Update />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </div>
    </div>
  );
};
