import { NavLink, Route, Routes } from "react-router-dom";
import { RobState } from "./RobState";
import { New } from "./New";
import { Component } from "./comp/Component";
import { Update } from "./Update";
import { Refs } from "./refs/Refs";
import { CheckBox } from "./CheckBox";


export const Tasks = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="robstate" end >
          RobState
        </NavLink>
        <NavLink to="new">New</NavLink>
        <NavLink to="component">Component</NavLink>
        <NavLink to="update">Update</NavLink>
        <NavLink to="refs">Refs</NavLink>
        <NavLink to="checkbox">CheckBox</NavLink>
      </div>
      <div className="routes">
        <Routes>
          <Route path="robstate" element={<RobState />} />
          <Route path="new" element={<New />} />
          <Route path="component" element={<Component />} />
          <Route path="update" element={<Update />} />
          <Route path="refs" element={<Refs />} />
          <Route path="checkbox" element={<CheckBox />} />
        </Routes>
      </div>
    </div>
  );
};
