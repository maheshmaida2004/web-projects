let array = [
  {
    id: 1,
    name: "Aarav Sharma",
    marks: { Math: 88, Science: 92, English: 81 },
    attendance: 95,
  },
  {
    id: 2,
    name: "Priya Das",
    marks: { Math: 76, Science: 85, English: 78 },
    attendance: 88,
  },
  {
    id: 3,
    name: "Rohan Mehta",
    marks: { Math: 65, Science: 72, English: 69 },
    attendance: 80,
  },
  {
    id: 4,
    name: "Sneha Patel",
    marks: { Math: 92, Science: 89, English: 94 },
    attendance: 98,
  },
  {
    id: 5,
    name: "Kabir Khan",
    marks: { Math: 55, Science: 60, English: 58 },
    attendance: 70,
  },
];

function total(stdDetail) {
  let str = 0;
  for (subject in stdDetail.marks) {
    str += stdDetail.marks[subject];
  }
  return str;
}
// let perCount = 0;
// function getPercentage(total) {
//   let percentage = 0;
//   // perCount = Object.keys(array.marks).length;
//   percentage = total / 3;
//   return percentage;
// }

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

// let percentage = 0;
let grade = null;
let info = null;
let result = "";
let subCount = 0;
let totalAvarage = 0;
let average = 0;
let totalAvg = 0;

array.forEach(function (stdDetail) {
  id = stdDetail.id;
  name = stdDetail.name;
  totalmarks = total(stdDetail.marks);
  let percentage =
    (totalmarks / (Object.keys(stdDetail.marks).length * 100)) * 100;
  // percentage = getPercentage(total);

  grade = getGrade(percentage);

  totalAvarage = average += percentage;
  totalAvg = totalAvarage / array.length;

  let info = `${id},${name},${total},${percentage},${grade} \n`;
  result += info;
});
console.log(result);
