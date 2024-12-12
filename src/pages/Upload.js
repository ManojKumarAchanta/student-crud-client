import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Mosaic } from "react-loading-indicators";
const UploadDetails = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    regdNo: "",
    mobileNo: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const submitData = async (data) => {
      try {
        setIsLoading(true);
        await axios.post(
          "https://student-crud-server.onrender.com/addstudent",
          formData
        );
        toast.success("Details uploaded successfully");
        // setTimeout(() => {
        navigate("/");
        // }, 2000);
      } catch (e) {
        toast.error("Can't connect to server");
      } finally {
        setIsLoading(false);
      }
    };
    submitData();
  };

  return (
    <div className="relative top-20">
      {isLoading ? (
        <div className=" w-full absolute top-[790%] left-[50%]">
          <Mosaic
            color="#32cd32"
            size="medium"
          />
        </div>
      ) : (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="regdNo"
              >
                RegdNo
              </label>
              <input
                type="text"
                id="regdNo"
                name="regdNo"
                value={formData.regdNo}
                placeholder="Enter your Regdno"
                pattern="\d{2}[a-zA-Z]\d{2}[a-zA-Z]\d{2}[a-zA-Z0-9]{2}"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="student@sasi.ac.in"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your Department"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobileNo"
              >
                Mobile No
              </label>
              <input
                id="mobileNo"
                name="mobileNo"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your mobile no"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload Details
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UploadDetails;
