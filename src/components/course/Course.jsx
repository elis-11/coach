import React from "react";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Link, Route, Routes } from "react-router-dom";
import "./Course.scss";

export const Course = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">State</Link>
        </li>
        <li>
          <Link to="effect">Effect</Link>
        </li>
        <li>
          <Link to="context">Context</Link>
        </li>
      </ul>
      <div className="roures">
        <Routes>
          <Route path="" element={<State />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
        </Routes>
      </div>
    </div>
  );
};
