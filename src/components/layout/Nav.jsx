import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "active" : "none")}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/ebook"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        EBook
      </NavLink>
      <NavLink
        to="/course"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Course
      </NavLink>
    </nav>
  );
};
