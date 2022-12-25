import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./Create.scss";

export const Create = () => {
  const [members, setMembers] = useState([
    { id: "b1", name: "Ricci", email: "ricci@gmail.com" },
    { id: "b2", name: "Artur", email: "artur@gmail.com" },
    { id: "b3", name: "Anne", email: "anne@gmail.com" },
  ]);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState("");
  const [search, setSearch] = useState("");
  //Add
  const addMember = () => {
    const membNewState = {
      id: Date.now().toString(),
      name: newMember.name,
      email: newMember.email,
    };
    setMembers([...members, membNewState]);
    setNewMember({ ...newMember, name: "", email: "" });
  };
  const handleAddMember = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
  
  //Edit
  const handleEditMember = (e) => {
    setCurrentMember({ ...currentMember, [e.target.name]: e.target.value });
  };
  const handleUpdateMember = (id, updatedMember) => {
    const updatedItem = members.map((member) =>
      member.id === id ? updatedMember : member
    );
    setIsEditing(false);
    setMembers(updatedItem);
  };
  const handleEditForm = (e) => {
    e.preventDefault();
    handleUpdateMember(currentMember.id, currentMember);
  };
  const handleEditClick = (member) => {
    setIsEditing(true);
    setCurrentMember({ ...member });
  };

  const searchMember = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.email.toLowerCase().includes(search.toLowerCase())
  );

  //Delete
  const handleDelete = (id) => {
    const deleteMember = members.filter((member) => member.id !== id);
    setMembers(deleteMember);
  };

  return (
    <div>
      <div className="Users">
        <div className="container">
          <h2>Create ✨</h2>
          <div className="search">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                id="search"
                type="text"
                role="search"
                value={search}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          {isEditing ? (
            <form className="edit" onSubmit={handleEditForm}>
              <input
                type="text"
                name="name"
                placeholder="Edit Name"
                onChange={handleEditMember}
                value={currentMember.name}
              />
              <input
                name="email"
                type="text"
                placeholder="Edit Email"
                onChange={handleEditMember}
                value={currentMember.email}
              />
              <button className="update" type="submit">
                Update
              </button>
              <button className="cancel" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          ) : (
            <div className="add">
              <input
                onChange={handleAddMember}
                value={newMember.name}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onChange={handleAddMember}
                value={newMember.email}
                type="text"
                name="email"
                placeholder="Email"
              />
              <button onClick={addMember}>Add</button>
            </div>
          )}
          {members.length ? (
            <div className="users">
              {searchMember.map((member) => (
                <div key={member.id} className="user">
                  <div>{member.name}</div>
                  <div>{member.email}</div>
                  <div className="icons">
                    <FaEdit
                      onClick={() => handleEditClick(member)}
                      className="icon"
                      role="button"
                      tabIndex="0"
                    />
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
