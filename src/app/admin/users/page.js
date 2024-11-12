"use client";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

function Users() {
  const [profileData, setprofileData] = useState([]);
  const [role,setRole] = useState('')
  const [email ,setEmail] = useState("")
  const [fullName ,setFullName] = useState("")
  const [number ,setNumber] = useState("")
  const [department ,setDepartment] = useState("")
  const [year ,setYear] = useState("")
  const [roole ,setroole] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

 const editData = async (id) => {
    const updatedata ={id,role}
    try {
        const response = await fetch("/api/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedata),
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }
        setRole("")
        fetchData();
        

    } catch (error) {
        console.error("Error submitting request:", error);
    }
 }
  async function fetchData() {
    try {
      const res = await fetch("/api/users");

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      setprofileData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <main className="flex text-white flex-wrap justify-center items-center gap-10 m-5">
      {profileData.map((profile, index) => (
        <div className="bg-white text-black rounded-lg flex flex-col justify-center items-center p-3 border-emerald-400 border-2 shadow-gray-400 shadow-lg" key={index}>
          <h1 className="font-bold text-2xl text-emerald-700">{profile.name}</h1>
          <h3 className="font-semibold">{profile.rollno}</h3>
          <p className="bg-blue-600 py-1 px-2 text-white rounded-lg">{profile.role}</p>
          <p>{profile.email}</p>
          <span className="text-sm">Department: {profile.department}  </span> 
          <span className="text-sm">Year: {profile.year}</span>
         
          <Dialog>
            <DialogTrigger className="text-white bg-black p-1 text-sm rounded">
              Edit Role
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                <select
                  className="lg:h-[38px] h-[15px] font-semibold w-[130px] lg:w-[230px] text-[8px]  text-gray-600 lg:text-xs  outline outline-[0.2px] opacity-50 rounded"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  
                >
                  <option className="text-[8px] lg:text-xs"  value="someOption">Select the Role</option>
                  <option className="text-[8px] lg:text-xs">student</option>
                  <option className="text-[8px] lg:text-xs">teacher</option>
                  <option className="text-[8px] lg:text-xs">admin</option>
                  
                </select>
                </div>
                <div className="flex my-2 justify-end">
                  <button
                    onClick={()=>{editData(profile._id)}}
                    className="text-white bg-black text-[12px] font-bold h-[40px] w-auto py-2 px-7 rounded"
                  >
                    Submit
                  </button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </main>
  );
}

export default Users;
