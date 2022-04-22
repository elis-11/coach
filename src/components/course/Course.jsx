import { NavLink, Route, Routes } from "react-router-dom";
import { State } from "./State";
import { HW } from "./hw/HW";
import { Refs } from "./refs/Refs";
import { Rob } from "./rob/Rob";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Tasks } from "./tasks/Tasks";
import "./Course.scss";

export const Course = () => {
  return (
    <div >
      <div className="links">
        <NavLink to="" end>State</NavLink>
        <NavLink to="hw">HW</NavLink>
        <NavLink to="refs">Refs</NavLink>
        <NavLink to="rob">Rob</NavLink>
        <NavLink to="effect">Effect</NavLink>
        <NavLink to="context">Context</NavLink>
        <NavLink to="tasks">Tasks</NavLink>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<State />} />
          <Route path="/hw/*" element={<HW />} />
          <Route path="refs" element={<Refs />} />
          <Route path="/rob/*" element={<Rob />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="/tasks/*" element={<Tasks />} />
        </Routes>
      </div>
    </div>
  );
};
