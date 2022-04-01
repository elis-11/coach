import React from "react";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Hooks } from "./Hooks";
import { Link, Route, Routes } from "react-router-dom";
import "./Course.scss";
import { UseS } from "./UseS";
import { UseSt } from "./UseSt";

export const Course = () => {
  return (
    <div>
      <div className="links">
        <Link to="">State</Link>
        <Link to="effect">Effect</Link>
        <Link to="context">Context</Link>
        <Link to="hooks">Hooks</Link>
        <Link to="uses">UseS</Link>
        <Link to="usest">UseSt</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<State />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="uses" element={<UseS />} />
          <Route path="usest" element={<UseSt />} />
        </Routes>
      </div>
    </div>
  );
};
