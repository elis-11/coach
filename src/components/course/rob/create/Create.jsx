import React from "react";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Create = () => {
  const [members, setMembers] = useState([
    { id: "b1", title: "Guide to Happiness", author: "Gael" },
    { id: "b2", title: "Guide to Coaching", author: "Rob" },
    { id: "b3", title: "Guide to JavaScript", author: "Elisa" },
  ]);

  const [newMemeber, setNewMember] = useState({
    title: "",
    author: "",
  });
  const addMember = () => {
    const memberNewState = {
      id: Date.now().toString(),
      title: newMemeber.title,
      author: newMemeber.author,
    };
    setMembers([...members, memberNewState]);
    setNewMember({ ...newMemeber, title: "", author: "" });
  };
  const handleAddMember = (e) => {
    setNewMember({ ...newMemeber, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const deleteMember = members.filter((member) => member.id !== id);
    setMembers(deleteMember);
  };

  return (
    <div>
      <div className="people">
        <div className="container">
          <h2>Create ✨</h2>
          <div className="add">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleAddMember}
              value={newMemeber.title}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={handleAddMember}
              value={newMemeber.author}
            />
            <button onClick={addMember}>Add</button>
          </div>
          {members.length ? (
            <div className="users">
              {members.map((member) => (
                <div className="user">
                  <div className="item">{member.title}</div>
                  <div className="item">{member.author}</div>
                  <div className="icons">
                    <FaEdit className="icon" role="button" tabIndex="0" />
                    <FaTrashAlt
                      onClick={() => handleDelete(member.id)}
                      className="icon"
                      role="button"
                      tabIndex="0"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2>Your List is empty</h2>
          )}
        </div>
      </div>
      <footer>
        <h2>
          {members.length} List {members.length === 1 ? "person" : "people"}
        </h2>
      </footer>
    </div>
  );
};
