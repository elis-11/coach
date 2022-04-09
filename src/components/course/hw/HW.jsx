import { Link, Route, Routes } from "react-router-dom";
import { HW6 } from "./HW6";
import { HomW62 } from "./HomW62";
import { HW7 } from "./HW7";
import { HW71 } from "./HW71";
import { HW73 } from "./HW73";
import { HW77 } from "./HW77";
import { HW8 } from "./HW8";

export const HW = () => {
  return (
    <div>
      <div className="links">
        <Link to="">HW6</Link>
        <Link to="homw62">HomW62</Link>
        <Link to="hw7">HW7</Link>
        <Link to="hw71">HW71</Link>
        <Link to="hw73">HW73</Link>
        <Link to="hw77">HW77</Link>
        <Link to="hw8">HW8</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<HW6 />} />
          <Route path="homw62" element={<HomW62 />} />
          <Route path="hw7" element={<HW7 />} />
          <Route path="hw71" element={<HW71 />} />
          <Route path="hw73" element={<HW73 />} />
          <Route path="hw77" element={<HW77 />} />
          <Route path="hw8" element={<HW8 />} />
        </Routes>
      </div>
    </div>
  );
};
