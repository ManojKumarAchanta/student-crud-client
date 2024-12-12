import React, { useState } from "react";
import { Pencil, Save } from "lucide-react";

const Card = ({ student, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onEdit(student.regdNo, editedStudent); // Call onEdit with updated student details
    setIsEditing(false);
  };
  return (
    <div className="border rounded-lg smooth-transition shadow-lg p-4 relative flex flex-col gap-4">
      {/* Edit Icon */}

      {!isEditing && (
        <button
          className="absolute top-2 right-12 text-blue-500 hover:text-blue-700"
          onClick={() => setIsEditing(true)}
        >
          <Pencil size={22} />
        </button>
      )}
      <button
        onClick={() => onDelete(student.regdNo)}
        className="absolute top-1 right-2 text-red-500 hover:text-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={"red"}
          width={28}
          height={28}
        >
          <path d="M3 6h18v2H3V6zm2 3h14l-1.5 13H6.5L5 9zm6.5 3h-1v8h1v-8zm3 0h-1v8h1v-8zM9 4h6v1H9V4zm3-2c.55 0 1 .45 1 1h-2c0-.55.45-1 1-1z" />
        </svg>
      </button>
      {/* Form for editing */}
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-2">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={editedStudent.name}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Registration Number
            </label>
            <input
              type="text"
              name="regdNo"
              contentEditable="false"
              value={editedStudent.regdNo}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={editedStudent.email}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobileNo"
              value={editedStudent.mobileNo}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={editedStudent.department}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
            <Save size={16} className="inline mr-2" /> Save
          </button>
        </form>
      ) : (
        // Display student details
        <div className="flex flex-col gap-2 text-md md:text-lg lg:text-lg ">
          <h2 className="text-xl font-semibold">{student.name}</h2>
          <p className="text-sm"><span className="font-semibold">Registration Number</span>: {student.regdNo}</p>
          <p className="text-sm"><span className="font-semibold">Email:</span> {student.email}</p>
          <p className="text-sm"><span className="font-semibold">Mobile Number</span>: {student.mobileNo}</p>
          <p className="text-sm"><span className="font-semibold">Department:</span> {student.department}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
