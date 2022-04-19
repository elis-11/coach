import './Style.scss';
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const Create = () => {
  const [members, setMembers] = useState([
    { id: "b1", name: "Gael", experience: 15 },
    { id: "b2", name: "Elisa", experience: 2 },
    { id: "b3", name: "Rob", experience: 17 },
  ]);
  const [newMember, setNewMember] = useState({
    name: "",
    experience: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState("");

  //Add
  const addMember = () => {
    const membNewState = {
      id: Date.now().toString(),
      name: newMember.name,
      experience: newMember.experience,
    };
    setMembers([...members, membNewState]);
    setNewMember({ ...newMember, name: "", experience: "" });
  };
  const handleAddMember = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
  //Edit
  const handleEditMember = (e) => {
    setCurrentMember({ ...currentMember, [e.target.name]: e.target.value});
  };
  const handleUpdatedMember = (id, updatedMember) => {
    const updatedItem = members.map((member) =>
      member.id === id ? updatedMember : member
    );
    setIsEditing(false);
    setMembers(updatedItem);
  };
  const handleEditForm = (e) => {
    e.preventDefault();
    handleUpdatedMember(currentMember.id, currentMember);
  };
  const handleEditClick = (member) => {
    setIsEditing(true);
    setCurrentMember({ ...member });
  };

  //Delete
  const handleDelete = (id) => {
    const deleteMember = members.filter((member) => member.id !== id);
    setMembers(deleteMember);
  };

  return (
    <div>
      <div className="people">
        <div className="container">
          <h2>Create ✨</h2>
          {isEditing ? (
            <form className="edit" onSubmit={handleEditForm}>
              <input
                name="name"
                type="text"
                placeholder="Edit Name"
                onChange={handleEditMember}
                value={currentMember.name}
              />
              <input
                name="experience"
                type="text"
                placeholder="Edit Experience"
                onChange={handleEditMember}
                value={currentMember.experience}
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
                value={newMember.experience}
                type="text"
                name="experience"
                placeholder="Experience"
              />
              <button onClick={addMember}>Add</button>
            </div>
          )}
          {members.length ? (
            <div className="users">
              {members.map((member) => (
                <div key={member.id} className="user">
                  <div>{member.name}</div>
                  <div>{member.experience}</div>
                  <div className="icons">
                    <FaEdit 
                    onClick={() =>handleEditClick(member)}
                    className="icon" role="button" tabIndex="0" />
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
