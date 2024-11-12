"use client"
import React,{useState,useEffect} from 'react'

function Placements() {
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
  return (
    <main className='flex flex-col justify-center items-center gap-10 m-6'>

<div className="flex flex-wrap w-[80%] gap-4">
  {driveData === null ? (
    <div className="w-full text-center text-xl font-semibold text-gray-500 mt-10">
      Loading...
    </div>
  ) : driveData.length > 0 ? (
    driveData.map((drive, index) => (
      <div key={index} className="max-w-sm w-fit bg-white rounded-lg shadow-md p-6 text-center">
        <a target="_blank" href={drive.companysite} rel="noopener noreferrer">
          <h1 className="text-2xl font-semibold text-[#00c7ff] mb-4">{drive.companyname}</h1>
        </a>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Eligibility Criteria:</span> {drive.eligibulity}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Syllabus:</span> {drive.syllabus}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Drive Date:</span> {new Date(drive.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Description: </span> {drive.description}
        </p>
      </div>
    ))
  ) : (
    <div className="w-full text-center text-xl font-semibold text-gray-500 mt-10">
      No placements for now...
    </div>
  )}
</div>
        </main>
  )
}

export default Placements