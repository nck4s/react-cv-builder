import React, { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="education">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={education.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date of Study"
            value={education.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Title:</strong> {education.title}</p>
          <p><strong>Date:</strong> {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
