import { Route, Routes } from "react-router-dom";
import { Course } from "./components/course/Course";
import { Home } from "./components/home/Home";
import { Nav } from "./components/layout/Nav";
import { EBook } from "./components/ebook/EBook";
import { Create } from "./components/create/Create";
import { Devs } from "./components/devs/Devs";
import { Cars } from "./components/cars/Cars";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebook/*" element={<EBook />} />
        <Route path="/course/*" element={<Course />} />
        <Route path="/create" element={<Create />} />
        <Route path="/devs" element={<Devs />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
