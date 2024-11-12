"use client";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Questions() {
  const [question, setQuestion] = useState("");
  const [answer , setAnswer] = useState("")
  const submitQuestion = async () => {
    try {
      if(!question){
        alert("Enter Question")
      }else{
        const response = await fetch("/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        });
  
        if (!response.ok) {
          throw new Error("Request failed");
        }
        setQuestion("");
        fetchQuestions();
      }
     
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };
  const submitAnswer = async (id) => {
    try {
      const response = await fetch("/api/questions", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, answer }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
      setAnswer("");
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  }

  const [showquestion, setShowQuestion] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    try {
      const res = await fetch("/api/questions");

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      setShowQuestion(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
  return (
    <main className="flex flex-col text-white flex-wrap justify-center items-center gap-10 m-5">
      <h1 className="text-2xl font-bold">Q&A Section...</h1>
      <div className="bg-white text-black rounded-[20px] flex flex-col w-[60%] p-4 border mt-10">
        <h1 className="text-xl font-semibold">Ask a Question...</h1>
        <div className="flex items-center w-[100%] ">
          <textarea
            className="border-2 border-black rounded-lg w-[80%] h-32 p-4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            onClick={submitQuestion}
            className="bg-black p-3 text-lg text-white ml-5 h-8 flex items-center rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
      <hr className="w-[90%] border-2 border-white" />
      <div className="border-white text-white rounded-[20px] flex flex-col w-[60%] p-4 border-2 mt-10">
  {showquestion.length === 0 ? (
    <p className="text-center text-white">No questions</p>
  ) : (
    showquestion.slice().reverse().map((question, index) => (
      <Accordion className="mt-4" key={index} type="single" collapsible>
        <p>Asked by: {question.name}, Roll Number: {question.number}</p>
        <AccordionItem value="item-1">
          <AccordionTrigger>{question.question}</AccordionTrigger>
          <AccordionContent>
            {question.answer ? question.answer : "Not yet answered"}
            {role === 'teacher' ? (
              <div>
                <textarea
                  className="border-2 text-black border-black rounded-lg w-[80%] h-32 p-4"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <button
                  onClick={() => submitAnswer(question._id)}
                  className="bg-white p-3 text-lg text-black ml-5 h-8 flex items-center rounded-lg"
                >
                  Submit Answer
                </button>
              </div>
            ) : null}
          </AccordionContent>
          <p>
  {question.answer ? `Answered by: ${question.answeredby}` : "Not yet answered"}
</p>
        </AccordionItem>
      </Accordion>
    ))
  )}
</div>

    </main>
  );
}

export default Questions;
