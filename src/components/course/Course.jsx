import React from "react";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Link, Route, Routes } from "react-router-dom";
import "./Course.scss";

export const Course = () => {
  return (
    <div>
      <div className="links">
      <Link to="" >State</Link>
      <Link to="effect" >Effect</Link>
      <Link to="context" >Context</Link>
      </div>
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
