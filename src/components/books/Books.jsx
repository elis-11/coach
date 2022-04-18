import { Link, Route, Routes } from "react-router-dom";
import { App } from "./app/App";
import { Comp } from "./comp/Comp";
import { Book } from "./Book";
import { New } from "./New";
import { Double } from "./Double";
import { State } from "./state/State";
import { Origin } from "./origin/Origin";
import "./Books.scss";

export const Books = () => {
  return (
    <div>
      <div className="links">
        <Link to="">App</Link>
        <Link to="comp">Comp</Link>
        <Link to="book">Book</Link>
        <Link to="new">New</Link>
        <Link to="double">Double</Link>
        <Link to="state">State</Link>
        <Link to="origin">Origin</Link>
      </div>
      <div className="roures">
        <Routes>
          <Route path="" element={<App />} />
          <Route path="comp" element={<Comp />} />
          <Route path="book" element={<Book />} />
          <Route path="new" element={<New />} />
          <Route path="double" element={<Double />} />
          <Route path="state" element={<State />} />
          <Route path="origin" element={<Origin />} />
        </Routes>
      </div>
    </div>
  );
};
