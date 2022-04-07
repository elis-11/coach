import { Link, Route, Routes } from "react-router-dom";
import { HW6 } from "./HW6";
import { HW8 } from "./HW8";

export const HW = () => {
  return (
    <div>
      <div className="links">
        <Link to="">HW6</Link>
        <Link to="hw8">HW8</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<HW6 />} />
          <Route path="hw8" element={<HW8 />} />
        </Routes>
      </div>
    </div>
  );
};
