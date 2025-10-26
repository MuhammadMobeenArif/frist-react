
import React from "react";
import gradeCalculator from "./components/gradeCalculator";
import './App.css'

const userName = prompt('Enter Your Name');
const userMarks = +prompt('Enter Your Marks');
const userGrade = gradeCalculator(userMarks);

function App(){
  return(
    <div className="container">
      <h1 className="user-name-style">{userName}</h1>
      <h2 className="user-marks-style">Marks: {userMarks}</h2>
      <h2 className="user-grade-style">Grade: {userGrade}</h2>
    </div>
  )
} 

export default App;