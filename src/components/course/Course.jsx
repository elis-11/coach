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
      <Link to="" 
        className={(navData) => (navData.isActive ? "active" : "none")}
      >State</Link>
      <Link to="effect" 
        className={(navData) => (navData.isActive ? "active" : "none")}
      >Effect</Link>
      <Link to="context" 
        className={(navData) => (navData.isActive ? "active" : "none")}
      >Context</Link>
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
