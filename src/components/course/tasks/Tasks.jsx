import { Link, Route, Routes } from "react-router-dom";
import { RobState } from "./RobState";
import { New } from "./New";
import { Component } from "./comp/Component";
import { Update } from "./Update";

export const Tasks = () => {
  return (
    <div>
      <div className="links">
        <Link
          to="robstate"
          // className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
          RobState
        </Link>
        <Link to="new">New</Link>
        <Link to="component">Component</Link>
        <Link to="update">Update</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="robstate" element={<RobState />} />
          <Route path="new" element={<New />} />
          <Route path="component" element={<Component />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
};
