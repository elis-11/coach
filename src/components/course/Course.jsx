import React from "react";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Link, Route, Routes } from "react-router-dom";
import "./Course.scss";

export const Course = () => {
  return (
    <div>
      Course
      <ul>
        <li>
          <Link to="">Context</Link>
        </li>
        <li>
          <Link to="state">State</Link>
        </li>
        <li>
          <Link to="effect">Effect</Link>
        </li>
      </ul>
      <div className="roures">
        <Routes>
          <Route path="/" element={<Context />} />
          <Route path="state" element={<State />} />
          <Route path="effect" element={<Effect />} />
        </Routes>
      </div>
    </div>
  );
};
