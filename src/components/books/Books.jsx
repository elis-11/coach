import { Link, Route, Routes } from "react-router-dom";
import { State } from "./State";
import { NewBook } from "./NewBook";
import { UseState } from "./UseState";
import { DoubleBook } from "./DoubleBook";
import { BookApp } from "./BookApp";
import { Robapp } from "./robapp/Robapp";
import "./Books.scss";

export const Books = () => {
  return (
    <div>
      <div className="links">
        <Link to="">Robapp</Link>
        <Link to="newbook">NewBook</Link>
        <Link to="doublebook">DoubleBook</Link>
        <Link to="bookapp">BookApp</Link>
        <Link to="state">State</Link>
        <Link to="usestate">UseState</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<Robapp />} />
          <Route path="newbook" element={<NewBook />} />
          <Route path="doublebook" element={<DoubleBook />} />
          <Route path="bookapp" element={<BookApp />} />
          <Route path="state" element={<State />} />
          <Route path="usestate" element={<UseState />} />
        </Routes>
      </div>
    </div>
  );
};
