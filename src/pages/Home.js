import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "../components/Card";
import { Mosaic } from "react-loading-indicators";
import useLoad from "../store/loadStore";
const Home = () => {
  const [students, setStudents] = useState([]);
  const { isLoading, setIsLoading } = useLoad();
  const onDelete = async (regdNo) => {
    try {
      const res = await axios.delete(
        `https://crud-server-4cuk.onrender.com/${regdNo}`
      );
      toast.success("Student deleted successfully from Database!");
      setStudents(students.filter((student) => student.regdNo !== regdNo));
    } catch (e) {
      toast.error("Error occurred while deleting student.");
    }
  };
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "https://crud-server-4cuk.onrender.com/getstudents"
      );
      console.log(res.data.students);
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
    <>
      <h1 className="mt-0 font-semibold text-center text-3xl mb-8">
        Students Data
      </h1>
      <div className="relative px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isLoading ? (
          <div className=" w-full absolute top-[790%] left-[50%]">
            <Mosaic
              color="#32cd32"
              size="Large"
              text=""
              textColor=""
              className=""
            />
          </div>
        ) : (
          ""
        )}
        {students.length === 0 ? (
          <p>No data available</p>
        ) : (
          students.map((student) => (
            <Card student={student} onDelete={onDelete} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
