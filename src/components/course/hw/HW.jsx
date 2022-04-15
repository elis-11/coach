import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Update } from "./Update";
import { Add } from "./Add";
import { CreateUs } from "./CreateUs";
import Person  from "./Person";

export const HW = () => {
  return (
    <div>
      <div className="links">
        <Link to="">Home</Link>
        <Link to="update">Update</Link>
        <Link to="add">Add</Link>
        <Link to="createus">CreateUs</Link>
        <Link to="person">Person</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="update" element={<Update />} />
          <Route path="add" element={<Add />} />
          <Route path="createus" element={<CreateUs />} />
          <Route path="person" element={<Person />} />
        </Routes>
      </div>
    </div>
  );
};
