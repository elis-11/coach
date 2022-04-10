import { Link, Route, Routes } from "react-router-dom";
import { HW6 } from "./HW6";
import { Update } from "./Update";
import { HW7 } from "./HW7";
import { HW71 } from "./HW71";
import { CreateUs } from "./CreateUs";
import { CreatePers } from "./CreatePers";
import { HW8 } from "./HW8";
import Person  from "./Person";

export const HW = () => {
  return (
    <div>
      <div className="links">
        <Link to="">HW6</Link>
        <Link to="update">Update</Link>
        <Link to="hw7">HW7</Link>
        <Link to="hw71">HW71</Link>
        <Link to="createus">CreateUs</Link>
        <Link to="createpers">CreatePers</Link>
        <Link to="hw8">HW8</Link>
        <Link to="person">Person</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="" element={<HW6 />} />
          <Route path="update" element={<Update />} />
          <Route path="hw7" element={<HW7 />} />
          <Route path="hw71" element={<HW71 />} />
          <Route path="createus" element={<CreateUs />} />
          <Route path="createpers" element={<CreatePers />} />
          <Route path="hw8" element={<HW8 />} />
          <Route path="person" element={<Person />} />
        </Routes>
      </div>
    </div>
  );
};
