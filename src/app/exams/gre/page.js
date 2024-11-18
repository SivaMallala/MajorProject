import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaYoutube,FaLink } from "react-icons/fa";

function Gre() {
  return (
    <div className="text-white w-[90%] m-10 flex flex-col  justify-center">
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">GRE ?</h1>
        <p className="">
          GRE or the graduate record examination is taken by students who aspire
          to pursue a postgraduate degree from a university abroad. It has two
          test formats -GRE General and GRE Subject Test. The syllabus for each
          test is different. The GRE General Test syllabus is composed of three
          sections – Quantitative reasoning, Verbal reasoning, and Analytical
          writing. It focuses on measuring your verbal reasoning, quantitative
          reasoning, analytical writing, and critical thinking skills.
        </p>
        <p>
          On the other hand, the GRE subject test syllabus focuses on evaluating
          the candidate’s expertise in specific fields such as Mathematics,
          physics, etc.{" "}
        </p>
      </div>
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">GRE Syllabus for General Test</h1>
        <p>
          The GRE exam syllabus measures verbal reasoning, critical thinking,
          analytical writing skills, and quantitative reasoning. The syllabus is
          broadly divided into three sections – Analytical Writing, Quantitative
          reasoning, and Verbal Reasoning. The GRE General Test is a
          computer-delivered test. The overall test time is about 1 hour and 58
          minute.
        </p>
        <table className="min-w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Computer-based
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                No. of sections
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Total duration
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                No. of questions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Verbal Reasoning
              </td>
              <td className="px-6 py-4 border-b border-gray-700">2</td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">41 minutes</span>
                <p className="text-gray-400">Section 1: 18 min.</p>
                <p className="text-gray-400">Section 2: 23 min.</p>
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">27</span>
                <p className="text-gray-400">Section 1: 12 ques</p>
                <p className="text-gray-400">Section 2: 15 ques</p>
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Quantitative Reasoning
              </td>
              <td className="px-6 py-4 border-b border-gray-700">2</td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">47 minutes</span>
                <p className="text-gray-400">Section 1: 21 min.</p>
                <p className="text-gray-400">Section 2: 26 min.</p>
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">27</span>
                <p className="text-gray-400">Section 1: 12 ques.</p>
                <p className="text-gray-400">Section 2: 15 ques</p>
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Analytical Writing
              </td>
              <td className="px-6 py-4 border-b border-gray-700">1</td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">30 minutes</span>
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">1</span>
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700 font-bold">
                Total
              </td>
              <td className="px-6 py-4 border-b border-gray-700">5</td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">
                  1 hours 58 Minutes
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                <span className="font-semibold text-cyan-400">55</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The Analytical Writing section will always be first. The Verbal
          Reasoning and Quantitative Reasoning sections may appear in any order
          after the Analytical Writing section.
        </p>
      </div>
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">
          GRE Syllabus for Verbal Reasoning
        </h1>
        <p className="">
          The GRE Verbal Reasoning section tests your ability to understand the
          meanings of words, entire texts, and sentences. It’s syllabus measures
          your understanding of relationships among terms and concepts
        </p>
        <p>
          You need to analyze and draw conclusions from the discourse, identify
          the author’s assumptions/perspective, and understand multiple levels
          of meaning, such as figurative, literal, and author’s intent.
        </p>
        <p>List of the topics covered in GRE Verbal Reasoning: </p>
        <ol start={1} className="list-decimal list-inside">
          <li>Modifiers and Parallelism</li>
          <li>Idioms and Idiomatic expressions</li>
          <li>Verb tense</li>
          <li>Pronoun Agreement</li>
          <li>Subject-Verb Agreement</li>
          <li>Nouns, Adjectives, Pronouns</li>
        </ol>
        <p>The GRE verbal Syllabus is divided into three parts:</p>
        <ul className="list-disc list-inside">
          <li>Reading Comprehension</li>
          <li>Sentence Equivalence</li>
          <li>Text Completion</li>
        </ul>
      </div>
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">
          GRE Syllabus for Quantitative Reasoning section
        </h1>
        <p className="">
          The GRE Quant Reasoning section tests your ability to solve problems
          using mathematical models. You are required to understand, analyze,
          and interpret quantitative information. To ace this section, you need
          to apply basic elementary concepts and skills of arithmetic, geometry,
          data analysis, and algebra.
        </p>
        <h5>Topics in GRE Quantitative reasoning:</h5>
        <table className="min-w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Arithmetic
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Geometry
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Data Analysis
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Algebra
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Property and types of integer
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Lines and angles{" "}
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Descriptive statistics such as Median, Mean, Range, Mode,
                Percentiles, etc.
              </td>
              <td className="px-6 py-4 border-b border-gray-700">Exponents</td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Power and roots
              </td>
              <td className="px-6 py-4 border-b border-gray-700">Circles </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Interpretation of data based on graphs, circle graphs, scatter
                plots, etc
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Algebraic Expressions – Factoring and Simplifying
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">Statistics</td>
              <td className="px-6 py-4 border-b border-gray-700">Triangle</td>
              <td className="px-6 py-4 border-b border-gray-700">
                Probability
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Equations and inequalities
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">Estimation</td>
              <td className="px-6 py-4 border-b border-gray-700">
                Quadrilaterals
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Permutation and Combination
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Linear and Quadratic inequalities
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Number properties
              </td>
              <td className="px-6 py-4 border-b border-gray-700">Polygon</td>
              <td className="px-6 py-4 border-b border-gray-700">
                Venn Diagrams
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Linear Equations
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">Percentage</td>
              <td className="px-6 py-4 border-b border-gray-700">
                Three-dimensional figures
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Sets Theory
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Quadratic equations
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Exponents and Roots
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Area, Perimeter, Volume
              </td>
              <td className="px-6 py-4 border-b border-gray-700"></td>
              <td className="px-6 py-4 border-b border-gray-700">
                Word Problems
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Ratio and proportions
              </td>
              <td className="px-6 py-4 border-b border-gray-700">
                Angle Measurements
              </td>
              <td className="px-6 py-4 border-b border-gray-700"></td>
              <td className="px-6 py-4 border-b border-gray-700">
                Speed, distance, and Time
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Simple and Compound Interest
              </td>
              <td className="px-6 py-4 border-b border-gray-700"> </td>
              <td className="px-6 py-4 border-b border-gray-700"></td>
              <td className="px-6 py-4 border-b border-gray-700">
                Profit and Loss
              </td>
            </tr>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
                Arithmetic Operations
              </td>
              <td className="px-6 py-4 border-b border-gray-700"> </td>
              <td className="px-6 py-4 border-b border-gray-700"></td>
              <td className="px-6 py-4 border-b border-gray-700">
                Coordinate geometry
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">
          GRE Syllabus for Analytical Writing
        </h1>
        <p className="">
          This section measures your analytical writing and critical thinking
          skills.
        </p>
        <p>
          The GRE Analytical Writing section tests how well you can articulate
          complex ideas effectively and clearly. Are you able to support them
          with relevant examples and reasons? It requires you to provide focused
          responses based on the tasks presented.
        </p>
        <p>
          The Analytical Writing measure consists of a 30-minute “Analyze an
          Issue” task. This task presents an opinion on an issue and
          instructions on how to respond. You’re required to evaluate the issue,
          consider its complexities and develop an argument with reasons and
          examples to support your views. The tasks in the GRE Analytical
          Writing section is related to a broad range of topics such as fine
          arts, physical science, humanities, and more. You do not require
          knowledge on a specific topic. Regardless of your field of study or
          interests, you will be able to understand the task.
        </p>
      </div>
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">GRE Subject Test Syllabus 2024</h1>
        <p className="">
          GRE Subject Tests is administered in a computer-delivered format.
          Total testing time is 2 hours and 50 minutes for the Mathematics Test
          and 2 hours for the Physics and Psychology Tests. There are no
          separately timed sections. The GRE syllabus for the subject test
          consists of three disciplines:
        </p>
        <ul className="list-disc list-inside">
          <li>Mathematics</li>
          <li>Psychology </li>
          <li>Physics</li>
        </ul>
        <Tabs defaultValue="Mathematics Test" className="w-[50%]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="Mathematics Test">Mathematics Test</TabsTrigger>
            <TabsTrigger value="Physics Test">Physics Test</TabsTrigger>
            <TabsTrigger value="Psychology Test">Psychology Test</TabsTrigger>
          </TabsList>
          <TabsContent value="Mathematics Test">
            <Card>
              <CardContent className="space-y-2">
                <p>
                  The test consists of approx. 66 multiple-choice questions
                  drawn from courses that are offered at the undergraduate
                  level. The topics include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Calculus (50%)</li>
                  <li>Algebra (25%)</li>
                  <li>Additional Topics (25%)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Physics Test">
            <Card>
              <CardContent className="space-y-2">
                <p>
                  The test consists of approx. 70 five-choice questions, which
                  are grouped in sets and based on materials such as graphs,
                  diagrams, and experimental data. The topics include:
                </p>
                <ul className="list-disc ml-6">
                  <li>Classical Mechanics (20%)</li>
                  <li>Electromagnetism (18%)</li>
                  <li>Optics and Wave Phenomena (9%)</li>
                  <li>Thermodynamics and Statistical Mechanics (10%)</li>
                  <li>Quantum Mechanics (12%)</li>
                  <li>Atomic Physics (10%)</li>
                  <li>Special Relativity (6%)</li>
                  <li>Laboratory Methods (6%)</li>
                  <li>Specialized Topics (9%)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Psychology Test">
            <Card>
              <CardContent className="space-y-2">
                <p>
                  The test consists of approx. 144 multiple-choice questions.
                  Each question in the test has five options from which the test
                  taker is to select the one option that is the correct or best
                  answer to the question. The topics include:
                </p>
                <ul className="list-disc ml-6">
                  <li>Biological (30 questions)</li>
                  <li>Cognitive (29 questions)</li>
                  <li>Social (19 questions)</li>
                  <li>Developmental (18 questions)</li>
                  <li>Clinical (23 questions)</li>
                  <li>Measurement/Methodology/Other (25 questions)</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex m-6 flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Also Check
        </h1>
      <table className="min-w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3 border-b border-gray-700 text-left font-semibold">
              GRE Previous Year Papers With Solutions
              </th>
              <th className="px-6 py-3 border-b border-gray-700 font-semibold">
                Youtube
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-300">
              <td className="px-6 py-4 border-b border-gray-700">
             <a className="flex gap-2" target="__blank" href="https://www.manhattanreview.com/free-gre-practice-questions/"> <FaLink size={20}/> Previous Year Papers</a>
              </td>
              <td className="px-6 py-4 border-b flex  gap-3 border-gray-700">
                <a href="https://youtu.be/q-R7LucInKE?si=VmsmPADhLNzsZm4i" target="__blank"><FaYoutube size={25}/></a>
                <a href="https://youtu.be/HDhlXPBXwFA?si=4AFKQi4Bh5IELxst" target="__blank"><FaYoutube size={25}/></a>
                <a href="https://www.youtube.com/playlist?list=PLfSUFKdFlttn1MWrG5Q0-a9Cbm9y3uulX" target="__blank"><FaYoutube size={25}/></a>
                <a href="https://youtu.be/huCAt6KdHMY?si=9aOe49nyQKukcJR7" target="__blank"><FaYoutube size={25}/></a>
              </td>
            </tr>
            </tbody>
            </table>
            </div>
    </div>
  );
}

export default Gre;
