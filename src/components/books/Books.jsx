import { NavLink, Route, Routes } from "react-router-dom";
import { Add } from "./add/Add";
import "./Books.scss";

export const Books = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="" end >Add</NavLink>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<Add />} />
        </Routes>
      </div>
    </div>
  );
};
