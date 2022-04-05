import React from "react";
import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { BooksApp } from "./BooksApp";
import { UseState1 } from "./UseState1";
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
        <Link to="booksapp">BooksApp</Link>
        <Link to="uses">UseS</Link>
        <Link to="usest">UseSt</Link>
        <Link to="usestate1">UseState1</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<State />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="booksapp" element={<BooksApp />} />
          <Route path="uses" element={<UseS />} />
          <Route path="usest" element={<UseSt />} />
          <Route path="usestate1" element={<UseState1 />} />

        </Routes>
      </div>
    </div>
  );
};
