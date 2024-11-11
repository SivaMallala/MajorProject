"use client";
import React, { useState, useEffect } from "react";

function AdminPlacements() {

  const [role, setrole] = useState("");

  useEffect(() => {
    fetchrole();
  }, []);

  async function fetchrole() {
    try {
      const res = await fetch("/api/role");

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      setrole(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  const [driveData, setDriveData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await fetch("/api/placements");

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      setDriveData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const [companyName, setcompanyName] = useState("");
  const [companysite, setcompanysite] = useState("");
  const [eligibilityCriteria, setEligibilitycriteria] = useState("");
  const [Syllabus, setSyllabus] = useState("");
  const [driveDate, setDrivedate] = useState("");

  const removeDrive = async (id) => {
    try {
      const response = await fetch("/api/placements", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Send the id as part of an object
      });

      // Check if the response was successful
      if (response.ok) {
        console.log("Drive removed successfully");
        fetchData();
      } else {
        const errorData = await response.json();
        console.error("Failed to remove drive:", errorData.message);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  const postDrive = async () => {
    if (!companyName || !eligibilityCriteria || !Syllabus || !driveDate) {
      alert("fill all details");
    } else {
      const driveDetails = {
        companyName,
        companysite,
        eligibilityCriteria,
        Syllabus,
        driveDate,
      };
      try {
        const response = await fetch("/api/placements", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(driveDetails),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
        setcompanyName("");
        setcompanysite("");
        setEligibilitycriteria("");
        setSyllabus("");
        setDrivedate("");
        fetchData();
      } catch (error) {
        console.error("Error submitting request:", error);
      }
    }
  };
  return (
    <main className="flex flex-col justify-center items-center gap-10 mb-2">
      
      {role ==='admin' ?  <div className="bg-white text-black rounded-[20px] w-fit p-4 border mt-10">
        <div className="grid w-full grid-cols-2 max-w-sm items-center gap-5">
          <input
            placeholder="Company Name"
            type="text"
            value={companyName}
            onChange={(e) => setcompanyName(e.target.value)}
            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
          />
          <input
            placeholder="Company Web Site"
            type="text"
            value={companysite}
            onChange={(e) => setcompanysite(e.target.value)}
            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
          />
          <input
            placeholder="Eligibility Criteria"
            type="text"
            value={eligibilityCriteria}
            onChange={(e) => setEligibilitycriteria(e.target.value)}
            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
          />
          <input
            placeholder="Syllabus"
            type="text"
            value={Syllabus}
            onChange={(e) => setSyllabus(e.target.value)}
            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
          />
          <input
            placeholder="Drive Date"
            type="date"
            value={driveDate}
            onChange={(e) => setDrivedate(e.target.value)}
            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
          />
        </div>
        <div className="flex my-2 justify-end">
          <button
            onClick={postDrive}
            className="text-white bg-black text-[12px] font-bold h-[40px] w-auto py-2 px-7 rounded"
          >
            Post Drive
          </button>
        </div>
      </div> : null}
      <div className="flex flex-wrap w-[80%] gap-4">
        {driveData.map((drive, index) => (
          <div
            key={index}
            className="max-w-sm w-fit bg-white rounded-lg shadow-md p-6 text-center"
          >
            <a target="__blank" href={drive.companysite}>
              <h1 className="text-2xl font-semibold text-[#00c7ff] mb-4">
                {drive.companyname}
              </h1>
            </a>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Eligibility Criteria:</span>{" "}
              {drive.eligibulity}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Syllabus:</span> {drive.syllabus}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Drive Date:</span>{" "}
              {new Date(drive.date).toLocaleDateString()}
            </p>
            {role === 'admin' ?   <button
              className="bg-red-600 text-white p-2 rounded-lg mt-2"
              onClick={() => removeDrive(drive._id)}
            >
              Remove
            </button> : null}
           
          </div>
        ))}
      </div>
    </main>
  );
}

export default AdminPlacements;
