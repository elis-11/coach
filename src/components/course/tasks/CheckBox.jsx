import React, { useState } from "react";

export const CheckBox = () => {
  const [teachers, setTeachers] = useState([
    { id: "1", name: "Anne", city: "Berlin" },
    { id: "2", name: "Aza", city: "Hamburg" },
    { id: "3", name: "Olaf", city: "Hamburg" },
  ]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);

  const cityFilter = (arr,city) => {
    if (city === "Berlin") {
      const newFilter = items.filter(
        (item) => item.city.toLowerCase() === "Berlin"
      );
      return [...filteredItems, ...newFilter];
    } else if (city === "Hamburg") {
      const newFilter = items.filter(
        (item) => item.city.toLowerCase() === "Hamburg"
      );
      return [...filteredItems, ...newFilter];
    } else if (city === "Madrid") {
      const newFilter = items.filter(
        (item) => item.city.toLowerCase() === "Madrid"
      );
      return [...filteredItems, ...newFilter];
    } 
    else {
      return arr;
    }
  };

  return (
    <div className="Teachers">
      <div className="topnav">
        <div className="container">
          <form action="#">
            <input type="search" placeholder="Search.." name="search" />
          </form>
        </div>
        <div className="filter">
          <div className="form-check">
            <span>
              <input
                className="form-check-input"
                type="checkbox"
                checked="checked"
                value="berlin"
                onChange={() => setFilteredItems(cityFilter("Berlin"))}
                id="berlin"
              />
              <label className="form-check-label" htmlFor="berlin">
                Berlin
              </label>
            </span>
            <span>
              <input
                className="form-check-input"
                type="checkbox"
                value="hamburg"
                onChange={() => setFilteredItems(cityFilter("Hamburg"))}
                id="hamburg"
              />
              <label className="form-check-label" htmlFor="hamburg">
                Hamburg
              </label>
            </span>
            <span>
              <input
                className="form-check-input"
                type="checkbox"
                value="madrid"
                onChange={() => setFilteredItems(cityFilter("Madrid"))}
                id="madrid"
              />
              <label className="form-check-label" htmlFor="madrid">
                Madrid
              </label>
            </span>
          </div>
        </div>
      </div>
      <div className="teachers">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="teacher">
              <div className="item">{teacher.name}  {teacher.city}</div>
            </div>
          ))}
        </div>

      {/* <div className="regions-grid py-5">
      {selectedProfiles.map(i => (
        <Profiles profile={i} key={i.Email} />
      ))}
    </div> */}
      {/* <Footer
      totalPages={totalPages}
      handleClick={handleClick}
      selectedProfiles={selectedProfiles}
      /> */}
    </div>
  );
};

// //on your events:
