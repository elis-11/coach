import { Link, Route, Routes } from "react-router-dom";
import { Robapp } from "./robapp/Robapp";
import { RobappComp } from "./robappcomp/RobappComp";
import { BookApp } from "./BookApp";
import { NewBook } from "./NewBook";
import { DoubleBook } from "./DoubleBook";
import { State } from "./state/State";
import { RobOrigin } from "./roborigin/RobOrigin";
import "./Books.scss";

export const Books = () => {
  return (
    <div>
      <div className="links">
        <Link to="">Robapp</Link>
        <Link to="robappcomp">RobappComp</Link>
        <Link to="bookapp">BookApp</Link>
        <Link to="newbook">NewBook</Link>
        <Link to="doublebook">DoubleBook</Link>
        <Link to="state">State</Link>
        <Link to="roborigin">RobOrigin</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<Robapp />} />
          <Route path="robappcomp" element={<RobappComp />} />
          <Route path="bookapp" element={<BookApp />} />
          <Route path="newbook" element={<NewBook />} />
          <Route path="doublebook" element={<DoubleBook />} />
          <Route path="state" element={<State />} />
          <Route path="roborigin" element={<RobOrigin />} />
        </Routes>
      </div>
    </div>
  );
};
