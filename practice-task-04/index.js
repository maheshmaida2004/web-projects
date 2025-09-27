let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync("./data.json", "utf8");
let employesData = JSON.parse(data);

function appendtext(data) {
  fs.appendFileSync("output.txt", data, "utf-8");
}

let totalEmploye = 0;
let totalSalary = 0;
let averageSalary = 0;
let higestPaidEmployeSalary = 0;
let higestPaidEmployeName = null;
let departmentSummary = {};

employesData.forEach(function (employe) {
  const { id, name, department, salary, experience } = employe;
  totalEmploye = employesData.length;
  totalSalary += salary;

  averageSalary = totalSalary / totalEmploye;
  if (higestPaidEmployeSalary < salary) {
    higestPaidEmployeSalary = salary;
    higestPaidEmployeName = name;
  }

  if (departmentSummary[department] === undefined) {
    departmentSummary[department] = { count: 0, salaryPerDepartment: 0 };
  }
  departmentSummary[department].count += 1;
  departmentSummary[department].salaryPerDepartment += salary;
});
function getStrDepartment(departmentSummary) {
  for (let department in departmentSummary) {
    const information = departmentSummary[department];
    const { count, salaryPerDepartment } = information;
    const avgPerDepartment = salaryPerDepartment / count;

    appendtext(
      `${department}: ${count}employees, Avg Salary ₹${avgPerDepartment}\n`
    );
  }
}

function getSortedExperiance(employesData) {
  const sortedData = employesData.sort(function (first, second) {
    // what i want
    if (first.experience > second.experience) return -1;
    // what i don't want
    if (first.experience < second.experience) return 1;
    // i dont care
    if (first.experience === second.experience) return 0;
  });
  sortedData.forEach(function (emp, i) {
    const { name, experience } = emp;
    appendtext(`${i + 1}. ${name} (${experience} years)\n`);
  });
}
appendtext(`
    -----------------------------------------
       EMPLOYEE ANALYTICS DASHBOARD
-----------------------------------------
Total Employees: ${totalEmploye}
Average Salary: ₹${averageSalary.toLocaleString()}
Highest Paid Employee: ${higestPaidEmployeName}
 (₹${higestPaidEmployeSalary.toLocaleString()})
 
 `);
getStrDepartment(departmentSummary);
getSortedExperiance(employesData);
