import React, { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '';
    });
}

const handeChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
};

const handleEdit = () => {
    setIsEditing(true);
};

return (
    <div className="general-info">
         <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );

export default GeneralInfo;
