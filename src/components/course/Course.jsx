import { NavLink, Route, Routes } from "react-router-dom";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Tasks } from "./tasks/Tasks";
import "./Course.scss";
import { HW } from "./hw/HW";
import { Rob } from "./rob/Rob";

export const Course = () => {
  return (
    <div >
      <div className="links">
        <NavLink to="" end>State</NavLink>
        <NavLink to="hw">HW</NavLink>
        <NavLink to="rob">Rob</NavLink>
        <NavLink to="effect">Effect</NavLink>
        <NavLink to="context">Context</NavLink>
        <NavLink to="tasks">Tasks</NavLink>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<State />} />
          <Route path="/hw/*" element={<HW />} />
          <Route path="/rob/*" element={<Rob />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="/tasks/*" element={<Tasks />} />
        </Routes>
      </div>
    </div>
  );
};
