const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf8");
const studentsData = JSON.parse(data);

function getGrade(percentage) {
  if (percentage >= 90 && percentage <= 100) {
    return "A";
  } else if (percentage >= 75 && percentage <= 90) {
    return "B";
  } else if (percentage >= 55 && percentage <= 75) {
    return "C";
  } else if (percentage >= 30 && percentage <= 55) {
    return "D";
  } else {
  }
}
let studentInformation = "";
let totalPercentage = 0;
let averagePercentage = 0;
let highPercentage = 0;
let topper = null;
let below70Students = [];
let greater75Attendence = [];
studentsData.forEach(function (studentsInfo) {
  const { id, name, marks } = studentsInfo;
  const total = Object.values(marks).reduce(function (acc, ele) {
    return acc + ele;
  }, 0);

  const grandTotal = Object.values(marks).length * 100;
  const percentage = (total / grandTotal) * 100;
  grade = getGrade(percentage);

  totalPercentage += percentage;
  averagePercentage = totalPercentage / studentsData.length;

  if (highPercentage < percentage) {
    highPercentage = percentage;
    topper = name;
  }

  if (percentage < 70) {
    below70Students.push(name);
  }
  if (percentage < 75) {
    greater75Attendence.push(name);
  }

  studentInformation += `${id}. ${name} - Total: ${total} | Percentage: ${percentage.toFixed(
    2
  )}% | Grade: ${grade}\n`;
});

console.log(studentInformation);
console.log(`
  --------------------------------------------
Class Summary:
- Class Average Percentage: ${averagePercentage}%
- Top Performer: ${topper}
- Students Below 70%: ${below70Students}
- Students with Low Attendance (<75%): ${greater75Attendence}
--------------------------------------------`);
// Just a new line
