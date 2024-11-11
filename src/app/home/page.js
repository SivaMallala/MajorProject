"use client"
import React, { useState,useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function Page() {
    const [profileData, setProfileData] = useState({
        name: "",
        rollNumber: "",
        email: "",
        department:"",
        year:"",
        
      });

      async function fetchexamData() {
        try {
          const res = await fetch("/api/home/gate");
    
          if (!res.ok) throw new Error("Failed to fetch data");
    
          const data = await res.json();
          setexamData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      const [examData, setexamData] = useState([]);
    
      useEffect(() => {
        fetchexamData();
      }, []);
    
      useEffect(() => {
        fetchaData();
      }, []);
      async function fetchaData() {
        try {
          const res = await fetch("/api/home");
  
          if (!res.ok) throw new Error("Failed to fetch data");
  
          const data = await res.json();
  
          setProfileData({
            name: data.name,
            rollNumber: data.number,
            email: data.email,
            department: data. department,
            year: data.year,
          });
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

    const [fullName, setFullName] = useState("")
    const [rollNumber, setRollNumber] = useState("")
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")

    const editData = async () => {
        const profileData = { fullName, rollNumber, department, year };

        try {
            const response = await fetch("/api/home", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profileData),
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }
            setFullName("");
            setRollNumber("");
            setDepartment("");
            setYear("");
            fetchaData();

        } catch (error) {
            console.error("Error submitting request:", error);
        }
    };

    return (
        <main className='flex flex-col items-center w-full justify-center'>
            <h1 className='text-blue-500 font-extrabold text-[40px] mt-4'><span className='text-white font-semibold'>Welcome</span> {profileData.name}</h1>
            <div className='bg-white text-black w-[60%] rounded-[20px] p-4 border-2 mt-10'>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 my-5">
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <label>Full Name</label>
                        <div className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight">
                            {profileData.name}
                        </div>
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <label>Roll Number</label>
                        <div className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight">
                            {profileData.rollNumber}
                        </div>
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <label>E-mail ID</label>
                        <div className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight">
                            {profileData.email}
                        </div>
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <label>Department</label>
                        <div className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight">
                            {profileData.department}
                        </div>
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <label>Acadamic Year</label>
                        <div className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight">
                            {profileData.year}
                        </div>
                    </div>
                </div>
                <div className="flex my-2 justify-end">
                    <Dialog>
                        <DialogTrigger className='text-white bg-black text-[12px] font-bold h-[40px] w-auto py-2 px-7 rounded'>Edit</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                               
                                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                                        <input
                                            placeholder='Full Name'
                                            type='text'
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
                                        />
                                        <input
                                            placeholder='Roll Number'
                                            type='text'
                                            value={rollNumber}
                                            onChange={(e) => setRollNumber(e.target.value)}
                                            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
                                        />
                                        <input
                                            placeholder='Department'
                                            type='text'
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
                                        />
                                        <input
                                            placeholder='Acadamic Year'
                                            type='text'
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                            className="border rounded w-68 py-3.5 px-4 text-gray-800 leading-tight"
                                        />
                                    </div>
                                    <div className='flex my-2 justify-end'>
                                        <button onClick={editData} className='text-white bg-black text-[12px] font-bold h-[40px] w-auto py-2 px-7 rounded'>Submit</button>
                                    </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className='bg-white flex justify-around text-black w-[60%] rounded-[20px] p-4 border-2 mt-10'>
                <div className=' border-2 gap-4 bg-gray-800 rounded-[20px] border-blue-500 p-4 '>
                    <h2 className='font-bold border-b-2 text-blue-400 border-blue-400 mb-2 text-xl'>Drive Dates</h2>
                    {driveData.map((drive, index) => (
                    <p className='text-white' key={index}>
                    {(() => {
                      const date = new Date(drive.date);
                      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                      const day = daysOfWeek[date.getDay()]; // Get the day of the week
                      const dateDay = String(date.getDate()).padStart(2, '0'); // Adds leading zero if single digit
                      const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so adding 1
                      const year = date.getFullYear();
                      return `${day}, ${dateDay}-${month}-${year}`;
                    })()}
                  </p>
                   ))}
                </div>
                <div className=" border-2 gap-4 bg-gray-800 rounded-[20px] border-blue-500 p-4 ">
          <h2 className="font-bold border-b-2 text-blue-400 border-blue-400 mb-2 text-xl">
            Exam Dates and Deadlines
          </h2>
          {examData.map((exam, index) => (
            <div className="text-white" key={index}>
               {exam.gatestartDate ? <p>Gate: {exam.gatestartDate} To {exam.gateendDate}</p>: "Gate: Date not Set"} 
                {exam.grestartDate ? <p>GRE: {exam.grestartDate} To {exam.greendDate}</p> : "GRE: Date not Set"}
                {exam.catstartDate ?  <p>CAT: {exam.catstartDate} To {exam.catendDate}</p> : "CAT: Date not Set"}
                {exam.ieltsstartDate ? <p>IELTS: {exam.ieltsstartDate} To {exam.ieltsendDate}</p> : "IELTS: Date not Set"}
                
            </div>
          ))}
          </div>
                </div>
        </main>
    )
}

export default Page;
