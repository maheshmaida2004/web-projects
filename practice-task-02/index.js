// const { count } = require("console");
const fs = require("fs");

const data = fs.readFileSync("./studentData.json", "utf8");
const studsData = JSON.parse(data);

function getGrade(percentage) {
  if (percentage >= 75 && percentage <= 100) {
    return "A";
  } else if (percentage >= 60 && percentage < 75) {
    return "B";
  } else if (percentage >= 40 && percentage < 60) {
    return "C";
  } else if (percentage >= 30 && percentage < 40) {
    return "D";
  } else {
    console.log("Fail");
  }
}

function getTopPerformer(percentage, name) {
  if (topPerformerParcentage < percentage) {
    topPerformerParcentage = percentage;
    topPerformerName = name;
  }
  return [topPerformerName, topPerformerParcentage];
}
function getBelowStd(percentage, name) {
  if (percentage < 70) {
    belowStd.push(name);
    belowStdName = belowStd.join(" ");
  }
}
function getLowAttendenc(attendance, name) {
  if (attendance < 75) {
    lowAttendence75.push(name);
    lowAttendence75Name = lowAttendence75.join(" ");
  }
}

let totalParcentage = 0;
let classAvgParcentage = 0;
let topPerformerParcentage = 0;
let topPerformerName = null;
let belowStd = [];
let belowStdName = null;
let lowAttendence75 = [];
let lowAttendence75Name = null;
let results = null;

studsData.forEach(function (student) {
  const { id, name, marks, attendance } = student;
  const stdMarks = Object.values(marks).reduce(function (acc, value) {
    return acc + value;
  }, 0);
  const percentage = (stdMarks / 300) * 100;

  totalParcentage += percentage;
  classAvgParcentage = totalParcentage / studsData.length;
  getTopPerformer(percentage, name);
  getBelowStd(percentage, name);
  getLowAttendenc(attendance, name);

  results += `${id}. ${name} - Total: ${stdMarks} | Percentage: ${percentage.toFixed(
    2
  )}% | Grade: ${getGrade(percentage)}\n`;
});
const result = `
--------------------------------------------
           CLASS REPORT - AUG 2025
--------------------------------------------

Individual Performance:
${results}
--------------------------------------------
Class Summary:
- Class Average Percentage: ${classAvgParcentage.toFixed(2)}%
- Top Performer: ${topPerformerName}, ${topPerformerParcentage}
- Students Below 70%: ${belowStdName}
- Students with Low Attendance (<75%): ${lowAttendence75Name}
--------------------------------------------`;

fs.writeFileSync("output.txt", result, "utf-8");
