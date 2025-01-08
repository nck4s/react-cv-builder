import React, { useState } from "react";
import "../styles/PracticalExperience.css";

function PracticalExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={experience.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="fromDate"
            placeholder="From"
            value={experience.fromDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="toDate"
            placeholder="To"
            value={experience.toDate}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
          <p><strong>From:</strong> {experience.fromDate} <strong>To:</strong> {experience.toDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PracticalExperience;
