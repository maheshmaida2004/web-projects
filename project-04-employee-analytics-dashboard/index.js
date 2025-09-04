const fs = require("fs");

const data = fs.readFileSync("./employeeData.json", "utf-8");
const employeeData = JSON.parse(data);

function appendtext(data) {
  fs.appendFileSync("output.txt", data, "utf-8");
}

let departmentInfo = {};

let totalEmployee = 0;
let totalSalary = 0;
let averageSalary = 0;
let highestPaidSalary = 0;
let highestpaidName = 0;

employeeData.forEach(function (dataInfo) {
  const { id, name, salary, department } = dataInfo;
  /***********************Total Employeee *************************** */
  totalEmployee = employeeData.length;

  /************************* Average Salary ************************* */
  totalSalary += salary;
  averageSalary = totalSalary / totalEmployee;

  /*****************************   Highest Paid Employee ******************* */
  if (highestPaidSalary < salary) {
    highestPaidSalary = salary;
    highestpaidName = name;
  }

  if (departmentInfo[department] === undefined) {
    departmentInfo[department] = { count: 0, totalSalary: 0 };
  }
  departmentInfo[department].count += 1;
  departmentInfo[department].totalSalary += salary;
});

function appendDepartment(departmentInfo) {
  for (department in departmentInfo) {
    const information = departmentInfo[department];
    const { count, totalSalary } = information;
    const totalAvg = totalSalary / totalEmployee;

    appendtext(`${department}: ${count}employees, Avg Salary ₹${totalAvg}\n`);
  }
}

appendtext(`
    -----------------------------------------
       EMPLOYEE ANALYTICS DASHBOARD
-----------------------------------------
Total Employees: ${totalEmployee}
Average Salary: ₹${averageSalary.toLocaleString()}
Highest Paid Employee: ${highestpaidName}
 (₹${highestPaidSalary.toLocaleString()})
 
 `);
appendDepartment(departmentInfo);

const sortedData = employeeData.toSorted(function (a, b) {
  return b.experience - a.experience;
});

sortedData.forEach(function (dataInfo, i) {
  const { name, experience } = dataInfo;
  appendtext(`${i + 1}. ${name} (${experience} years)\n`);
});
