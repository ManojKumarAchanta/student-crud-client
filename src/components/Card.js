import React from "react";

const Card = ({ student, onDelete }) => {
  return (
    <div className="cursor-pointer max-w-sm smooth-transition mx-auto bg-white rounded shadow-md p-4 relative">
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={() => onDelete(student.regdNo)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
      <h2 className="text-lg font-bold mb-2">{student.name}</h2>
      <p className="text-gray-600 mb-2">
        Registration Number: {student.regdNo}
      </p>
      <p className="text-gray-600 mb-2">Mobile Number: {student.mobileNo}</p>
      <p className="text-gray-600 mb-2">Email: {student.email}</p>
      <p className="text-gray-600 mb-2">Department: {student.department}</p>
    </div>
  );
};

export default Card;
