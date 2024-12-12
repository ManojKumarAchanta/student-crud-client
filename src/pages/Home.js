import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Card from "../components/Card";
import { Mosaic } from "react-loading-indicators";
import useLoad from "../store/loadStore";
const Home = () => {
  const [students, setStudents] = useState([]);
  const { isLoading, setIsLoading } = useLoad();
  const { isUpdating, setIsUpdating } = useLoad();
  const onDelete = async (regdNo) => {
    try {
      await axios.delete(`https://student-crud-server.onrender.com/${regdNo}`);
      toast.success("Student deleted successfully in Database!");
      setStudents(students.filter((student) => student.regdNo !== regdNo));
    } catch (e) {
      toast.error("Error occurred while deleting student.");
    }
  };
  const onEdit = async (regdNo, data) => {
    try {
      setIsUpdating(true);
      if (data) {
        await axios.put(
          `https://student-crud-server.onrender.com/${regdNo}`,
          data
        );
      }
      toast.success("Student updated successfully from Database!");
    } catch (e) {
      toast.error("Error occurred while updating student.");
    }
  };
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "https://student-crud-server.onrender.com/getstudents"
      );
      setStudents(res.data.students);
    } catch (e) {
      toast.error("Error occcured.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="relative top-20">
      <h1 className="mt-0 font-semibold text-center text-3xl mb-8">
        Registered Students
      </h1>
      <div className="relative px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isLoading ? (
          <div className=" w-full absolute top-[790%] left-[50%]">
            <Mosaic color="#32cd32" size="Large" />
          </div>
        ) : (
          ""
        )}
        {students.length === 0 ? (
          <p>No data available</p>
        ) : (
          students.map((student) => (
            <Card
              key={student.regdNo}
              student={student}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
