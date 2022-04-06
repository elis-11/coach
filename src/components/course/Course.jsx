import { Link, Route, Routes } from "react-router-dom";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { RobState } from "./RobState";
import { UseSt } from "./UseSt";
import {New} from "./New";
import "./Course.scss";
import { HW } from "./HW";

export const Course = () => {
  return (
    <div>
      <div className="links">
        <Link to="" >State</Link>
        <Link to="hw">HW</Link>
        <Link to="effect">Effect</Link>
        <Link to="context">Context</Link>
        <Link to="usest">UseSt</Link>
        <Link to="robstate">RobState</Link>
        <Link to="new">New</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<State />} />
          <Route path="hw" element={<HW />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="usest" element={<UseSt />} />
          <Route path="robstate" element={<RobState />} />
          <Route path="new" element={<New />} />
        </Routes>
      </div>
    </div>
  );
};
