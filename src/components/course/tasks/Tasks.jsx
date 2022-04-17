import { Link, Route, Routes } from "react-router-dom";
import { RobState } from "./RobState";
import { New } from "./New";
import { Component } from "./comp/Component";

export const Tasks = () => {
  return (
    <div>
      <div className="links">
        <Link
          className={({ isActive }) =>
            isActive ? { color: "red" } : { color: "green" }
            // className={({ isActive }) => (isActive ? "link-active" : "link")}
          }
          to="robstate"
        >
          RobState
        </Link>
        <Link
          className={({ isActive }) =>
            isActive ? { color: "red" } : { color: "green" }
          }
          to="new"
        >
          New
        </Link>
        <Link
          className={({ isActive }) =>
            isActive ? { color: "red" } : { color: "green" }
          }
          to="component"
        >
          Component
        </Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="robstate" element={<RobState />} />
          <Route path="new" element={<New />} />
          <Route path="component" element={<Component />} />
        </Routes>
      </div>
    </div>
  );
};
