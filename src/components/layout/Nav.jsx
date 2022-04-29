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
      <NavLink
        to="/create"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Create
      </NavLink>
      <NavLink
        to="/devs"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Devs
      </NavLink>
    </nav>
  );
};
