"use client"
import React,{useState} from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { FaYoutube,FaLink } from "react-icons/fa";
  

function Gate() {
    const gatesubjects =[
        {name:"Computer Science & Information Technology",
            code:"CS",
            yt:"https://www.youtube.com/playlist?list=PLynLXReWAxdElXlBKOfqenSJw3Sh_77de",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_CS_2025_Syllabus.pdf"   
        },
        {name:"Civil Engineering",
            code:"CE",
            yt:"https://www.youtube.com/playlist?list=PLr3aZ3Y9l4i2L2dtLlhIXdP-QKiQQuoRU",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_CE_2025_Syllabus.pdf"   
        },
        {name:"Electronics & Communication Engineering",
            code:"EC",
            yt:"https://www.youtube.com/playlist?list=PLynLXReWAxdEod_E-seglXdfOhwARXvNB",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_EC_2025_Syllabus.pdf"   
        },{name:"Electrical Engineering",
            code:"EE",
            yt:"https://www.youtube.com/playlist?list=PLgzsL8klq6DLThHYAC56HdHqjtnZ8IJLS",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_EE_2025_Syllabus.pdf"   
        },
        {name:"Mechanical Engineering",
            code:"ME",
            yt:"https://www.youtube.com/playlist?list=PLynLXReWAxdFY65ZwPQUBYrki4q91m8vG",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_ME_2025_Syllabus.pdf"   
        },
        {name:"Aerospace Engineering",
         code:"AE",
         link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_AE_2025_Syllabus.pdf",
         yt:"https://www.youtube.com/playlist?list=PLvMOQ5JLTIeY_RM3anxllNSvXHnHNo9J2"   
        },
        {name:"Agricultural Engineering",
            code:"AG",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_AG_2025_Syllabus.pdf",
            yt:"https://www.youtube.com/playlist?list=PLf17-tmbdTL96DeQoT64UJQPM9KA-Hun6"   
        },{name:"Architecture and Planning",
            code:"AR",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_AR_2025_Syllabus.pdf" ,
            yt:"https://www.youtube.com/playlist?list=PLAM7pQT4Sexv5pSSq2DtwWIzSyB2kIDmd"  
        },{name:"Biomedical Engineering",
            code:"BM",
            yt:"https://www.youtube.com/playlist?list=PLyCKmxwCo5RkAagGxZ0nCa_HuPmKgZbVA",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_BM_2025_Syllabus.pdf"   
        },{name:"Biotechnology",
            code:"BT",
            yt:"https://www.youtube.com/playlist?list=PLXXeSg8J7KGTnjCUeqNU7GsJPhFwsUcS3",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_BT_2025_Syllabus.pdf"   
        },{name:"Chemical Engineering",
            code:"CH",
            yt:"https://www.youtube.com/playlist?list=PLZJ1iScV7qFX8a39GBGCHSADVJlk2rwPu",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_CH_2025_Syllabus.pdf"   
        },{name:"Chemistry",
            yt:"https://www.youtube.com/playlist?list=PL8bZZHwl4U15RK2ZiSZlBDXnq6VCUmhE9",
            code:"CY",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_CY_2025_Syllabus.pdf"   
        },{name:"Data Science & Artificial Intelligence",
            code:"DA",
            yt:"https://www.youtube.com/live/VBl3vossXI4?si=6m9biUlfCFKzmDUB",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_DA_2025_Syllabus.pdf"   
        },{name:"Environmental Science & Engineering",
            code:"ES",
            yt:"https://www.youtube.com/playlist?list=PLLtWVVE-awYhF-_oZtvpJcOVyCT9BSIXy",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_ES_2025_Syllabus.pdf"   
        },{name:"Ecology and Evolution",
            code:"EY",
            yt:"https://www.youtube.com/playlist?list=PLYoRNZqAUzEII9GHw72uptWq8xlkVY5_T",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_EY_2025_Syllabus.pdf"   
        },
        {name:"Geomatics Engineering",
            code:"GE",
            yt:"https://www.youtube.com/playlist?list=PLGDkTyubs644IVnPFzoxWa_igIaGpzfL_",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_GE_2025_Syllabus.pdf"   
        },{name:"Geology & Geophysics",
            code:"GG",
            yt:"https://www.youtube.com/playlist?list=PL6-sJEYPUB-yle2t7bBenfpLDnyb0Fjx7",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_GG_2025_Syllabus.pdf"   
        },{name:"Instrumentation Engineering",
            code:"IN",
            yt:"https://www.youtube.com/playlist?list=PLs5_Rtf2P2r7AXviCs8syWPFC8Qyy4bsX",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_IN_2025_Syllabus.pdf"   
        },{name:"Mathematics",
            code:"MA",
            yt:"https://www.youtube.com/playlist?list=PLB6MUoMXv9xcGOPDraWI707O7Zj5qVrDW",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_MA_2025_Syllabus.pdf"   
        },{name:"Mining Engineering",
            code:"MN",
            yt:"https://www.youtube.com/playlist?list=PLY00heSm1KTChCnmRsC2RIxYgvwF95Cap",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_MN_2025_Syllabus.pdf"   
        },{name:"Metallurgical Engineering",
            code:"MT",
            yt:"https://www.youtube.com/playlist?list=PL-YvzoGTSYl75KHB1mSZXdnN48HXYeL1r",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_MT_2025_Syllabus.pdf"   
        },{name:"Naval Architecture & Marine Engineering",
            code:"NM",
            yt:"https://www.youtube.com/playlist?list=PLpp8mmsv42XHoTf_jTdLMilA4vW3qngX3",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_NM_2025_Syllabus.pdf"   
        },{name:"Petroleum Engineering",
            code:"PE",
            yt:"https://www.youtube.com/playlist?list=PLwdnzlV3ogoXaR022q94pSCRVCOOqkciO",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_PE_2025_Syllabus.pdf"   
        },{name:"Physics",
            code:"PH",
            yt:"https://www.youtube.com/playlist?list=PL0vbmKf7BZLO6byvD1ks5355CtpUmzIQy",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_PH_2025_Syllabus.pdf"   
        },{name:"Production & Industrial Engineering",
            code:"PI",
            yt:"https://www.youtube.com/playlist?list=PLjtQ3BMex7htvmSm6iDmjweVVI4NfYW_x",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_PI_2025_Syllabus.pdf"   
        },{name:"Statistics",
            code:"ST",
            yt:"https://www.youtube.com/playlist?list=PL-MuYPrrlPQZ77ibQzuaSLCgRR_v2ePBU",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_ST_2025_Syllabus.pdf"   
        },{name:"Textile Engineering & Fibre Science",
            code:"TF",
            yt:"https://www.youtube.com/playlist?list=PL0-bArK_VU0ZMl6HSju3de9B7A79VY0UC",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_TF_2025_Syllabus.pdf"   
        },{name:"Engineering Sciences",
            code:"XE",
            yt:"https://www.youtube.com/playlist?list=PLveOHQXne1otBbDgB65IRvV_iBaA2E_g8",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_XE_2025_Syllabus.pdf"   
        },{name:"Humanities & Social Sciences",
            code:"XH",
            yt:"https://www.youtube.com/playlist?list=PLeMARc5Lb1py4EYi_E7yoIlSgnhhhFxWy",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_XH_2025_Syllabus.pdf"   
        },{name:"Life Sciences",
            code:"XL",
            yt:"https://www.youtube.com/playlist?list=PLBUibmA0dbhtk91LKX53qNcr-e8Nxo4kS",
            link:"https://gate2025.iitr.ac.in/doc/2025/GATE%20_XL_2025_Syllabus.pdf"   
        },
    ]
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(gatesubjects.length / itemsPerPage);

    const handleChangePage = (direction) => {
        setCurrentPage((prevPage) => prevPage + direction);
    };

    const displayedSubjects = gatesubjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className="text-white w-[90%] m-10 flex flex-col items-center justify-center">
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">GATE Test Paper</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead>YouTube</TableHead>
                            <TableHead>Previous Year Papers</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {displayedSubjects.map((subject, index) => (
                            <TableRow key={index}>
                                <TableCell><a href={subject.link} target="_blank" rel="noopener noreferrer">{subject.name}</a></TableCell>
                                <TableCell><a href={subject.link} target="_blank" rel="noopener noreferrer">{subject.code}</a></TableCell>
                                <TableCell><a href={subject.yt} target="_blank" rel="noopener noreferrer"><FaYoutube size={25}/></a></TableCell>
                                <TableCell><a href="https://gate2025.iitr.ac.in/download.html" target="_blank" rel="noopener noreferrer">  <FaLink size={15}/></a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex mt-4 space-x-4">
                    <button
                        onClick={() => handleChangePage(-1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-500"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => handleChangePage(1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-500"
                    >
                        Next
                    </button>
                </div>
        </div>
  )
}

export default Gate