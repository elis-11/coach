import { Link, Route, Routes } from "react-router-dom";
import { RobState } from "./RobState";
import { New } from "./New";
import { Task } from "./Task";


export const Tasks = () => {
  return (
    <div>
      <div className="links">
        <Link to="robstate">RobState</Link>
        <Link to="new">New</Link>
        <Link to="task">Task</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="robstate" element={<RobState />} />
          <Route path="new" element={<New />} />
          <Route path="task" element={<Task />} />
        </Routes>
      </div>
    </div>
  );
};
