import { Link, Route, Routes } from "react-router-dom";
import { Robapp } from "./robapp/Robapp";
import { BookApp } from "./BookApp";
import { NewBook } from "./NewBook";
import { DoubleBook } from "./DoubleBook";
import { UseState } from "./UseState";
import { State } from "./State";
import { RobOrigin } from "./RobOrigin";
import "./Books.scss";

export const Books = () => {
  return (
    <div>
      <div className="links">
        <Link to="">Robapp</Link>
        <Link to="bookapp">BookApp</Link>
        <Link to="newbook">NewBook</Link>
        <Link to="doublebook">DoubleBook</Link>
        <Link to="usestate">UseState</Link>
        <Link to="state">State</Link>
        <Link to="roborigin">RobOrigin</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<Robapp />} />
          <Route path="bookapp" element={<BookApp />} />
          <Route path="newbook" element={<NewBook />} />
          <Route path="doublebook" element={<DoubleBook />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="state" element={<State />} />
          <Route path="roborigin" element={<RobOrigin />} />
        </Routes>
      </div>
    </div>
  );
};
